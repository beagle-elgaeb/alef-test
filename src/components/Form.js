import produce from "immer";
import { Fragment, useState } from "react";
import styled from "styled-components/macro";
import PlusImg from "../images/plus.svg";

function Form() {
  const [children, setChildren] = useState([]);

  function addChild() {
    if (children.length < 5) {
      setChildren([...children, "child"]);
    }
  }

  function deleteChild(index) {
    setChildren((children) => {
      const newState = produce(children, (children) => {
        children.splice(index, 1);
      });

      return newState;
    });
  }

  return (
    <FormContainer>
      <Title>Персональные данные</Title>
      <FormItem>
        <Input />
        <Label>Имя</Label>
      </FormItem>
      <FormItem>
        <Input />
        <Label>Возраст</Label>
      </FormItem>
      <ChildrenTitle>
        <TitleChild>Дети (макс. 5)</TitleChild>
        {children.length < 5 ? (
          <ButtonAdd type="button" onClick={addChild}>
            <ButtonAddImg src={PlusImg} alt="Плюс" />
            Добавить ребенка
          </ButtonAdd>
        ) : (
          ""
        )}
      </ChildrenTitle>
      <Children>
        {children.map((child, i) => (
          <Fragment key={i}>
            <FormItemChild>
              <Input />
              <Label>Имя</Label>
            </FormItemChild>
            <FormItemChild>
              <Input />
              <Label>Возраст</Label>
            </FormItemChild>
            <ButtonDel
              type="button"
              onClick={(i) => {
                deleteChild(i);
              }}
            >
              Удалить
            </ButtonDel>
          </Fragment>
        ))}
      </Children>
      <ButtonSave>Сохранить</ButtonSave>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div``;

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
  margin: 0 0 10px 0;
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
  cursor: pointer;
  margin: 0;
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

const ChildrenTitle = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 33px 0 11px 0;
`;

const TitleChild = styled(Title)`
  margin: 0;
`;

const Button = styled.button`
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  padding: 0;
`;

const ButtonAdd = styled(Button)`
  width: 204px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #01a7fd;
  border-radius: 99em;
  color: #01a7fd;
`;

const ButtonAddImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 4px 0 0;
`;

const Children = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 260px 260px 60px;
  grid-row-gap: 10px;
  grid-column-gap: 18px;
  margin: 0 0 30px 0;
  padding: 0;
`;

const FormItemChild = styled(FormItem)`
  margin: 0 0 0 0;
`;

const ButtonDel = styled(Button)`
  text-align: end;
  color: #01a7fd;
`;

const ButtonSave = styled(Button)`
  width: 118px;
  height: 44px;
  background: #01a7fd;
  border-radius: 99em;
  color: #ffffff;
`;
