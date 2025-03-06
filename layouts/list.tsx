import { Box, Em, Heading, Text } from '@radix-ui/themes';

interface Props {
  title: string;
  topics: string[];
  dash?: boolean;
  italic?: boolean;
}

export const List = ({ title, topics, dash, italic }: Props) => {
  return (
    <Box>
      <Heading size='4' mb='3'>
        {title}
      </Heading>
      <ul>
        {topics.map((topic, id) => (
          <li key={id}>
            <Text size='3'>
              {dash && '-'} {italic !== undefined ? <Em>{topic}</Em> : topic}
            </Text>
          </li>
        ))}
      </ul>
    </Box>
  );
};
