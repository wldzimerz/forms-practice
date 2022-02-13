import { Routes, Route } from 'react-router-dom';

import LoginForm from './components/forms/login/login-form';
import RegistrationForm from './components/forms/registration/registration-form';
import PasswordChangeForm from './components/forms/password/password-change-form';
import NavBar from './components/navbar/navbar';
import PrivateRoute from './utils/private-router';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route
          path='/resetpassword'
          element={
            <PrivateRoute>
              <PasswordChangeForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
