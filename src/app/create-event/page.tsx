"use client"
import Image from "next/image";
import "./page.css";
import CustomCallOut from "../components/common/CustomCallOut";
import { Box, Flex, Grid, Heading, Section, Select, Text, TextField } from "@radix-ui/themes";
import * as Form from '@radix-ui/react-form';
import { ClockIcon, GlobeIcon, Link2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
export default function CreateEvent() {
  const [textFieldInputState, getTextFieldInputState] = useState();
  return (
    <Box maxWidth={"570px"}>
      <Section>
        <div className="section-head">
          <Heading mb={"4"} size={"6"}>Create Event</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
        </div>
        <Form.Root className="CreateEvent">
          <Form.Field className="FormField" name="email">
            <div className="labelContainer">
              <Form.Label className="FormLabel">Event Name</Form.Label>
            </div>

            <Form.Control asChild>
              <input className="Input" type="email" required placeholder="Your event name" />
            </Form.Control>
          </Form.Field>
          <div>
            <div className="labelContainer">
              <label className="FormLabel">Description</label>
            </div>
            <Grid className="form-grid-container" columns={{ md: "2", xs: "1" }} gap={"3"} rows="repeat(2, auto)" width={"auto"}>
              <Form.Field className="FormField" name="email">
                <Form.Control asChild>
                  <Select.Root size="3" defaultValue="apple">
                    <Select.Trigger className="trigger-select"/>
                    <Select.Content>
                      <Select.Item value="apple">Apple</Select.Item>
                      <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="email">
                <Form.Control asChild>
                  <Select.Root size="3" defaultValue="Apple">
                    <Select.Trigger className="trigger-select">
                    <Flex as="span" align="center" gap="2">
                      <GlobeIcon/>
                      Time Zone
                    </Flex>
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="apple">Apple</Select.Item>
                      <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="email">
                <Form.Control asChild>
                  <Select.Root size="3" defaultValue="Apple">
                    <Select.Trigger className="trigger-select">
                    <Flex as="span" align="center" gap="2">
                      <ClockIcon/>
                      Start Time
                    </Flex>
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="apple">Apple</Select.Item>
                      <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="email">
                <Form.Control asChild>
                  <Select.Root size="3" defaultValue="Apple">
                    <Select.Trigger className="trigger-select">
                    <Flex as="span" align="center" gap="2">
                      <ClockIcon/>
                      End Time
                    </Flex>
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="apple">Apple</Select.Item>
                      <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Form.Control>
              </Form.Field>
            </Grid>
          </div>

          <Form.Field className="FormField" name="email">
            <div className="labelContainer">
              <Form.Label className="FormLabel">Description</Form.Label>
            </div>
            <Form.Control asChild>
              <textarea className="Input" required placeholder="Add event description..." />
            </Form.Control>
          </Form.Field>

          <Form.Field className="FormField" name="email">
            <div className="labelContainer">
              <Form.Label className="FormLabel">Video</Form.Label>
            </div>
            <div className="FormControlWrapper">
              <Link2Icon />
              <Form.Control asChild>
                <input className="Input" type="text" required placeholder="Video Link..." />
              </Form.Control>
            </div>
          </Form.Field>



          <Form.Field className="FormField" name="email">
            <div className="labelContainer">
              <Form.Label className="FormLabel">Email</Form.Label>
            </div>
            <Form.Control asChild>
              <input className="Input" type="email" required />
            </Form.Control>
          </Form.Field>

        </Form.Root>
      </Section>
    </Box>
  );
}
