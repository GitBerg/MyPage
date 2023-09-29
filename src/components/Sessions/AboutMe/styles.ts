import styled, { keyframes } from "styled-components";

const jsFill = keyframes`
    to{
        fill: #EBD13B;
    }
`
const tsFill = keyframes`
    to{
        fill: #2F72BC;
    }
`
const htmlFill = keyframes`
    to{
        fill: #D84924;
    }
`
const cssFill = keyframes`
    to{
        fill: #2449D8;
    }
`
const reactFill = keyframes`
    to{
        fill: #5CCFEE;
    }
`
const reduxFill = keyframes`
    to{
        fill: #7046B2;
    }
`
const nodeFill = keyframes`
    to{
        fill: #4F9640;
    }
`
const mongoFill = keyframes`
    to{
        fill: #0FA14C;
    }
`
const gitFill = keyframes`
    to{
        fill: #E44C30;
    }
`

export const Container = styled.section`
background: #F4F4F4;
width: 100%;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: start;
box-sizing: border-box;
position: relative;
overflow: hidden;

span{
    width: 80%;
    height: 2px;
    background-color: #002323;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
}

.grid{
    display: grid;
    width: 50%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    .card{
        padding: 0 20px;
        width: clamp(200px, 95%, 450px);
        height: clamp(200px, 40%, 250px);
        h2{
            color: #159A9C;
            font-size: clamp(1.5rem, 2vw, 2.5rem); 
            text-align: center;
        }
        p{
            font-size: clamp(1rem, 1.5vw, 1.3rem); 
        }
        border-top: 2px solid #159A9C;
        border-left: 2px solid #159A9C;
        border-radius: 20px;
        color: #002323;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        .img{
        width: clamp(250px, 75%, 450px);
        height: clamp(250px, 75%, 450px);
        border-radius: 50%;
        border: 3px solid #159A9C ;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    }
    }

    .bottom{
        align-self: flex-start;
    }

    .skills{
        width: clamp(200px, 60%, 400px);
        height: clamp(140px, 60%, 150px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        h2{
            margin-top: 0;
            margin-bottom: 10px;
        }
        .icons{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap:5px 15px;
            .icon{
                font-size: 40px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
            }
            .icon:hover{
                transform: scale(1.8);
                filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));
            }
            .js{
                fill: #002323;
                animation: ${jsFill} 0.3s linear;
                animation-delay: 2s;
                animation-fill-mode:forwards
            }
            .ts{
                fill: #002323;
                animation: ${tsFill} 0.3s linear;
                animation-delay: 2.2s;
                animation-fill-mode:forwards
            }
            .html{
                fill: #002323;
                animation: ${htmlFill} 0.3s linear;
                animation-delay: 2.4s;
                animation-fill-mode:forwards
            }
            .css{
                fill: #002323;
                animation: ${cssFill} 0.3s linear;
                animation-delay: 2.6s;
                animation-fill-mode:forwards
            }
            .react{
                fill: #002323;
                animation: ${reactFill} 0.3s linear;
                animation-delay: 2.8s;
                animation-fill-mode:forwards
            }
            .redux{
                fill: #002323;
                animation: ${reduxFill} 0.3s linear;
                animation-delay: 3s;
                animation-fill-mode:forwards
            }
            .node{
                fill: #002323;
                animation: ${nodeFill} 0.3s linear;
                animation-delay: 3.2s;
                animation-fill-mode:forwards
            }
            .mongo{
                fill: #002323;
                animation: ${mongoFill} 0.3s linear;
                animation-delay: 3.4s;
                animation-fill-mode:forwards
            }
            .git{
                fill: #002323;
                animation: ${gitFill} 0.3s linear;
                animation-delay: 3.6s;
                animation-fill-mode:forwards
            }
        }
    }
    
}



@media (max-width: 1440px) {
    height: 70vh;
    padding-top: 90px;
        .grid{
            width: 75%;
            height: 100%;
            gap: 10px 20px;
        }
}

@media (max-width: 1024px) {
        .grid{
            .skills{
                .icons{
                    gap: 5px
                }
            }
        }
}

@media (max-height: 900px) {
    height: 75vh;
}

@media (max-height: 700px) {
    height: 100vh;
}


`