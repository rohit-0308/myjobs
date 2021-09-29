import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Nav>
        <Logo>
          My<Span>Jobs</Span>
        </Logo>
        <SignUp>Login/SignUp</SignUp>
      </Nav>
    </>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #303f60;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 66px;
  z-index: 5;
`;

const Logo = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Span = styled.span`
  color: #43afff;
`;

const SignUp = styled.button`
  width: 148px;
  height: 46px;
  background-color: #4d618e;
  border: 1px solid #43afff;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  letter-spacing: 0.5px;
`;
