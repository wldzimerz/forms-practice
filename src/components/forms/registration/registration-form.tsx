import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../../../hooks';
import { RegistrationSchema } from '../../../modules/registration-request';
import { setUserEmail, setUserPassword } from '../../../store/user-data.slice';
import request from '../../../services/request';

import s from './styles.module.css';

const RegistrationForm = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.form}>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repPassword: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={({email, password, repPassword}, { resetForm }) => {
          if (password === repPassword) {
            dispatch(setUserEmail(email))
            dispatch(setUserPassword(password))
            request.signUpRequest({email, password});
            resetForm();
          } else {
            alert('Password must be the same')
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={s.fields}>
              <Field name='email' type='email' placeholder='example@you.com' />
              {errors.email && touched.email ? <span>{errors.email}</span> : null}
              <Field name='password' type='password' placeholder='Password' />
              {errors.password && touched.password ? <span>{errors.password}</span> : null}
              <Field name='repPassword' type='password' placeholder='Password' />
              {errors.repPassword && touched.repPassword ? <span>{errors.repPassword}</span> : null}
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
