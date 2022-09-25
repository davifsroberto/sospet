import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  HStack,
  IconButton,
  Icon,
  Box,
  View,
  Text,
  Divider,
} from 'native-base';
import React from 'react';

export function Header() {
  return (
    <View>
      <Box safeAreaTop bg="lightBlue.500" />

      <Divider bg="lightBlue.300" />

      <HStack
        bg="lightBlue.500"
        px="4"
        mb="1"
        py="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack>
          <Icon
            as={MaterialCommunityIcons}
            name="dog"
            size="3xl"
            color="white"
          />
          <Text paddingTop="2" fontSize="md" fontWeight="bold" color="white">
            SoS Pet
          </Text>
        </HStack>

        <HStack>
          <IconButton
            icon={
              <Icon
                as={FontAwesome}
                name="user-circle"
                size="xl"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </View>
  );
}
