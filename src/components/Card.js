import React from "react"
import ContainerCard from "../styles/ContainerCard"
import Date from "../styles/Date"
import Title from "../styles/Title"
import Content from "../styles/Content"

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