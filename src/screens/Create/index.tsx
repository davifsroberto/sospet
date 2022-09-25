import { Header } from '@containers/Header';
import { Box, Text, Stack, Center } from 'native-base';
import React from 'react';

export function CreateScreen() {
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

          {/* TODO: IMPLEMENT: create rule for call correct screen, Donate, Missing or Found */}
        </Center>
      </Stack>
    </Box>
  );
}
