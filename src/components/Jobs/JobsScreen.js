import styled from "styled-components";
import Header from "../LandingPage/Header";
import JobCard from "./JobCard";
import NoJobs from "./NoJobs";

const JobsScreen = () => {
  let a = [1, 2];

  return (
    <>
      <Header />
      <Section>
        <HomeIcon>
          <Icon src="/assets/images/home.png" />
          <Span>Home</Span>
        </HomeIcon>
        <Title>Jobs posted by you</Title>
      </Section>
      {a.length > 0 && (
        <JobsCardWrapper>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </JobsCardWrapper>
      )}

      <LightSection>{a.length === 0 && <NoJobs />}</LightSection>
    </>
  );
};

export default JobsScreen;

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
`;

const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  padding-top: 35px;
  padding-left: 12%;
  color: white;
`;

const JobsCardWrapper = styled.div`
  width: auto;
  position: absolute;
  left: 12%;
  top: 30%;
  display: flex;
  justify-content: space-between;
  padding-right: 12px;
`;
