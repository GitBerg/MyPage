import styled,{ keyframes } from "styled-components";

const home = keyframes`
    to{
        transform: translateY(-100px);
    }
`
const info = keyframes`
    to{
        transform: translate(80px, -50px);
    }
`
const project = keyframes`
    to{
        transform: translate(80px, 50px);
    }
`
const contact = keyframes`
    to{
        transform: translateY(100px);
    }
`

const closeHome = keyframes`
    0%{
        transform: translateY(-100px);
    }
    70%{
        transform: translateY(-120px) scale(1.3);
    }
    100%{
        opacity: 0.3;
        transform: scale(0);
        transform: translateY(0px);
    }
`
const closeInfo = keyframes`
    0%{
        transform: translate(80px, -50px);
    }
    70%{
        transform: translate(100px, -70px) scale(1.3);
    }
    100%{
        opacity: 0.3;
        transform: scale(0);
        transform: translate(0px, 0px);
    }
`
const closeProject = keyframes`
    0%{
        transform: translate(80px, 50px);
    }
    70%{
        transform: translate(100px, 70px) scale(1.3);
    }
    100%{
        opacity: 0.3;
        transform: scale(0);
        transform: translateY(0px);
    }
`
const closeContact = keyframes`
    0%{
        transform: translateY(100px);
    }
    70%{
        transform: translateY(120px) scale(1.3);
    }
    100%{
        opacity: 0.3;
        transform: scale(0);
        transform: translateY(0px);
    }
`


export const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    left: 0px;
    top: 35%;
    z-index: 100;
    
    .menu{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon{
            transition: all 0.3s;
        }
        li{
        position: absolute;
        list-style: none;
        a{
            color:#002323;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: #fff;
            border-radius: 50%;
            font-size: 25px;
            background: linear-gradient(145deg, #ffffff, #dcdcdc);
            box-shadow:  4px 4px 3px #b9b9b9,
             -4px -4px 3px #ffffff;
             :active{
                color: #c1a391;;
                box-shadow: inset 4px 4px 12px #c5c5c5,
                inset -4px -4px 12px #ffffff;
                transition: color 0.1s linear;
             }
        }
        }   
        .home{
            animation: ${closeHome} 0.5s ease-in-out forwards;
        }
        .about{
            animation: ${closeInfo} 0.5s ease-in-out forwards;
        }
        .projects{
            animation: ${closeProject} 0.5s ease-in-out forwards;
        }
        .contact{
            animation: ${closeContact} 0.5s ease-in-out forwards;
        }

        .toggle{
        color:#002323;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e8e8e8;
        border-radius: 50%;
        border: 1px solid #e8e8e8;
        box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
        transition: all .1s;
        font-size: 30px;
        cursor: pointer;
        z-index: 1000;
        :active{
        color: #c1a391;
        box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
        
    }
    .icon{
        opacity: 1;
        transition: all 0.3s;
        position: absolute;
    }

    .icon.close{
        opacity: 0;
        transform: rotate(90deg);
        transition: all 0.3s;
    }
    }
        
    }

    .menu.active{
        .icon{
            transform: rotate(90deg);
            transition: all 0.3s;
            opacity: 0;
        }
        .icon.close{
            opacity: 1;
            transform: rotate(180deg);
            transition: all 0.3s;
            position: absolute;
        }
            
        .home{
            animation: ${home} 0.2s ease-in-out forwards;
        }
        .about{
            animation: ${info} 0.2s ease-in-out forwards;
            animation-delay: 0.1s;
        }
        .projects{
            animation: ${project} 0.2s ease-in-out forwards;
            animation-delay: 0.3s;
        }
        .contact{
            animation: ${contact} 0.2s ease-in-out forwards;
            animation-delay: 0.5s;
        }    
    }

    @media (max-width: 1440px) {
        display: none;
}
`