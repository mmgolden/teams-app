import React from 'react';
import styled from '../../base/styled';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import { PrimaryButton } from '../../components/buttons';
import { TextField } from '../../components/form';
import { ERROR_MESSAGES } from '../../base/constants';
import axios from 'axios';
import { Status } from '../../components/form/Status';

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = { username: '', password: '' };

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email(ERROR_MESSAGES.EMAIL_INVALID)
    .required(ERROR_MESSAGES.EMAIL_REQUIRED),
  password: Yup.string().required(ERROR_MESSAGES.PASSWORD_REQUIRED),
});

const handleSubmit = async (
  values: FormValues,
  actions: FormikHelpers<FormValues>
) => {
  const { username, password } = values;

  // Get token from API
  try {
    const authentication = await axios.post(
      `${process.env.REACT_APP_TOKEN_URL}`,
      {
        username,
        password,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        scope: process.env.REACT_APP_SCOPE,
      }
    );

    console.log(authentication);
  } catch (error) {
    actions.setStatus('Something went wrong');
  }
};

export const LoginForm: React.FC = () => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={({ status, setStatus }) => {
          return (
            <>
              {status && (
                <Status
                  status="Something went wrong"
                  close={() => setStatus(undefined)}
                />
              )}
              <Form>
                <TextField
                  label="Email"
                  name="username"
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
            </>
          );
        }}
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
