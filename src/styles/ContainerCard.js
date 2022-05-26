import styled from 'styled-components'

const ContainerCard = styled.div`
    max-width: 900px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
    position: relative;
    transition: transform 0.5s;

    &:hover {
        transform: translate(0px, -15px);
    }
`

export default ContainerCard