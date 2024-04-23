"use client"

import TopBar from "@/components/Navigation/TopBar";
import { Container } from "./styles";
import Image from "next/image";
import img from '../../../images/banner_img.webp';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import TypicalAnimation from "@/components/TypicalAnimation";
import ScrollDownAlert from "@/components/ScrollDownAlert";
import { useState } from "react";


export default function WelcomeContainer() {

    const { scrollYProgress } = useScroll()
    const [showScroll, setShowScroll] = useState(true)
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if(latest <= 0.035){
            setShowScroll(true)
        }else{
            setShowScroll(false)
        }
      })

    return (
        <Container id="welcome">
            <TopBar />
            <div className="banner">
                <div className="title">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible">
                        <span>Welcome</span>
                    </motion.div>
                    <motion.div
                    style={{ translateY: "-20px" }}
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ delay: 0.5 }}
                        initial="hidden"
                        animate="visible">
                        <h1>to my Portfolio.</h1>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ delay: 1 }}
                        initial="hidden"
                        animate="visible">
                        <TypicalAnimation />
                    </motion.div>

                </div>
                <motion.div className="image"
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                >
                    <Image className="img" src={img} width={450} height={700} alt="painted young guy" />
                </motion.div>
            </div>
            <ScrollDownAlert showScroll={showScroll}/>
        </Container>
    )
}