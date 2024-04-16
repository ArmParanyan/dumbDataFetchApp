import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, authFailure } from '../../store/authSlice';
import { RootState } from '../../store/store'; 
import { User } from '../../store/authSlice';

import "./Login.css"

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.auth.users);

  const handleSubmit = (values: FormValues) => {
    const user = users.find((user: User) => user.email === values.email && user.password === values.password);

    if (user) {
      dispatch(loginSuccess(user));
      navigate("/home");
    } else {
      dispatch(authFailure("Invalid email or password"));
    }
  }

  return (
    <div className='registration-form-wrapper'>
      <p>Login</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='login-form'>
          <div className='login-in-inputs-and-button-wrapper'>
            <div className="login-inputs">
              <div className="login-inputs-wrapper">
                <div className="field-wrapper">
                  <label htmlFor="email">Email</label>
                  <Field className="login-input" type="text" name="email" placeholder="email" />
                </div>
                <ErrorMessage name='email' className='error-message' component="div" />
              </div>

              <div className="login-inputs-wrapper">
                <div className="field-wrapper">
                  <label htmlFor="password">Password</label>
                  <Field className="login-input" type="password" name="password" placeholder="password" />
                </div>
                <ErrorMessage name='password' className='error-message' component="div" />
              </div>
            </div>

            <div className='login-buttons-wrapper'>
              <button className='cancel' onClick={() => navigate("/welcome")}>cancel</button>
              <button type='submit'>Login</button>
            </div>
          </div>

          <p className='login-footer'>haven't logged in <a href="/register">register</a> here </p>
        </Form>
      </Formik>
    </div>
  )
}

export default Login;
