import * as Yup from 'yup';

export interface LoginRequest {
  email: string;
  password: string;
}

export const LoginSchema = Yup.object().shape({
  email: Yup.string().trim().email('Email is invalid').required('Email is required').max(100),
  password: Yup.string().trim().required('No password provided'),
});
