import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 70px;
    justify-content: center;
    align-items: center;
    z-index: 10;
    backdrop-filter: blur(35px);
    background: rgba(255,255,255,0.1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(255,255,255,0.2);

    ul{
        position: absolute;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: space-evenly;
        gap: 40px;
        left: 16vw;  
        li{
        display: inline-block;
        position: relative;
        padding: 2px 0px;
        white-space: nowrap;
        font-weight: 600;
        a{
            text-decoration: none;
            color: #002323;
        }
        span{
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            background-color: #002323;
            opacity: 0;
            transition: all 0.3s ease-in-out;
        }
        }
    }

    ul>li:hover span{
        opacity: 1;
    }

    .logo{
        background: #19222D;
        color: #fcfcfc;
        border-radius: 50%;
        padding: 15px;
        font-weight: 600;
        font-size: 22px;
        align-self: center;
    }
    .social{
        position: absolute;
        right: 16vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;
        z-index: 15;

        .icon{
           display: flex;
           font-size: 25px;
           cursor: pointer;
           justify-content: center;
           align-items: center;
           transition: color 0.3s linear;
           color: #002323;
        }

        .icon::before{
        content: '';
        position: absolute;
        margin: 0;
        width: 5px;
        height: 5px;
        background-color: transparent;
        border-radius: 50%;
        transition: transform 0.3s linear;
        z-index: -1;
    }
    }

    .icon:hover{
        color: white;
        ::before{
            transform: scale(5.2,5.2);
            display: initial;
            background-color: #159A9C; 
        }
        
    }

    @media (max-width: 1440px) {
        position: fixed;
    }
    
    
    @media (max-width: 1024px) {
        position: fixed;
        ul{
            gap: 20px;
            left: 8vw;
        }

        .social{
            right: 8vw;
        }
}
@media (max-width: 425px) {
        ul{
            display: none;
        }
        .social{
            display: none;
        }
}

`