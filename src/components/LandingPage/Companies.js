import styled from "styled-components";

const Companies = () => {
  return (
    <Section>
      <Text>Companies Who Trust Us</Text>
      <Logos>
        <Up>
          <Img src="/assets/images/google.png" alt="google" />
          <Img src="/assets/images/google.png" alt="google" />
          <Img src="/assets/images/google.png" alt="google" />
          <Img src="/assets/images/google.png" alt="google" />
          <Img src="/assets/images/google.png" alt="google" />
        </Up>
        <Down>
          <Img src="/assets/images/google.png" alt="google" />
          <Img src="/assets/images/google.png" alt="google" />
          <Img src="/assets/images/google.png" alt="google" />
        </Down>
      </Logos>
    </Section>
  );
};

export default Companies;

const Section = styled.section`
  height: 350px;
  background-color: #edf6ff;
`;

const Text = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  padding: 70px 0 0 200px;
`;

const Logos = styled.div``;

const Up = styled.div`
  margin-left: 12%;
  margin-top: 50px;
  display; flex;
  justify-content: space-between;
`;

const Down = styled.div`
  margin-left: 12%;
  margin-top: 50px;
  display; flex;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 55px;
  width: 150px;
  margin: 20px;
`;
