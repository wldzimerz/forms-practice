import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../hooks';
import { LoginRequest, LoginSchema } from '../../../modules/login-request';
import { setUserEmail, setUserPassword } from '../../../store/user-data.slice';
import request from '../../../services/request';

import s from './styles.module.css';

const LoginForm = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.form}>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values: LoginRequest, { resetForm }) => {
          request.signInRequest(values);
          dispatch(setUserEmail(values.email))
          dispatch(setUserPassword(values.password))
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={s.fields}>
              <Field name='email' type='email' placeholder='example@you.com' />
              {errors.email && touched.email ? <span>{errors.email}</span> : null}
              <Field name='password' type='password' placeholder='Password' />
              {errors.password && touched.password ? <span>{errors.password}</span> : null}
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
