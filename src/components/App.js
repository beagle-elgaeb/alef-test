import { Route } from "react-router-dom";
import styled from "styled-components/macro";
import "../App.css";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Preview from "./Preview";

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Route exact path="/" component={Form} />
        <Route path="/preview" component={Preview} />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  width: 616px;
  margin: 30px auto auto auto;
`;
