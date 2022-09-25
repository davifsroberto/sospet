import { Header } from '@containers/Header';
import { Ionicons } from '@expo/vector-icons';
import { Box, Text, Button, Stack, Icon, Center } from 'native-base';
import React from 'react';

export function CreateOptionScreen() {
  return (
    <Box backgroundColor="lightBlue.100" height="full">
      <Header />

      {/* TODO: Implement this screen */}
      <Stack textAlign="center" w="90%" maxW="full" mx="auto">
        <Center mb="4">
          <Text fontSize="2xl">Create an Ad</Text>
          <Text fontSize="lg">
            Select the ad option, we will help you and your Pet.
          </Text>
        </Center>

        {/* TODO: implement route with params for create screen */}
        <Button
          leftIcon={
            <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
          }
        >
          DONATION
        </Button>

        <Button
          my="10"
          leftIcon={
            <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
          }
        >
          MISSING
        </Button>

        <Button
          leftIcon={
            <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
          }
        >
          FOUND
        </Button>
      </Stack>
    </Box>
  );
}
