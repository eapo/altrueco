import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { CheckCircleIcon, CircleIcon } from '@chakra-ui/icons';

export const TasksHeader = () => (
  <Stack as={Box} textAlign="center" spacing={{ base: 8 }} py={{ base: 10 }}>
    <Heading fontWeight={600}>
      <Text as="span" bgGradient="linear(to-l, #675AAA, #4399E1)" bgClip="text">
        List of <CheckCircleIcon /> Goods & Services and <CircleIcon /> Needs
      </Text>
    </Heading>
  </Stack>
);
