import React from "react"
import ContainerCard from "../assets/styles/ContainerCard"
import Date from "../assets/styles/Date"
import Title from "../assets/styles/Title"
import Content from "../assets/styles/Content"
import Heart from "../assets/styles/Heart"

import heart_empty from "../assets/images/heart_empty.png"
import heart_full from "../assets/images/heart_full.png"

const Card = ({date, title, content}) => {

    const liked = (elemento) => {
        if(elemento.target.alt == "Coração vazio") {
            elemento.target.attributes[0].value = heart_full
            elemento.target.alt = "Coração cheio"
        } else {
            elemento.target.attributes[0].value = heart_empty
            elemento.target.alt = "Coração vazio"
        }
    }

    return (
        <ContainerCard>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Heart src={heart_empty} alt="Coração vazio" onClick={(elemento) => liked(elemento)}></Heart>
        </ContainerCard>
    )
}

export default Card