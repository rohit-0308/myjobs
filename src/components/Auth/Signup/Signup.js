import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Header from "../../Signup-login Header/Header";

const Signup = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      userRole: 0,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      skills: "",
    },
    onSubmit: async ({
      userRole,
      name,
      email,
      password,
      confirmPassword,
      skills,
    }) => {
      const data = await axios.post(
        " https://jobs-api.squareboat.info/api/v1/auth/register",
        {
          userRole,
          name,
          email,
          password,
          confirmPassword,
          skills,
        }
      );
      const token = data.data.data.token;
      const userName = data.data.data.name;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      history.push("/home");
    },
    validate: (values) => {
      let error = {};

      if (!values.name) error.name = "The field is mandatory";

      if (!values.email) {
        error.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      )
        error.email = "Invalid Email";

      if (!values.password || !values.confirmPassword) {
        error.password = "This field is mandatory";
        error.confirmPassword = "This field is mandatory";
      }

      return error;
    },
  });

  return (
    <>
      <Header />
      <Section></Section>
      <LoginForm>
        <FormGroup onSubmit={formik.handleSubmit}>
          <h1>Signup</h1>
          <JobProfile></JobProfile>
          <Label htmlFor="fullname">
            Full Name*
            <Input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
              placeholder="Enter your full name"
            />
          </Label>
          {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
          <Label>
            Email Address*
            <Input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              placeholder="Enter your full name"
            />
          </Label>
          {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
          <Password>
            <Label>
              Create Password*
              <PasswordInput
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
                placeholder="Enter your password"
              />
            </Label>
            <Label>
              Confirm Password*
              <PasswordInput
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                required
                placeholder="Re-enter your password"
              />
            </Label>
          </Password>
          {formik.errors.confirmPassword ? (
            <Error>{formik.errors.confirmPassword}</Error>
          ) : null}
          <Label>
            Skills
            <Input
              type="text"
              name="skills"
              value={formik.values.skills}
              onChange={formik.handleChange}
              required
              placeholder="Enter comma seperated skills"
            />
          </Label>
          <Wrapper>
            <LoginButton type="submit">Signup</LoginButton>
          </Wrapper>
        </FormGroup>
        <CreateAccount>
          <p>Have an account?</p>
          <Link to="/login" style={{ "text-decoration": "none" }}>
            <Create>Login</Create>
          </Link>
        </CreateAccount>
      </LoginForm>
      <LightSection></LightSection>
    </>
  );
};

export default Signup;

const Section = styled.section`
  height: 320px;
  background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
    0% no-repeat padding-box;
  width: auto;
`;

const LightSection = styled.section`
  height: 600px;
  background: #edf6ff;
  width: auto;
`;

const JobProfile = styled.div``;

const LoginForm = styled.div`
  height: 711px;
  width: 557px;
  z-index: 5;
  background-color: white;
  padding: 30px 20px;
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 10%;
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items:center; */
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

const Password = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PasswordInput = styled.input`
  margin: 14px 0;
  padding: 14px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  width: 238px;
  &:focus {
    outline: 1px solid #43afff;
  }
`;

const Input = styled.input`
  margin: 14px 0;
  padding: 14px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  font-size: 14px;

  &:focus {
    outline: 1px solid #43afff;
  }
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

const Create = styled.a`
  margin-left: 5px;
  color: #43afff;
  cursor: pointer;
`;

const Error = styled.div`
  width: auto;
  color: red;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 10px;
  margin-left: auto;
  display: flex;
  align-items: flex-end;
`;
