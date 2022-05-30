import styled from 'styled-components'

const Container = styled.div`
    max-width: 900px;

    &.containerLogin, &.containerRegister {
        max-width: 450px;
        width: 80%;
        height: 65vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        color: #fff;
        box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.35);
        background-image: linear-gradient(to right, #051258, #172FB5);
    }

    &.containerRegister {
        height: 75vh;
    }

    &.containerCard {
        width: 65%;
        background-color: #fff;
        padding: 20px;
        margin: 10px 0;
        border-radius: 5px;
        position: relative;
        transition: transform 0.5s;

        &:hover {
            transform: translate(0px, -15px);
        }
    }

    &.containerHeader {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    &.containerButtons {
        max-width: 450px;
        width: 80%;

        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }

    &.links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        a {
            color: #fff;
        }
    }
`

export default Container