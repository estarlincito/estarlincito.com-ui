import { formZed, type Name } from '@estarlincito/utils';
import * as Form from '@radix-ui/react-form';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Flex, TextArea, TextField } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import {
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';

const styles = {
  field: stylez.create({
    display: 'grid',
    marginBottom: '10px',
  }),

  label: stylez.create({
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '35px',
  }),

  message: stylez.create({
    color: 'red',
    fontSize: '13px',
    marginLeft: '10px',
    opacity: '0.8',
  }),
};

type Props<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: true;
  textarea?: true;
};

const Field = <T extends FieldValues>(props: Props<T>) => {
  const { name, textarea, register, required } = props;
  const properties = formZed(name as Name)!;
  const title = properties.title;

  const options = {
    ...register(name),
    ...properties,
    required: required ? true : false,
  };

  return (
    <Form.Field name={name} {...stylez.className(styles.field)}>
      <Box>
        <Form.Label {...stylez.className(styles.label)}>{title}</Form.Label>
        <Form.Message
          match='valueMissing'
          {...stylez.className(styles.message)}
        >
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please enter your ${title.toLowerCase()}`}
          </Flex>
        </Form.Message>
        <Form.Message
          {...stylez.className(styles.message)}
          match='typeMismatch'
        >
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${title.toLowerCase()}`}
          </Flex>
        </Form.Message>

        <Form.Message {...stylez.className(styles.message)} match='tooLong'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${title.toLowerCase()}`}
          </Flex>
        </Form.Message>

        <Form.Message {...stylez.className(styles.message)} match='tooShort'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${title.toLowerCase()}`}
          </Flex>
        </Form.Message>
      </Box>

      <Form.Control asChild>
        {textarea === true ? (
          <TextArea {...options} />
        ) : (
          <TextField.Root {...options} />
        )}
      </Form.Control>
    </Form.Field>
  );
};

export default Field;
