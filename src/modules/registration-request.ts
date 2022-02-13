import * as Yup from 'yup';

export interface RegistrationRequest {
  email: string;
  password: string;
}

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string().trim().email('Email is invalid').required('Email is required').max(100),
  password: Yup.string().trim().min(4, 'Password is too short - minimum 4 chars.').max(10, 'Password is too long!').required('No password provided').matches(/[A-Z]/, 'Password must contain a one uppercase letter.'),
  repPassword: Yup.string().trim().required('Please repeat password'),
});
