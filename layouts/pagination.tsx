import { type LinkType } from '@estarlincito/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Link, Strong, Text } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import React from 'react';

const styles = stylez.create({ alignItems: 'center', display: 'inline-flex' });

interface Props {
  prev: LinkType;
  next: LinkType;
  route: string;
  length: number;
  start: number;
  end: number;
  title: string;
}

export const Pagination = (props: Props) => {
  const { next, prev, length, start, end, title } = props;
  return (
    <Flex gapX='2'>
      <Box>
        <Strong>{title}</Strong>
      </Box>

      <Flex gapX='3' align='center'>
        <Text>
          {start}–{end} of {length}
        </Text>

        {!prev.stop ? (
          <Link href={prev.query} {...stylez.className(styles)}>
            <IconButton size='1' variant='ghost'>
              <ChevronLeftIcon width='18' height='18' />
            </IconButton>
          </Link>
        ) : (
          <ChevronLeftIcon width='18' height='18' />
        )}

        {!next.stop ? (
          <Link href={next.query} {...stylez.className(styles)}>
            <IconButton size='1' variant='ghost'>
              <ChevronRightIcon width='18' height='18' />
            </IconButton>
          </Link>
        ) : (
          <ChevronRightIcon width='18' height='18' />
        )}
      </Flex>
    </Flex>
  );
};
