import styled from "styled-components";

export const Container = styled.section`
background: #F4F4F4;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
scroll-snap-align: start;
position: relative;
font-family: Roboto;

.container{
    position: absolute;
    top: 100px;
}

h2{
    text-align: center;
    color: rgb(21, 154, 156);
    font-size: 2.5rem;
}

label{
    padding-left: 20px;
    position: relative;
    bottom: 35px;
    pointer-events: none;
    transition: all 0.3s ease;
}

label#text{
    position: relative;
    bottom: 10px;
}

input{
    width: 400px;
    height: 30px;
    padding: 0px 20px;
    font-size: 18px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 4px 4px 0 0;
    transition: padding-top 0.3s ease, padding-bottom 0.3s ease;
    :focus{
        padding-top: 18px;
        padding-bottom: 2px;
        border-bottom: 2px solid rgb(21, 154, 156);
    }
}

input:focus + label, .has-value + label {
    transform: translateY(-23px);
    padding-left: 10px;
    font-size: 0.8rem;
    color: #159A9C;
}

.has-value{
    padding-top: 18px;
    padding-bottom: 2px;
    border-bottom: 2px solid rgb(21, 154, 156);
}

textarea{
    resize: none;
    padding: 10px 20px;
    font-size: 18px;
    margin-bottom: 10px;
    outline-color: rgb(21, 154, 156);
}

form{
    display: flex;
    flex-direction: column;

    button{
        height: 40px;
        background-color: #49AF41;
        outline-style: none;
        border: 0;
        cursor: pointer;
        color: white;
        font-size: 1.2rem;
        border-radius: 4px;
        :hover{
            filter: brightness(110%);
        }
        :active{
            filter: brightness(90%);
        }
    }
}
`