import styled from "styled-components";
import { useState } from "react";
import Header from "../LandingPage/Header";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");
  return (
    <>
      <Header />
      <Section></Section>
      <LoginForm>
        <FormGroup>
          <h1>Signup</h1>
          <JobProfile></JobProfile>
          <Label htmlFor="fullname">
            Full Name*
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </Label>
          <Label>
            Email Address*
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </Label>
          <Password>
            <Label>
              Create Password*
              <PasswordInput
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </Label>
            <Label>
              Confirm Password*
              <PasswordInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Re-enter your password"
              />
            </Label>
          </Password>
          <Label>
            Skills*
            <Input
              type="text"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
              placeholder="Enter comma seperated skills"
            />
          </Label>
          <Wrapper>
            <LoginButton>Signup</LoginButton>
          </Wrapper>
        </FormGroup>
        <CreateAccount>
          <p>Have an account?</p>
          <Create>Login</Create>
        </CreateAccount>
      </LoginForm>
      <LightSection></LightSection>
    </>
  );
};

export default Signup;

const Section = styled.section`
  height: 400px;
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

const FormGroup = styled.div`
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
