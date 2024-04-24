import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { PiDotFill } from "react-icons/pi";

import { RiJavascriptFill } from "react-icons/ri";
import { SiExpo, SiStyledcomponents, SiPrisma, SiBulma } from "react-icons/si";

import { BsFillBootstrapFill } from "react-icons/bs";

import { BiLogoFirebase, BiLogoTypescript, BiLogoReact, BiLogoRedux, BiLogoHtml5, BiLogoCss3, BiLogoNodejs, BiLogoMongodb, BiLogoGit } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

import { useEffect, useState } from "react";
import { database } from "@/database/db";
import { motion } from "framer-motion";

const fillRight = keyframes`
from{
    width: 1px;
}
to{
    transform: scaleX(100%);
}
`
const fadeIn = keyframes`
from{
    transform: translateX(-80px);
    opacity: 0;
}
to{
    transform: translateX(0px);
    opacity: 1;
}
`

const fadeOut = keyframes`
from{
    transform: translateX(0px);
    opacity: 1;
}
to{
    transform: translateX(100px);
    opacity: 0;
}
`

export const Container = styled.section`
background: #F6F6F6;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
scroll-snap-align: start;
flex-direction: column;
font-family: Roboto;
position: relative;
z-index: 1;
overflow: hidden;
box-sizing: border-box;
padding-top: 50px;


    h2{
        font-size: 3rem;
        color:rgb(21, 154, 156);
        margin-bottom: 40px;
    }

    .content{
        width: 70%;
        height:80%;
        background-color: rgb(0 0 0/5%);
        border-radius: 14px;
        display: flex;
        border: 1px solid rgb(255 255 255 / 15%);
        position: relative;
        overflow: hidden;

        .info-list{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style: none;
            gap: 3px;
            position: relative;
            overflow: hidden;
            .icon-names{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    display: flex;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    margin-top: 10px;
                    .icon-name{
                        position: absolute;
                        text-align: center;
                        font-weight: 600;
                        font-size: 1.4rem;
                        color: rgb(21, 154, 156); 
                        opacity: 0;
                        &.active{
                            animation: ${fadeIn} 0.6s ease forwards;
                        }

                    }
                }
            .tools-title{
                font-size: 1.5rem;
                color: rgb(21, 154, 156);
                font-weight: 600;
            }

            
        }
    }


    @media (max-width: 1440px) {
        height: 100vh;
        h2{
            font-size: 3rem;
        }
        .content{
            width: 80%;
            height:75%;
            /* margin-top: 80px; */
        }
    }

    @media (max-width: 1024px) {
        h2{
            font-size: 3rem;
        }
        .content{
            width: 95%;
            height:75%;
            .info-list{
                .icon-names{
                    .icon-name{
                        font-size: 1rem;
                        bottom: 3px;
                    }
                }
            }
        }
    }

    @media (max-width: 500px){
        padding-top: 10px;
        h2{
            font-size: 2.5rem;
        }
        .content{
            height: 80%;
            margin-top: 20px;
            flex-direction: column;
            border: 0;
            .info-list{
                height: 30%;
                width: 100%;
                background-color: #F6F6F6;         
                ul{
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    height: 50px;
                    box-sizing: border-box;
                    padding: 5px 5px;
                    li{
                        background-color: #F6F6F6;
                        height: 100%;
                        width: 40px;
                        padding: 0;
                        border: 0;
                        position: relative;
                        p{
                            display: none;
                        }
                        .mobile-dot{
                            display: block;
                            position: absolute;
                            width: 30px;
                            height: 30px;
                            color: #000000;
                        }
                        &.active{
                            &::before{
                                content: '';
                                animation: none;
                                width: 0;
                                height: 0;
                            }
                            .mobile-dot{
                                color: rgb(21, 154, 156);
                            }
                        }
                    }

                }
                .icon-names{
                    position: relative;
                    width: 100%;
                    display: flex;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                }
            }
        }
    }
`




const Card = styled.div`
    width: 75%;
    height: 100%;
    background-color: #f4f4f47a;
    border-radius: 14px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    .imgs{
        display: relative;
        width: 100%;
        height: 70%;
        #img{
        width: 100%;
        height: 70%;
        object-fit: fill;
        object-position: left center;
        position: absolute;
        opacity: 0;
        transition: all 0.6s ease;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        &.active{
            opacity: 1;
        }
    }
    }
    #description{
        height: 24%;
        padding: 0 20px;
        color: rgb(21, 154, 156);
        width: 95%;
        overflow: hidden;
        display: block;
        h3{
            margin-top: 5px;
            margin-bottom: 10px;
            text-align: center;
            font-size: 1.5rem;
        }
        p{
            font-size: clamp(1rem, 1.5vw, 1.3rem); 
            letter-spacing: 1px;
            color: #002323;
            padding: 0px 30px;
            margin: 0;
        }
    }
    #btns{
        width: 100%;
        height: 6%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            width: 100%;
            height: 100%;
            color: #f4f4f4;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            >a{
                text-decoration: none;
                color: inherit;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                &>*{
                    margin-left: 5px;
                }
            }
            
        }
        #repository{
                background-color: rgb(0 0 0/ 80%);
                :hover{
                    background-color: rgb(0 0 0/ 70%);
                }
        }
        #access{
                background-color: rgb(21 154 156/ 90%);
                :hover{
                    background-color: rgb(21 154 156/ 70%);
                }
        }
    }
    #control{
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 35%;
        transform: translateY(-50%);
        z-index: 2;
        .icon{
            fill: rgb(21 154 156 / 50%);
            font-size: 60px;
            cursor: pointer;
            &:hover{
                fill: rgb(21 154 156 / 100%);
            }
        }
    }


    @media (max-width: 500px){
        width: 100%;
        height: 70%;
        .imgs{
            height: 65%;
            #img{
                height: 65%;
            }
        }
        #description{
            width: 100%;
            height: 25%;
            padding: 0 10px;
            box-sizing: border-box;
            h3{
                margin: 3px 0;
            }
            p{
                position: relative;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                 overflow: hidden;
                -webkit-box-orient: vertical; 
                text-align: justify;
                font-size: 0.8rem;
                padding: 0;
            }
        }
        #btns{
        height: 10%;
    }
}
`

const ProjectList = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    h2{
        text-align: center;
        margin-bottom: 25px;
    }

    li{
        .mobile-dot{
            display: none;
        }
        width: 100%;
        display: flex;
        height: calc(100% / 4);
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 600;
        color: #f4f4f4;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        border-top: 1px solid rgba(255,255,255,0.2);
        background-color: rgb(0 0 0 / 20%);
        position: relative;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover{
            width: 97%;
            background-color: rgb(0 0 0 / 30%);
            transform: matrix3d(1,0,0.00,0,0.00,1,0.00,-0.0005,0,0,1,0,0,0,0,1);
            -webkit-transform: matrix3d(1,0,0.00,0,0.00,1,0.00,-0.0005,0,0,1,0,0,0,0,1);
        }
        &:nth-child(2){
            border-top: 2px solid rgba(255,255,255,0.2);
        }
        &:last-child{
            border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        &.active{
            pointer-events: none;
            background-color: rgb(0 0 0 / 30%);
            &::before{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 10%;
                background-color: rgb(21, 154, 156);
                animation: ${fillRight} 10s linear;
                z-index: 1;
            }
        }
    }
    
`

const TecsList = styled.div`
    width: 90%;
    height: 19%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    background-color: rgb(255 255 255/ 25%);
    border-radius: 14px;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        .icon{
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover{
                transform: scale(1.5);
                filter: brightness(1.07);
            }
        }
    }

    @media (max-width: 500px){
        width: 100%;
        display: flex;
        margin-top: 20px;
        justify-content: space-evenly;
        background-color: #F6F6F6;
    }

`

export const MyProjects = ({ showPage }: { showPage: boolean }) => {

    const [currentProject, setCurrentProject] = useState(database.yelpcamp);
    const [projectIndex, setProjectIndex] = useState(1);
    const [imageIndex, setimageIndex] = useState(1);
    const [currentImage, setCurrentImage] = useState(database.yelpcamp.imgs[0]);
    const [hoverIcon, setHoverIcon] = useState("");

    const tecs = {
        "ReactJS": <BiLogoReact fill="#5CCFEE" className="icon" onMouseOver={() => setHoverIcon("ReactJS")} onMouseLeave={() => setHoverIcon("")}/>,
        "React-Native": <BiLogoReact fill="#5CCFEE" className="icon" onMouseOver={() => setHoverIcon("React-Native")} onMouseLeave={() => setHoverIcon("")}/>,
        "Javascript": <RiJavascriptFill fill="#EBD13B" className="icon" onMouseOver={() => setHoverIcon("Javascript")} onMouseLeave={() => setHoverIcon("")}/>,
        "Typescript": <BiLogoTypescript fill="#2F72BC" className="icon" onMouseOver={() => setHoverIcon("Typescript")} onMouseLeave={() => setHoverIcon("")}/>,
        "Redux": <BiLogoRedux fill="#7046B2" className="icon" onMouseOver={() => setHoverIcon("Redux")} onMouseLeave={() => setHoverIcon("")}/>,
        "HTML": <BiLogoHtml5 className="icon"/>,
        "CSS": <BiLogoCss3 className="icon"/>,
        "Styled-components": <SiStyledcomponents fill="#DE7496" className="icon" onMouseOver={() => setHoverIcon("Styled-components")} onMouseLeave={() => setHoverIcon("")}/>,
        "Bootstrap": <BsFillBootstrapFill fill="#5B4380" className="icon" onMouseOver={() => setHoverIcon("Bootstrap")} onMouseLeave={() => setHoverIcon("")}/>,
        "Bulma": <SiBulma fill="#08D2B4" className="icon" onMouseOver={() => setHoverIcon("Bulma")} onMouseLeave={() => setHoverIcon("")}/>,
        "NodeJS": <BiLogoNodejs fill="#4F9640" className="icon" onMouseOver={() => setHoverIcon("NodeJS")} onMouseLeave={() => setHoverIcon("")}/>,
        "MongoDB": <BiLogoMongodb fill="#0FA14C" className="icon" onMouseOver={() => setHoverIcon("MongoDB")} onMouseLeave={() => setHoverIcon("")}/>,
        "FireBase": <BiLogoFirebase fill="#FBA417" className="icon" onMouseOver={() => setHoverIcon("FireBase")} onMouseLeave={() => setHoverIcon("")}/>,
        "Prisma": <SiPrisma fill="#143A51" className="icon" onMouseOver={() => setHoverIcon("Prisma")} onMouseLeave={() => setHoverIcon("")}/>,
        "Git": <BiLogoGit className="icon"/>,
        "Expo": <SiExpo fill="#1877B8" className="icon" onMouseOver={() => setHoverIcon("Expo")} onMouseLeave={() => setHoverIcon("")}/>

    }

    const handleNextImage = () => {
        setCurrentImage(currentProject.imgs[(currentProject.imgs.indexOf(currentImage) + 1) % currentProject.imgs.length]);
    }

    const handlePreviousImage = () => {
        setCurrentImage(currentProject.imgs[(currentProject.imgs.indexOf(currentImage) - 1 + currentProject.imgs.length) % currentProject.imgs.length]);
    }

    const handleSetCurrentProject = (project: any, newIndex: number) => {
        setCurrentProject(project);
        setProjectIndex(newIndex + 1);
        setCurrentImage(project.imgs[0]);
    }


    useEffect(() => {
        if (showPage) {
            const interval = setInterval(() => {
                Object.values(database).forEach((project, index) => {
                    if (projectIndex === index) {
                        setCurrentProject(project);
                        setCurrentImage(project.imgs[0])
                        setProjectIndex(projectIndex => projectIndex + 1)
                    }
                })
                if (projectIndex > Object.values(database).length - 1) {
                    setProjectIndex(1)
                    setCurrentImage(database.yelpcamp.imgs[0])
                    setimageIndex(1)
                    setCurrentProject(database.yelpcamp);
                }
            }, 10000)
            return () => clearInterval(interval)
        }
    }, [currentProject, projectIndex, showPage])


    useEffect(() => {
        if (showPage) {
            const interval = setInterval(() => {
                currentProject.imgs.forEach((img, index) => {
                    if (imageIndex === index) {
                        setCurrentImage(img)
                        setimageIndex(index)
                        setimageIndex(imageIndex => imageIndex + 1)
                    }
                })
                if (imageIndex === currentProject.imgs.length - 1) {
                    setimageIndex(0)
                }
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [currentProject, imageIndex, showPage])


    return (
        <Container id="projects">
            <h2>My Projects</h2>
            {showPage &&
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.6 }}
                    className="content"
                >   
                    <Card>
                        <div id="control">
                            <MdNavigateBefore className="icon" onClick={handlePreviousImage} />
                            <MdNavigateNext className="icon" onClick={handleNextImage} />
                        </div>
                        <div className="imgs">
                        {
                            currentProject.imgs.map((img, index) => {
                                return (
                                    <Image key={index} id={`img`} loading="lazy" className={currentImage === img ? "active" : ""} width={900} height={450} src={img} alt="project photo" />
                                )
                            })
                        }
                        </div>
                        <div id="description">
                            <h3>{currentProject.name}</h3>
                            <p>{currentProject.description}</p>
                        </div>
                        <div id="btns">
                            <span id="repository"><a href={currentProject.repository} target="_blank">Repository<AiFillGithub/></a></span>
                            <span id="access" style={!currentProject.url ? { opacity: "0.5", pointerEvents: "none" } : {}}><a href={currentProject.url} target="_blank">Access Page</a></span>
                        </div>
                    </Card>
                    <div className="info-list">
                        <ProjectList>
                            {
                                Object.values(database).map((project, index) => [
                                    <li key={project.name} className={currentProject.name === project.name ? "active" : ""} onClick={() => handleSetCurrentProject(project, index)}><p>{project.name}</p><PiDotFill className="mobile-dot"/></li>
                                ])

                            }
                        </ProjectList>
                        <span className={"tools-title"}>Tools used</span>
                        <TecsList>
                            {currentProject.tecs.map((tec) => (
                                <span key={tec}>{tecs[tec as keyof typeof tecs]}</span>
                            ))}
                        </TecsList>
                        <div className="icon-names">
                        {
                            currentProject.tecs.map( tec => (
                                <span key={tec} className={`icon-name${hoverIcon===tec?" active":""}`}>{tec}</span>
                            ))
                        }
                        </div>
                    </div>
                </motion.div>
            }
        </Container>
    )
}