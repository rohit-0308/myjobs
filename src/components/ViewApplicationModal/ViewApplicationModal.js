import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import ApplicantsCard from "./ApplicantsCard";

const ViewApplicationModal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <ViewApplicationWrapper>
        <ModalHeader>
          <Text>Applicants for this job</Text>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalHeader>
        <ApplicantsNumber>Total 35 applications</ApplicantsNumber>
        <ApplicationsWrapper>
          <ApplicantsCard />
          <ApplicantsCard />
        </ApplicationsWrapper>
      </ViewApplicationWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default ViewApplicationModal;

const ViewApplicationWrapper = styled.div`
  height: 75%;
  width: 694px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 20px;
  padding: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Text = styled.h2`
  color: #303f60;
`;

const CloseButton = styled.button`
  height: 36px;
`;

const ApplicantsNumber = styled.p`
  font-weight: bold;
`;

const ApplicationsWrapper = styled.div`
  height: 70%;
  width: 95.5%;
  background-color: #557da526;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;
