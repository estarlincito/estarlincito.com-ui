import { Flex } from '@radix-ui/themes';
import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <Flex
      direction='column'
      gap='5'
      p='5'
      align={props.align}
      justify='center'
      minHeight='90vh'
    >
      {props.children}
    </Flex>
  );
};
