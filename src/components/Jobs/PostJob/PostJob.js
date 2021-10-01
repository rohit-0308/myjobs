import styled from "styled-components";
import Header from "../../LandingPage/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PostJob = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: "",
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
      } catch (error) {}
    },
    validate: (values) => {
      let error = {};

      if (!values.title) error.title = "The field is mandatory";

      if (!values.description) {
        error.description = "Description is required";
      }

      if (!values.location) error.location = "Location is required";

      return error;
    },
  });
  return (
    <>
      <Header />
      <Section>
        <HomeIcon>
          <Icon src="/assets/images/home.png" />
          <Span>
            <Link to="/home">
              <Span>Home</Span>
            </Link>{" "}
            > Post a Job
          </Span>
        </HomeIcon>
      </Section>
      <JobForm onSubmit={formik.handleSubmit}>
        <h1 style={{ color: "#303F60" }}>Post a Job</h1>
        <Label htmlFor="title">
          Job title*
          <Input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            required
            placeholder="Enter job title"
          />
        </Label>
        {formik.errors.title ? <Error>{formik.errors.title}</Error> : null}
        <Label htmlFor="description">
          Description*
          <TextArea
            rows="6"
            type="textarea"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            required
            placeholder="Enter job description"
          />
        </Label>
        {formik.errors.description ? (
          <Error>{formik.errors.description}</Error>
        ) : null}
        <Label htmlFor="location">
          Location*
          <Input
            type="text"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            required
            placeholder="Enter job location"
          />
        </Label>
        {formik.errors.location ? (
          <Error>{formik.errors.location}</Error>
        ) : null}
        <Wrapper>
          <LoginButton type="submit">Post</LoginButton>
        </Wrapper>
      </JobForm>
      <LightSection></LightSection>
    </>
  );
};

export default PostJob;

const Section = styled.div`
  height: 250px;
  background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
    0% no-repeat padding-box;
  width: auto;
`;

const LightSection = styled.section`
  height: 400px;
  background: #edf6ff;
  width: auto;
`;

const HomeIcon = styled.div`
  padding-top: 40px;
  padding-bottom: 0;
  padding-left: 12%;
`;

const Icon = styled.img`
  height: 14px;
  width: 14px;
`;

const Span = styled.span`
  color: white;
  padding: 0 8px;
  opacity: 0.8;
`;

const JobForm = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 525px;
  width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 0 20px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #43afff;
  }
`;

const TextArea = styled.textarea`
  margin-top: 10px;
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

const Error = styled.div`
  width: auto;
  color: red;
  font-size: 12px;
  margin-top: -4px;
  /* margin-bottom: 10px; */
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`;
