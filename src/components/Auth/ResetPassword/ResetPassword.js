import React from "react";
import styled from "styled-components";
import Header from "../../LandingPage/Header";
import { useFormik } from "formik";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Header />
      <Section></Section>
      <Container>
        <h1>Reset Your Password</h1>
        <p>Enter your new password below</p>

        <Form onSubmit={formik.handleSubmit}>
          <Label>
            New Password
            <Input
              type="password"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              required
              placeholder="Enter new password"
            />
          </Label>
          <Label>
            Confirm New Password
            <Input
              type="password"
              name="ConfirmNewPassword"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              required
              placeholder="Enter new password"
            />
          </Label>
        </Form>
        <ButtonWrapper>
          <Button>Reset</Button>
        </ButtonWrapper>
      </Container>
      <LightSection></LightSection>
    </>
  );
};

export default ResetPassword;

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

const Container = styled.div`
  height: 408px;
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
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 14px 0;
  padding: 14px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #43afff;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
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
