import styled from "styled-components";

const Companies = () => {
  return (
    <Section>
      <Text>Companies Who Trust Us</Text>
      <Logos>
        <Up></Up>
        <Down></Down>
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

const Up = styled.div``;

const Down = styled.div``;
