import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Signup-login Header/Header";
import axios from "axios";

import { useFormik } from "formik";

const Login = () => {
  const [error, setError] = useState();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      try {
        const data = await axios.post(
          " https://jobs-api.squareboat.info/api/v1/auth/login",
          {
            email,
            password,
          }
        );
        const token = data.data.data.token;
        localStorage.setItem("token", token);
        history.push("/home");
      } catch (error) {
        setError("Invalid Credentials");
        console.log("Invalid credentials");
      }
    },
    // validate: values => {
    //   let errors = {}

    //   if(!values.email || !values.password ){
    //     errors.email = "Email is required"
    //   }

    //   return errors
    // }
  });

  return (
    <>
      <Header />
      <Section></Section>
      <LoginForm>
        <FormGroup onSubmit={formik.handleSubmit}>
          <h1>Login</h1>
          <Label htmlFor="email">
            Email Address
            <Input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              placeholder="Enter your email"
            />
          </Label>
          <Label htmlFor="password">
            <Labels>
              <p>Password</p>
              <Link to="/forgotPassword" style={{ "text-decoration": "none" }}>
                <ForgetPassword>Forgot your password?</ForgetPassword>
              </Link>
            </Labels>
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
              placeholder="Enter your password"
            />
          </Label>
          <Wrapper>
            <LoginButton type="submit">Login</LoginButton>
          </Wrapper>
        </FormGroup>
        <CreateAccount>
          <p>New to MyJobs?</p>
          <Link to="/signup" style={{ "text-decoration": "none" }}>
            <Create>Create an account</Create>
          </Link>
        </CreateAccount>
        {error ? <p>{error}</p> : null}
      </LoginForm>
      <LightSection></LightSection>
    </>
  );
};

export default Login;

const Section = styled.section`
  height: 320px;
  background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
    0% no-repeat padding-box;
  width: auto;
`;

const LightSection = styled.section`
  height: 325px;
  background: #edf6ff;
  width: auto;
`;

const LoginForm = styled.div`
  height: 427px;
  width: 557px;
  z-index: 5;
  background-color: white;
  padding: 30px 20px;
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgetPassword = styled.a`
  color: #43afff;
  cursor: pointer;
`;

const Input = styled.input`
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #43afff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  height: 46px;
  width: 148px;
  margin: 24px 0;
  background-color: #43afff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Create = styled.p`
  margin-left: 5px;
  color: #43afff;
  cursor: pointer;
`;
