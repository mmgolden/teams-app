import React from 'react';
import styled from '../../base/styled';
import { Field, FieldProps } from 'formik';

interface Props {
  type?: 'text' | 'email' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  autoFocus?: boolean;
  autoComplete?: string;
}

export const TextField: React.FC<Props> = ({
  type = 'text',
  label,
  name,
  placeholder,
  autoFocus = false,
  autoComplete,
}) => {
  return (
    <Field
      name={name}
      render={({ field, form, meta }: FieldProps) => {
        return (
          <FieldContainer>
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              id={name}
              autoFocus={autoFocus}
              autoComplete={autoComplete}
              {...field}
              placeholder={placeholder ? placeholder : undefined}
              className={meta.touched && meta.error ? 'input-error' : undefined}
            />
            {meta.touched && meta.error && (
              <span className="field-error">{meta.error}</span>
            )}
          </FieldContainer>
        );
      }}
    />
  );
};

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;

  label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryFont};
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
    margin-bottom: 0.75rem;
  }

  .input-error {
    border: ${({ theme }) => `1px solid ${theme.colors.error}`};
  }

  .field-error {
    display: block;
    color: ${({ theme }) => theme.colors.error};
    font-size: 0.875rem;
  }
`;
