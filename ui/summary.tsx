import { Blockquote } from '@radix-ui/themes';

interface Props {
  summary: string;
}

export const Summary = ({ summary }: Props) => {
  return <Blockquote>{summary}</Blockquote>;
};
