import { Formik, Form, Field } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { ChangePasswordSchema } from '../../../modules/change-password-request';
import { setUserPassword, userPassword } from '../../../store/user-data.slice';
import request from '../../../services/request';

import s from './styles.module.css';

const PasswordChangeForm = () => {
  const dispatch = useAppDispatch();
  const statePassword = useAppSelector(userPassword);

  return (
    <div className={s.form}>
      <h1>Change password</h1>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          repPassword: '',
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={({ oldPassword, newPassword, repPassword }, { resetForm }) => {
          if (oldPassword === statePassword && newPassword === repPassword) {
            dispatch(setUserPassword(newPassword));
            request.chgPasswordRequest({ oldPassword, newPassword, repPassword });
            resetForm();
          } else {
            alert('Password is invalid');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={s.fields}>
              <Field name='oldPassword' type='password' placeholder='Old password' />
              {errors.oldPassword && touched.oldPassword ? <span>{errors.oldPassword}</span> : null}
              <Field name='newPassword' type='password' placeholder='New password' />
              {errors.newPassword && touched.newPassword ? <span>{errors.newPassword}</span> : null}
              <Field name='repPassword' type='password' placeholder='Repeat password' />
              {errors.repPassword && touched.repPassword ? <span>{errors.repPassword}</span> : null}
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordChangeForm;
