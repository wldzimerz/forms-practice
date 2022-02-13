import { LoginRequest } from '../modules/login-request';
import { RegistrationRequest } from '../modules/registration-request';
import { ChangePasswordRequest } from '../modules/change-password-request';

class Request {
  signInRequest = (data: LoginRequest) => {
    console.log('🚀🚀🚀 Sign in request body: ', data);
    localStorage.setItem('userAuth', JSON.stringify(data));
  };

  signUpRequest = (data: RegistrationRequest) => {
    console.log('🚀🚀🚀 Sign up request body: ', data);
    localStorage.setItem('userAuth', JSON.stringify(data));
  };

  chgPasswordRequest = (data: ChangePasswordRequest) => {
    console.log('🚀🚀🚀 Change password body: ', data);
  };
}

const request = new Request();

export default request;
