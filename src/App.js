import React from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Body from "./assets/styles/Body"
import ContainerHeader from "./assets/styles/ContainerHeader";
import Header from "./assets/styles/Header";

const App = () => {
  const date = `${new Date().getDate()}/${(new Date().getMonth()) + 1}/${new Date().getFullYear()}`

  return (
    <>
      <Header>
        <ContainerHeader>
          <h1>Lucas</h1>
          <h2>Blog</h2>
        </ContainerHeader>
        <SearchBar></SearchBar>
      </Header>
      <Body>
        <Card 
          title="Agora é oficial: o Windows 11 está vindo"
          date={date}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
        />
      </Body>
    </>
  );
}

export default App;
