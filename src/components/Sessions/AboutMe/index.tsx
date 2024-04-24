"use client"

import Image from "next/image";
import { Container } from "./styles";
import img from '../../../../public/foto_perfil.webp';

import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoReact, BiLogoRedux,BiLogoHtml5, BiLogoCss3, BiLogoNodejs, BiLogoMongodb, BiLogoGit } from "react-icons/bi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { SideNavigation } from "@/components/Navigation/Side";

export default function AboutMeContainer() {

    const { scrollYProgress } = useScroll()
    const [ showInfos, setShowInfos ] = useState(false)
    const [ showNav, setShowNav ] = useState(false)
    

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if(latest >= 0.15){
            setShowInfos(true)
            setShowNav(true)
        }else{
            setShowNav(false)
        }
      })

    return (
        <Container id="about">
            <span></span>
                <SideNavigation isVisible={showNav}/>
            {showInfos &&
                <div className="grid">
                <motion.div
                    initial={{ opacity: 0, x: -75 }}
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0, duration: 0.6 }}
                    className="card">
                    <h2>{'<h2>Hello World!</h2>'}</h2>
                    <p>{'<p>I am a web developer focused on frontend. I work to create responsive web pages and components to achieve the best possible look.</p>'}</p>
                </motion.div >
                <motion.div
                    initial={{ opacity: 0, x: 75 }}
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.25, duration: 0.6 }} className="image">
                    <Image className="img" loading="lazy" width={250} height={250} src={img} alt="My profile photo"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -75 }}
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5, duration: 0.6 }} className="card bottom">
                    <h2>{'<h2>About me</h2>'}</h2>
                    <p>{'<p>Well i have a degree in computer science at UFCG and a few years of experience working on PDI\'s for Virtus.</p>'}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 75 }}
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.75, duration: 0.6 }} className="card bottom skills">
                    <h2>{'Main Skills'}</h2>
                    <div className="icons">
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8}}
                    transition={{ delay: 2, duration: 0.3, repeatType: "reverse", repeat: 1 }}><RiJavascriptFill className="icon js" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 2.2, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoTypescript className="icon ts" /> </motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 2.4, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoHtml5 className="icon html" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 2.6, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoCss3 className="icon css" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 2.8, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoReact className="icon react" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 3.0, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoRedux className="icon redux" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 3.2, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoNodejs className="icon node" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 3.4, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoMongodb className="icon mongo" /></motion.div>
                    <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8 }}
                    transition={{ delay: 3.6, duration: 0.3, repeatType: "reverse", repeat: 1 }}><BiLogoGit className="icon git" /></motion.div>         
                    </div>
                </motion.div>
            </div>
            }
        </Container>
    )
}