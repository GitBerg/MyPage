import { motion } from "framer-motion";
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

interface ScrollDownAlertProps {
    showScroll: Boolean;
}

export default function ScrollDownAlert({showScroll}:ScrollDownAlertProps) {

    return (
        showScroll ?
        <motion.div 
            initial={{ opacity: 0, y:0}}
            animate={{ opacity: 1, y: -10}}
            transition={{delay: 5, duration: 0.6, repeat: Infinity, repeatType: 'reverse'}}
            className="scrollDown">Scroll Down<BsChevronDoubleDown/>
        </motion.div>: 
        null
    )
}