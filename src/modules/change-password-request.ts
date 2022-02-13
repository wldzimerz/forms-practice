import * as Yup from 'yup';

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  repPassword: string;
}

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().trim().required('No password provided'),
  newPassword: Yup.string()
    .trim()
    .min(4, 'Password is too short - minimum 4 chars.')
    .max(10, 'Password is too long!')
    .required('No password provided')
    .matches(/[A-Z]/, 'Password must contain a one uppercase letter.'),
  repPassword: Yup.string().trim().required('Please repeat new password'),
});
