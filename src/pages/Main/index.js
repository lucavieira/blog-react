import React from "react";
import ContainerHeader from "../../assets/styles/ContainerHeader";
import Header from "../../assets/styles/Header";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import Body from "../../assets/styles/Body"

const Main = () => {
    const date = `${new Date().getDate()}/${(new Date().getMonth()) + 1}/${new Date().getFullYear()}`
    return (
        <>
            <Header>
                <ContainerHeader>
                    <h1>Lucas Blog</h1>
                    <Navbar></Navbar>
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

export default Main