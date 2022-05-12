import React from "react";
import Card from "./components/Card";

const App = () => {
  const date = `${new Date().getDate()}/${(new Date().getMonth()) + 1}/${new Date().getFullYear()}`

  return (
    <>
      <h1>Blog Lucas</h1>
      <Card 
        title="Agora é oficial: o Windows 11 está vindo"
        date={date}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
      />
    </>
  );
}

export default App;
