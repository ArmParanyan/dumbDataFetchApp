import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerSuccess, authFailure } from '../../store/authSlice';


import "./Register.css"


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

interface FormValues {
    email: string;
    password: string;
}

const initialValues: FormValues = {
    email: "",
    password: "",
}

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = (values: FormValues) => {
        try {
            dispatch(registerSuccess(values));
            navigate("/home/posts");
        } catch (error) {
            dispatch(authFailure(error));

        }
        
        
    }

  return (
    <div className='registration-form-wrapper'>
        <p>Register</p>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

            <Form className='registration-form'>
                <div className='registration-in-inputs-and-button-wrapper'>
                    <div className="registration-inputs">
                        <div className="registration-inputs-wrapper">
                            <div className="field-wrapper">
                                <label htmlFor="email">Email</label>
                                <Field className="registration-input" type="text" name="email" placeholder="email" />
                            </div>
                            <ErrorMessage name='email' className='error-message' component="div" />
                        </div>

                        <div className="registration-inputs-wrapper">
                            <div className="field-wrapper">
                                <label htmlFor="password">Password</label>
                                <Field className="registration-input" type="password" name="password" placeholder="password"/>
                            </div>
                            <ErrorMessage name='password' className='error-message' component="div" />
                        </div>
                    </div>

                    <div className='register-buttons-wrapper'>
                        <button className='cancel' onClick={() => navigate("/welcome")}>cancel</button>
                        <button type='submit'>Register</button>
                    </div>
                </div>

                <p className='registration-footer'>already registered <a href="/login">login</a> here </p>
            </Form>

        </Formik>
    </div>
  )
}

export default Register;