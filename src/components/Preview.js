import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

function Preview() {
  const saved = useSelector((state) => state.saved);

  return (
    <PreviewContainer>
      <Title>Персональные данные</Title>

      {saved && (
        <Data>
          {saved.name}, {saved.age} лет
        </Data>
      )}

      <Title>Дети</Title>

      {saved?.children.map((child, i) => (
        <Fragment key={i}>
          <Child>
            <DataChild>
              {saved.children[i].name}, {saved.children[i].age} лет
            </DataChild>
          </Child>
        </Fragment>
      ))}
    </PreviewContainer>
  );
}

export default Preview;

const PreviewContainer = styled.div``;

const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #111111;
  margin: 0 0 20px 0;
`;

const Data = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 60px 0;
`;

const Child = styled.div`
  width: fit-content;
  height: 44px;
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 20px 0 20px;
`;

const DataChild = styled(Data)`
  margin: 0 0 0 0;
`;
