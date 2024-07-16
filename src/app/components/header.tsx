"use client";
import LayoutPropsInterface from "@/interfaces/layoutInterface";
import styles from "./header.module.css";
import { classNames } from "@/utils/clasNames";
import NextLink from "next/link";
import { Avatar, Button, Flex, IconButton, Link, Tooltip, Grid } from "@radix-ui/themes";
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
          <Grid columns={{ initial: '2', md: '1' }} style={{ justifyContent: 'space-between' }} gap="3" width="auto">
            <Flex
              display={{ md: "none" }}
              pt={"4"}
              pb={"4"}
            >
              <NextLink href="/" passHref legacyBehavior>
                <Flex align="center"><GearIcon width={26} height={26} /><span style={{ marginLeft: '0.5rem', fontSize: '26px' }}>ShowOps</span></Flex>
              </NextLink>
            </Flex>

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
              justify="end"
              gap="4"
            >
              <Button variant="soft" style={{paddingLeft:10, paddingRight:10, paddingTop:8, paddingBottom:8}}>
                <HamburgerMenuIcon width="20" height="20" />
              </Button>
            </Flex>

          </Grid>
        </div>
      </div>
    </>
  );
}

