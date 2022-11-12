import { useState } from 'react';
import { render } from 'react-dom';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object().shape({
    FullName: yup.string().required().min(5).max(15),
    Email: yup.string().required(),
    Password: yup.string().required().min(5),
    confirmPassword: yup.string().required().oneOf([yup.ref("Password")], "Password must be match"),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),

});

const SignUp = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                FullName: '',
                Email: '',
                Password: '',
                confirmPassword: '',
                terms: false,

            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <>
                    <h2>SignUp Form</h2>
                    <Form onSubmit={handleSubmit} id="signupForm">
                        <Row className="mb-6">
                            <Form.Group as={Col} md="12">
                                <Form.Label className='labelName'>FullName</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder='FullName'
                                    name="FullName"
                                    value={values.FullName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.FullName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.FullName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12">
                                <Form.Label className='labelName'>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        name="Email"
                                        value={values.Email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Email}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-6">
                            <Form.Group as={Col} md="12">
                                <Form.Label className='labelName'>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="Password"
                                    value={values.Password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.Password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.Password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12">
                                <Form.Label className='labelName'>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="ConfrimPassword"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit" variant="dark" onClick={handleSubmit}>Submit</Button>
                    </Form>
                </>
            )}
        </Formik>
    );
}

// render(<SignUp />);

export default SignUp;