import styled from 'styled-components'

const Input = styled.input`
    max-width: 900px;
    width: 63%;
    height: 8vh;

    border: none;
    border-radius: 5px;

    padding-left: 60px;

    background-color: rgba(255, 255, 255, 0.2);

    &::placeholder {
        color: #fff;
        opacity: 0.5;
    }

    &:focus {
        outline: 0;
    }
`

export default Input