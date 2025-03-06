import { Flex, Separator } from '@radix-ui/themes';

import { Breadcrumb, Summary, Title } from '../ui';

interface Props {
  title: string;
  summary: string;
  slug: { title: string; route: string }[];
}

export const Header = ({ title, summary, slug }: Props) => {
  const [firstSlug, secondSlug, thirdSlug] = slug;
  return (
    <Flex direction='column' width='100%' gapY='1'>
      <Breadcrumb
        slug={[firstSlug, secondSlug && secondSlug, thirdSlug && thirdSlug]}
      />

      <Title>{title}</Title>
      <Summary summary={summary} />
      <Separator orientation='horizontal' size='4' mt='2' />
    </Flex>
  );
};
