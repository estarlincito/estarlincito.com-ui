import { Container } from '@radix-ui/themes';

import { Wrapper } from './../../../layouts';
import ContactForm from './form';

export const ContactPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <ContactForm />
      </Wrapper>
    </Container>
  );
};
