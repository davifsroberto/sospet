import { FontAwesome } from '@expo/vector-icons';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
  Icon,
} from 'native-base';
import React from 'react';
import { PosterType } from 'src/types/poster.type';

type PosterProps = {
  poster: PosterType;
};

export function Poster({ poster }: PosterProps) {
  return (
    <Box alignItems="center">
      <Box
        width={['96']}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        backgroundColor="lightBlue.50"
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: poster.image.uri,
              }}
              alt={poster.image.alt}
            />
          </AspectRatio>
          <Center
            bg={poster.colorTitle}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="4"
            py="2"
          >
            {poster.title}
          </Center>
        </Box>

        <Stack p="4" space="3">
          <Stack space={2}>
            <Heading color="lightBlue.800" size="md" ml="-1">
              {poster.petName}
              <Text fontSize="sm">{poster.petSex}</Text>
            </Heading>
          </Stack>

          <HStack justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" fontWeight="400">
                {poster.registerDate}
              </Text>
            </HStack>

            <HStack>
              <Text color="coolGray.600" fontWeight="400">
                <Text color="lightBlue.900">{poster.local}</Text>
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <Button
          endIcon={<Icon as={FontAwesome} name="paw" size="sm" color="white" />}
          roundedTop="none"
          w="full"
          bgColor="lightBlue.700"
        >
          <Text lineHeight="xs" fontWeight="bold" color="white" fontSize="lg">
            HELP ME &nbsp;
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
