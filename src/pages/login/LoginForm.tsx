import React from 'react';
import styled from '../../base/styled';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import { PrimaryButton } from '../../components/buttons';
import { TextField } from '../../components/form';
import { ERROR_MESSAGES } from '../../base/constants';
import { Status } from '../../components/form/Status';
import { getAuthentication } from '../../base/auth/getAuthentication';
import { getUser } from '../../base/auth/getUser';
import { Authentication } from '../../typings/authentication';
import { User } from '../../typings/user';

interface Props {
  onSuccess: (authentication: Authentication, user: User) => void;
}

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

export const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const { username, password } = values;

    const handleErrors = () => actions.setStatus(ERROR_MESSAGES.GENERIC);

    const authentication = await getAuthentication({
      username,
      password,
      handleErrors,
    });

    const user = await getUser({
      authentication: authentication?.data,
      handleErrors,
    });

    if (!authentication || !user) {
      return;
    }

    onSuccess(authentication.data, user.data.data);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ status, setStatus }) => {
          return (
            <>
              {status && (
                <Status status={status} close={() => setStatus(undefined)} />
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
      </Formik>
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
