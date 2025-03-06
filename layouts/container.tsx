import { Container as RadixContainer } from '@radix-ui/themes';

import Children from '@/types/children';

interface Props extends Children {
  size: '1' | '2' | '3' | '4';
}

export const Container = (props: Props) => {
  return (
    <RadixContainer minHeight='90vh' size={props.size} mt='70px' mx='2'>
      {props.children}
    </RadixContainer>
  );
};
