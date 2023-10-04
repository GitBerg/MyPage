import styled from "styled-components";

export const Container = styled.section`
background: #F6F6F6;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
scroll-snap-align: start;
position: relative;
font-family: Roboto;
overflow: hidden;

.container{
    form{
        position: relative; 
        transform: translateY(50%);
    }
}

h2{
    text-align: center;
    color: rgb(21, 154, 156);
    font-size: 3rem;
    margin-top: 0;
    transform: translateY(200%);
}

label{
    padding-left: 20px;
    position: relative;
    bottom: 35px;
    pointer-events: none;
    transition: all 0.3s ease;
}

input, textarea{
    resize: none;
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
    background-color: #F5F5F5;
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

textarea:focus + label{
    transform: translateY(-27px);
    padding-left: 10px;
    font-size: 0.8rem;
    color: #159A9C;
}

textarea:focus::placeholder{
    color: gray;
    transition: all 0.5s ease;
}

textarea::placeholder{
    color: transparent;
    transition: all 0.2s ease;
}

.has-value{
    padding-top: 18px;
    padding-bottom: 2px;
    border-bottom: 2px solid rgb(21, 154, 156);
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

export const Footer = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
height: 60px;
background-color: #159A9C;
border-top: 2px solid rgba(255,255,255,0.2);
display: flex;
justify-content: center;
align-items: center;
p{
    color: white;
}
`