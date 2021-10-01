import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Nav>
        <NavWrapper>
          <Link to="/" style={{ "text-decoration": "none" }}>
            <Logo>
              My<Span>Jobs</Span>
            </Logo>
          </Link>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 66px;
  z-index: 5;
`;

const NavWrapper = styled.div`
  display: flex;
  width: 95%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  justify-content: space-between;
  align-items: center;
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
  cursor: pointer;
`;
