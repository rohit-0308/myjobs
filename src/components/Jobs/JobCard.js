import styled from "styled-components";
import React, { useState } from "react";
import ViewApplicationModal from "../ViewApplicationModal/ViewApplicationModal";

const JobCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card>
        <h2 style={{ margin: "0" }}>Job Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut
          possimus saepe ipsa ratione...
        </p>
        <Wrapper>
          <LocationWrapper>
            <Icon src="/assets/images/pin.png" />
            <p>Bangalore</p>
          </LocationWrapper>
          <Button onClick={() => setIsModalOpen(true)}>
            View Applications
          </Button>
          <ViewApplicationModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
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
  cursor: pointer;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 5px;
`;
