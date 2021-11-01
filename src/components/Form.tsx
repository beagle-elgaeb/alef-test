import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ChangeEvent } from "react-router/node_modules/@types/react";
import PlusImg from "../images/plus.svg";
import { addChild, deleteChild, input } from "../redux/personSlice";
import { save } from "../redux/savedSlice";
import { ReduxType } from "../redux/types";
import FormChildren from "./FormCildren";
import { validateFormChild, validateFormPerson } from "./utils";

function Form() {
  const history = useHistory();
  const dispatch = useDispatch();
  const person = useSelector((state: ReduxType) => state.person);
  const children = useSelector((state: ReduxType) => state.person.children);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      input({
        field: evt.currentTarget.name as "name" | "age",
        value: evt.currentTarget.value,
      })
    );
  };

  const checkValidationPerson = validateFormPerson(person.name, person.age);
  const checkValidationChildren = children.every((child) =>
    validateFormChild(child.name, child.age)
  );

  const checkValidation = checkValidationPerson && checkValidationChildren;

  function saveData() {
    dispatch(save(person));
    history.push("/preview");
    dispatch(
      input({
        field: "name",
        value: "",
      })
    );
    dispatch(
      input({
        field: "age",
        value: "",
      })
    );
    children.forEach((_, i) => {
      dispatch(deleteChild(i));
    });
  }

  return (
    <FormContainer>
      <Title>Персональные данные</Title>
      <FormItem>
        <Input
          aria-label="Имя"
          type="text"
          name="name"
          value={person.name}
          onChange={handleChange}
          autoComplete="off"
          maxLength={100}
          required
        />
        <Label>Имя</Label>
      </FormItem>
      <FormItem>
        <Input
          aria-label="Возраст"
          type="number"
          name="age"
          value={person.age}
          onChange={handleChange}
          autoComplete="off"
          maxLength={3}
          required
        />
        <Label>Возраст</Label>
      </FormItem>
      <ChildrenTitle>
        <TitleChild>Дети (макс. 5)</TitleChild>
        {person.children.length < 5 ? (
          <ButtonAdd type="button" onClick={() => dispatch(addChild())}>
            <ButtonAddImg src={PlusImg} alt="Плюс" />
            Добавить ребенка
          </ButtonAdd>
        ) : (
          ""
        )}
      </ChildrenTitle>
      <Children>
        {person.children.map((_, i) => (
          <FormChildren key={i} index={i} />
        ))}
      </Children>
      <ButtonSave type="button" onClick={saveData} disabled={!checkValidation}>
        Сохранить
      </ButtonSave>
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
  background: transparent;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  outline: none;
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
  padding: 26px 0 6px 16px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  :focus {
    border-top: 1px solid #01a7fd50;
    border-bottom: 1px solid #01a7fd50;
  }
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

  :hover {
    box-shadow: 0 0 5px 1px inset #01a7fd60;
  }
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

const ButtonSave = styled(Button)<{ disabled: boolean }>`
  width: 118px;
  height: 44px;
  background: ${({ disabled }) => (disabled ? "#8d8d8d40" : "#01a7fd")};
  border-radius: 99em;
  color: #ffffff;

  :hover {
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "0 0 5px 2px #01a7fd80"};
  }
`;
