import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react-router/node_modules/@types/react";
import styled from "@emotion/styled";
import { deleteChild, inputChild } from "../redux/personSlice";
import { ReduxType } from "../redux/types";

function FormChildren({ index }: { index: number }) {
  const dispatch = useDispatch();
  const child = useSelector((state: ReduxType) => state.person.children[index]);

  const handleChildChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      inputChild({
        index: index,
        field: evt.currentTarget.name as "name" | "age",
        value: evt.currentTarget.value,
      })
    );
  };

  return (
    <>
      <FormItemChild>
        <Input
          aria-label="Имя"
          type="text"
          name="name"
          value={child.name}
          onChange={handleChildChange}
          autoComplete="off"
          maxLength={100}
          required
        />
        <Label>Имя</Label>
      </FormItemChild>
      <FormItemChild>
        <Input
          aria-label="Возраст"
          type="number"
          name="age"
          value={child.age}
          onChange={handleChildChange}
          autoComplete="off"
          maxLength={100}
          required
        />
        <Label>Возраст</Label>
      </FormItemChild>
      <ButtonDel type="button" onClick={() => dispatch(deleteChild(index))}>
        Удалить
      </ButtonDel>
    </>
  );
}

export default FormChildren;

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

const FormItemChild = styled.div`
  width: 100%;
  position: relative;
  margin: 0 0 10px 0;
`;

const ButtonDel = styled.button`
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: end;
  color: #01a7fd;
  cursor: pointer;
  padding: 0;

  :hover {
    text-shadow: 0 2px 5px #01a7fd;
  }
`;
