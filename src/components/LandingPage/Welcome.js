import styled from "styled-components";

const Welcome = () => {
  return (
    <Container>
      <TextContainer>
        <WelcomeText>
          Welcome to <br />
          My<Span>Jobs</Span>
        </WelcomeText>
        <GetStarted>Get Started</GetStarted>
      </TextContainer>
      <ImageContainer>
        <img src="/assets/images/welcome.png" alt="Welcome" />
      </ImageContainer>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  height: 464px;
  background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
    0% no-repeat padding-box;
  width: auto;
  display: flex;
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
`;

const TextContainer = styled.div``;

const ImageContainer = styled.image`
  width: 420px;
  height: 395px;

  img {
    height: 100%;
  }
`;
