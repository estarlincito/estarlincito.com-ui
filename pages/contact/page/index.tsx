import { Container, Wrapper } from '@/shared-ui';

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
