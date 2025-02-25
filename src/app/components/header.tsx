"use client";
import LayoutPropsInterface from "@/interfaces/layoutInterface";
import styles from "./header.module.css";
import { classNames } from "@/utils/clasNames";
import NextLink from "next/link";
import { Avatar, Button, Flex, IconButton, Link, Tooltip } from "@radix-ui/themes";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { BellIcon, GearIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
export interface HeaderProps {
  data?: React.ReactNode;
  ghost?: boolean;
}
type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";
export default function Header({ data, ghost }: HeaderProps) {
  const router = usePathname();
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  return (
    <>
      <div className={classNames(styles.HeaderRoot, ghost ? styles.ghost : "")}>
        <div className={styles.HeaderInner}>
          <div
            style={{
              height: "inherit",
              top: 0,
              left: 0,
              right: 0,
              minHeight: "64px",
            }}
          >


            <Flex
              display={{ initial: "none", md: "flex" }}
              align="center"
              gap="5"
              pr="4"
              justify={"end"}
              pt={"4"}
              pb={"4"}
            >
              <div>
                <Button variant="soft" color="gray"><BellIcon width={18} height={18} /></Button>
              </div>

              <Avatar
                size="2"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                fallback="A"
              />
            </Flex>

            <Flex
              display={{ md: "none" }}
              align="center"
              gap="4"
              top="0"
              bottom="0"
              right="0"
              pr="4"
            >
              <Tooltip
                className="radix-themes-custom-fonts"
                content="Navigation"
              >
                <IconButton
                  size="3"
                  variant="ghost"
                  color="gray"
                  className={styles.MobileMenuButton}
                >
                  <HamburgerMenuIcon width="16" height="16" />
                </IconButton>
              </Tooltip>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

