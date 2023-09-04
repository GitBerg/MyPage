"use client"

import { useState } from "react";
import { MyProjects } from "./styles";

import {  useMotionValueEvent, useScroll } from "framer-motion";


export default function ProjectsContainer() {

    const { scrollYProgress } = useScroll()
    const [showPage, setShowPage] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest >= 0.45) {
            setShowPage(true)
        }
    })

    return (
        <MyProjects showPage={showPage}/>
    )
}