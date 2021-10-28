import styled from "styled-components/macro";

function Footer() {
  return (
    <FooterContainer>
      <Copyright>all rights reserved</Copyright>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.header`
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  margin: 60px 0 0 0;
`;

const Copyright = styled.p`
  font-family: "Montserrat";
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #000000;
`;
