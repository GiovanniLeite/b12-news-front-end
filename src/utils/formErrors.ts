import { toast } from 'react-toastify';
import * as val from 'validator';
import { get } from 'lodash';

import { UserDataForm } from '../types/users/userForm';

export const handleFormError = (inputs: string[], errorMessage: string) => {
  inputs.forEach((input) => {
    document.getElementById(input)?.classList.add('error'); // Red border
  });
  toast.error(errorMessage); // Display the error message
};

export const hasError = (condition: boolean, inputs: string[], errorMessage: string): boolean => {
  // An error occurred
  if (condition) {
    handleFormError(inputs, errorMessage);
    return true;
  }

  return false;
};

export const isFormValid = (
  { name, email, identifier, username, password, confirmPassword }: UserDataForm,
  saveButton: string,
): boolean => {
  // Define the validations to be performed
  const validations = {
    info: [
      {
        condition: name.length < 3,
        inputs: ['name'],
        errorMessage: 'O nome deve ter pelo menos 3 caracteres',
      },
      {
        condition: !val.default.isEmail(email),
        inputs: ['email'],
        errorMessage: 'Email inválido',
      },
      {
        condition: username.length < 6 || username.length > 15,
        inputs: ['username'],
        errorMessage: 'O usuário deve ter entre 6 e 15 caracteres',
      },
    ],
    password: [
      {
        condition: password.length < 8,
        inputs: ['password', 'confirmPassword'],
        errorMessage: 'A senha deve ter pelo menos 8 caracteres',
      },
      {
        condition: password !== confirmPassword,
        inputs: ['password', 'confirmPassword'],
        errorMessage: 'A senha e a confirmação devem ser iguais',
      },
    ],
    login: [
      {
        condition: identifier?.trim().length === 0,
        inputs: ['identifier'],
        errorMessage: 'O usuário não pode ficar vazio',
      },
      {
        condition: password?.trim().length === 0,
        inputs: ['passwordLogin'],
        errorMessage: 'A senha não pode ficar vazia',
      },
    ],
  };
  const validationMap = {
    login: validations.login,
    register: [...validations.info, ...validations.password],
    editInfo: validations.info,
    editPassword: validations.password,
  };

  // Selects the validations based on the clicked button
  const validationsArray = get(validationMap, saveButton, []);

  // Check each validation and handle errors if they occur
  let hasErrors = false;
  validationsArray.forEach(({ condition, inputs, errorMessage }) => {
    hasErrors = hasError(condition, inputs, errorMessage) || hasErrors;
  });

  // Returns true (valid) if there are no errors in the form
  return !hasErrors;
};
