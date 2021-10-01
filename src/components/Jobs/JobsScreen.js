import styled from "styled-components";
import { useEffect, useState } from "react";

import Header from "../LandingPage/Header";
import JobCard from "./JobCard";
import NoJobs from "./NoJobs";
import axios from "axios";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const JobsScreen = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "https://jobs-api.squareboat.info/api/v1/jobs"
    );

    console.log(response.data.data);
    setJobs(response.data.data);
  }, []);

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
      <JobsCardWrapper>
        {jobs.slice(0, 8).map((job) => (
          <JobCard
            title={job.title}
            desc={job.description}
            location={job.location}
          />
        ))}
      </JobsCardWrapper>

      <Pagination>
        <Left>
          <AiFillCaretLeft />
        </Left>
        <Number>
          <Page>1</Page>
        </Number>
        <Right>
          <AiFillCaretRight />
        </Right>
      </Pagination>

      <LightSection></LightSection>
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
  padding-left: 6%;
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
  padding-left: 6%;
  color: white;
`;

const JobsCardWrapper = styled.div`
  width: auto;
  position: absolute;
  left: 6%;
  top: 30%;
  display: flex;
  justify-content: space-between;
  padding-right: 12px;
  flex-wrap: wrap;
`;

const Pagination = styled.div`
  position: absolute;
  left: 46.5%;
  top: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  color: rgba(0, 0, 0, 0.7);
`;
const Right = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  color: rgba(0, 0, 0, 0.7);
`;
const Number = styled.div`
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 5px;
  display: flex;
  background-color: #43afff33;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

const Page = styled.p``;
