import { Header } from '@components/Header';
import {
  Text,
  View,
  Center,
  Box,
  FormControl,
  Input,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';

export function CreateScreen() {
  return (
    <>
      <Header />

      <View>
        <Center>
          <Text fontSize="2xl">Create an Ad</Text>
          <Text fontSize="lg">We will help you find your pet</Text>

          <Box alignItems="center">
            <FormControl isInvalid>
              <FormControl.Label>Password</FormControl.Label>
              <Input placeholder="Enter password" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Try different from previous passwords.
              </FormControl.ErrorMessage>

              <Input variant="underlined" placeholder="Underlined" />
            </FormControl>
          </Box>
        </Center>
      </View>
    </>
  );
}
