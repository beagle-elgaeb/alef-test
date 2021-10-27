import "../App.css";
import styled from "styled-components/macro";
import LogoImg from "../images/logo.svg";

function App() {
  return (
    <div>
      <Header>
        <Logo src={LogoImg} />
        <Link>Форма</Link>
        <Link>Превью</Link>
      </Header>
      <Main>
        <Title>Персональные данные</Title>
        <FormItem>
          <Input />
          <Label>Имя</Label>
        </FormItem>
        <FormItem>
          <Input />
          <Label>Возраст</Label>
        </FormItem>
        <Title>Дети (макс. 5)</Title>
        <Children>
          <FormItem>
            <Input />
            <Label>Имя</Label>
          </FormItem>
          <FormItem>
            <Input />
            <Label>Возраст</Label>
          </FormItem>
          <ButtonDel>Удалить</ButtonDel>
        </Children>
      </Main>
      <Footer>
        <Copyright>all rights reserved</Copyright>
      </Footer>
    </div>
  );
}

export default App;

const Header = styled.header`
  height: 76px;
  display: flex;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.img`
  width: 93px;
  margin: 0 40% 0 92px;
`;

const Link = styled.a`
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #8d8d8d;
  margin: 0 24px 0 0;
`;

const Main = styled.main`
  width: 616px;
  margin: 30px auto 136px auto;
`;

const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #111111;
  margin: 0 0 20px 0;
`;

const FormItem = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  display: block;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  outline: none;
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 10px 0;
  padding: 26px 0 6px 16px;
`;

const Label = styled.label`
  display: block;
  position: absolute;
  left: 16px;
  top: 8px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #8d8d8d;
`;

const Children = styled.div`
  display: grid;
  grid-template-columns: 260px 260px 78px;
  grid-gap: 18px;
  padding: 0;
`;

const ButtonDel = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: end;
  color: #01a7fd;
`;

const Footer = styled.footer`
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
`;

const Copyright = styled.p`
  font-family: "Montserrat";
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #000000;
`;
