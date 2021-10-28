import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { deleteChild, inputChild } from "../redux/personSlice";

function FormChildren({ index }) {
  const dispatch = useDispatch();
  const child = useSelector((state) => state.person.children[index]);

  const handleChildChange = (e) => {
    dispatch(
      inputChild({
        index: index,
        field: e.target.name,
        value: e.target.value,
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

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
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
  padding: 0;
`;
