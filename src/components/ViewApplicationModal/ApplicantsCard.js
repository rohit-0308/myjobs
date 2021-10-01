import styled from "styled-components";

const ApplicantsCard = () => {
  return (
    <>
      <Card>
        <InfoWrapper>
          <Avatar>A</Avatar>
          <ApplicantNameWrapper>
            Elisa Lucas
            <EmailSpan>abc123@gmail.com</EmailSpan>
          </ApplicantNameWrapper>
        </InfoWrapper>
        <SkillsWrapper>
          <Heading>Skills</Heading>
          <SkillsSpan>
            Coding, designing, graphics, website, app ui, Coding, designing,
            graphics, website, app ui
          </SkillsSpan>
        </SkillsWrapper>
      </Card>
    </>
  );
};

export default ApplicantsCard;

const Card = styled.div`
  height: 159px;
  width: 295px;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  background-color: #d9efff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const ApplicantNameWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  color: #303f60;
  font-size: 15px;
  font-weight: bold;
`;

const EmailSpan = styled.span`
  opacity: 0.8;
  font-weight: normal;
`;

const SkillsWrapper = styled.div`
  padding-top: 15px;
`;

const Heading = styled.p`
  margin-bottom: 2px;
  font-size: 13px;
  font-weight: bold;
`;

const SkillsSpan = styled.span`
  font-size: 15px;
  opacity: 0.8;
`;
