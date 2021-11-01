import styled from "@emotion/styled";
import LogoImg from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <A href="https://alef.im/" target="_blank">
        <Logo src={LogoImg} alt="Логотип" />
      </A>
      <nav>
        <NavItem to="/">Форма</NavItem>
        <NavItem to="/preview">Превью</NavItem>
      </nav>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  height: 76px;
  display: flex;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #eeeeee;
`;

const A = styled.a`
  cursor: pointer;
  margin: 0 40% 0 92px;
`;

const Logo = styled.img`
  width: 93px;
`;

const NavItem = styled(Link)`
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: none;
  color: #8d8d8d;
  cursor: pointer;
  margin: 0 24px 0 0;

  :hover {
    font-weight: 600;
  }
`;
