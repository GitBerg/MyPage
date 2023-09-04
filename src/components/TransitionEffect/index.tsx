"use client"

import { TriggerState, switchOff } from "@/redux/store";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const Container = styled.div`
    div{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        
    }
    .fisrt-block{
        left: 0;
        z-index: 230;
        background-color: #159A9C;
    }
    .second-block{
        right: 100%;
        z-index: 220;
        background-color: #F4F4F4;
    }
    .third-block{
        right: 100%;
        z-index: 210;
        background-color: #1B1B1B;
    }
`

export const TransitionEffect = () => {

    const trigger = useSelector((state:TriggerState) => state.trigger);
    const dispatch = useDispatch();
    
    useEffect(() =>{
        const timeOut = setTimeout(() => {
            dispatch(switchOff())
        }, 1700)
        return () => clearTimeout(timeOut)
    }, [trigger, dispatch])

    return (
        <Container>
            <motion.div
                className="fisrt-block"
                initial={{ x: "0%", width: "0%" }}
                animate={{ x: "0%", width: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut", repeat: 1, repeatType: "reverse" }}
            />
            <motion.div
                className="second-block"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="third-block"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
            />
            
            
            
        </Container>
    )
}