import styled from "styled-components";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <TextContainer>
        <WelcomeText>
          Welcome to <br />
          My<Span>Jobs</Span>
        </WelcomeText>
        <Link to="/login">
          <GetStarted>Get Started</GetStarted>
        </Link>
      </TextContainer>
      <ImageContainer>
        <img src="/assets/images/women.jpg" alt="Welcome" />
      </ImageContainer>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  height: 464px;
  width: 50%;
  background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
    0% no-repeat padding-box;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WelcomeText = styled.p`
  color: white;
  font-size: 70px;
  padding-left: 200px;
  padding-top: 60px;
`;

const Span = styled.span`
  color: #43afff;
`;

const GetStarted = styled.button`
  margin-left: 200px;
  width: 148px;
  height: 46px;
  background-color: #43afff;
  color: white;
  border: 1px solid #43afff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const TextContainer = styled.div``;

const ImageContainer = styled.div`
  width: 622px;
  height: 395px;
  border-radius: 20px;
  margin-right: 150px;
  margin-top: 180px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
