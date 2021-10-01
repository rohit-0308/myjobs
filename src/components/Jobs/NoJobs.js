import styled from "styled-components";

const NoJobs = () => {
  return (
    <Wrapper>
      <Icon src="/assets/images/file.png" />
      <p>Your posted jobs will show here!</p>
      <Button>Post a Job</Button>
    </Wrapper>
  );
};

export default NoJobs;

const Wrapper = styled.div`
  height: 234px;
  width: 288px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  height: 106px;
  width: 106px;
  opacity: 0.5;
`;

const Button = styled.button`
  height: 46px;
  width: 148px;
  margin-top: 10px;
  background-color: #43afff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
`;
