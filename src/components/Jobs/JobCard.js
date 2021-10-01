import styled from "styled-components";

const JobCard = (props) => {
  return (
    <>
      <Card>
        <h2 style={{ margin: "0" }}>Job Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut
          possimus saepe ipsa ratione...
        </p>
        <Wrapper>
          <p>Bangalore</p>
          <Button>View Applications</Button>
        </Wrapper>
      </Card>
    </>
  );
};

export default JobCard;

const Card = styled.div`
  width: 260px;
  height: 172px;
  background-color: white;
  box-shadow: 0px 3px 6px #557da526;
  border-radius: 5px;
  padding: 12px;
  margin-right: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
`;

const Button = styled.button`
  width: 125px;
  height: 32px;
  background-color: #43afff33;
  border: none;
  border-radius: 5px;
`;
