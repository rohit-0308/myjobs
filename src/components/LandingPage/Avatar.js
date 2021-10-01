import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Avatar = () => {
  //   const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <Container>
      <Link
        to="/postJob"
        style={{
          "text-decoration": "none",
        }}
      >
        <Text>Post a Job</Text>
      </Link>
      <User>A</User>
      <FaCaretDown className="icon" />
    </Container>
  );
};

export default Avatar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    height: 30px;
    width: 15px;
    margin-left: 10px;
    color: white;
  }
`;

const Text = styled.p`
  color: white;
  opacity: 0.8;
  margin-right: 50px;
`;

const User = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #d9efff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #303f60;
  opacity: 0.8;
`;
