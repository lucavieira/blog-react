import React from "react"
import ContainerCard from "../assets/styles/ContainerCard"
import Date from "../assets/styles/Date"
import Title from "../assets/styles/Title"
import Content from "../assets/styles/Content"

const Card = ({date, title, content}) => {
    return (
        <ContainerCard>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </ContainerCard>
    )
}

export default Card