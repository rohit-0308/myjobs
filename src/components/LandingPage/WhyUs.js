import styled from "styled-components";

const WhyUs = () => {
  return (
    <Section>
      <Text>Why Us</Text>
      <Cards>
        <Card>
          <h1 style={{ color: "#43AFFF" }}>
            Get More <br /> Visibilty
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            veritatis ab ipsum laudantium suscipit nobis quo distinctio! Ea, sit
            alias!
          </p>
        </Card>
        <Card>
          <h1 style={{ color: "#43AFFF" }}>
            Organize Your <br /> Candidates
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            veritatis ab ipsum laudantium suscipit nobis quo distinctio! Ea, sit
            alias!
          </p>
        </Card>
        <Card>
          <h1 style={{ color: "#43AFFF" }}>
            Verify Their <br /> Abilities
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            veritatis ab ipsum laudantium suscipit nobis quo distinctio! Ea, sit
            alias!
          </p>
        </Card>
      </Cards>
    </Section>
  );
};

export default WhyUs;

const Section = styled.section`
  height: 500px;
  background-color: #edf6ff;
`;

const Text = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  padding: 150px 0 0 200px;
`;

const Cards = styled.div`
  padding: 50px 0 0 200px;
  width: 1083px;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 300px;
  height: 192px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 3px 6px #557da526;
  border-radius: 5px;
`;
