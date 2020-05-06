import React from 'react';
import styled from '../../base/styled';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { PrimaryButton } from '../../components/buttons';
import { TextField } from '../../components/form';
import { ERROR_MESSAGES } from '../../base/constants';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = { email: '', password: '' };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(ERROR_MESSAGES.EMAIL_INVALID)
    .required(ERROR_MESSAGES.EMAIL_REQUIRED),
  password: Yup.string().required(ERROR_MESSAGES.PASSWORD_REQUIRED),
});

export const LoginForm: React.FC = () => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
        render={(formikBag) => (
          <Form>
            <TextField
              label="Email"
              name="email"
              placeholder="Email address"
              autoFocus
              autoComplete="email"
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <PrimaryButton type="submit">Sign in</PrimaryButton>
          </Form>
        )}
      />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 1rem;
  }
`;
