import styled from 'styled-components'

const Input = styled.input`
    max-width: 900px;
    width: 63%;
    height: 8vh;

    border: none;
    border-radius: 5px;

    background-color: rgba(255, 255, 255, 0.2);

    &::placeholder {
        color: #fff;
        opacity: 0.5;
    }

    &:focus {
        outline: 0;
    }

    &.search {
        padding-left: 60px;
    }

    &.login {
        max-width: 350px;
        width: 90%;
        height: 8vh;

        padding-left: 20px;
    }
`

export default Input