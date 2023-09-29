import { Container } from "./styles";
import { BiMenu } from "react-icons/bi";
import { AiOutlineHome, AiFillFolderOpen, AiOutlineContacts, AiOutlineClose } from "react-icons/ai";
import { TiInfoLargeOutline } from "react-icons/ti";
import {  useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";


export function SideNavigation({isVisible}:any) {

    const { scrollYProgress } = useScroll()

    const [activate, setActivate] = useState(true)

    const [info, setInfo] = useState(false)
    const [project, setProject] = useState(false)
    const [contact, setContact] = useState(false)


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if(latest >= 0.31 && latest <= 0.45){
            setInfo(true)
            setProject(false)
            setContact(false)
        }else if(latest >= 0.46 && latest <= 0.80){
            setInfo(false)
            setProject(true)
            setContact(false)
        }else if(latest >= 0.81 && latest <= 1){
            setInfo(false)
            setProject(false)
            setContact(true)
        }else{
            setInfo(false)
            setProject(false)
            setContact(false)
        }
      })

    const handleActivate = () => {
        setActivate(!activate)
    }

    const scrollTo = (pixels: number) => {
        window.scrollTo({
          top: pixels,
          behavior: 'smooth',
        });
      };

    
    return (
        <Container>
             <motion.div 
                initial={ isVisible && { opacity: 0, scale: 0 }}
                animate={ isVisible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                transition={isVisible ?{ delay: 0, duration: 0.2 } : {delay: 0.4}}
                className={`menu ${activate&&isVisible ? "active" : ""}`}>
                <div className={`toggle ${isVisible ? "active" : ""}`} onClick={handleActivate}><BiMenu className="icon" /><AiOutlineClose className="icon close" /></div>
                <li className={"home"}><a href="#welcome"><AiOutlineHome /></a></li>
                <li className={"about"} ><a href="#about" style={info?{color:'#159A9C', transition: 'all 0.3s ease-in 150ms'}:{}}><TiInfoLargeOutline /></a></li>
                <li className={"projects"} ><a href="#projects"  style={project?{color:'#159A9C', transition: 'all 0.3s ease-in 150ms'}:{}}><AiFillFolderOpen /></a></li>
                <li className={"contact"} ><a href="#contact" style={contact?{color:'#159A9C', transition: 'all 0.3s ease-in 150ms'}:{}}><AiOutlineContacts /></a></li>
            </motion.div >
        </Container>
    )
}
