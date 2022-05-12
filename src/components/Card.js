import React from "react"
import Container from "../styles/Container"
import Date from "../styles/Date"
import Title from "../styles/Title"
import Content from "../styles/Content"

const Card = ({date, title, content}) => {
    return (
        <>
            <Container>
                <Date>{date}</Date>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </Container>
        </>
    )
}

export default Card