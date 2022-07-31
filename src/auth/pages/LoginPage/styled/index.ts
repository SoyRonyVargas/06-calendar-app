import styled from 'styled-components'

export const LeftSide = styled.article`
    background: #9c5252;
`

export const BoxLogin = styled.section`
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
`

export const RightSide = styled.article`
    flex-direction: column;
`

export const FormBox = styled.form`
    width: 70%;
`

export const ContainerLoginPage = styled.section`
    display: grid;
    height: 100vh;
    grid-template-columns: 55% 45%;
    @media screen and (max-width: 768px){
        grid-template-columns: 100%;
        ${LeftSide}
        {
            display: none;
            background-color: red !important;
        }
        ${FormBox}
        {
            width: 90%;
        }
    }
`