import styled from "styled-components";
import { useFormik } from "formik";
import Header from "../LandingPage/Header";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Header />
      <Section></Section>
      <ForgotPasswordSection>
        <h1>Forget your password?</h1>
        <p>
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>
        <Form onSubmit={formik.handleSubmit}>
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
            placeholder="Enter your email"
          />
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </ForgotPasswordSection>
      <LightSection></LightSection>
    </>
  );
};

export default ForgotPassword;

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

const ForgotPasswordSection = styled.div`
  height: 318px;
  width: 557px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  padding: 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 148px;
  height: 46px;
  color: white;
  background-color: #43afff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* font-weight: bold; */
  font-size: 16px;
`;
