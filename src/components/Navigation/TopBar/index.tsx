import { switchOn } from "@/redux/store";
import { Container } from "./styles";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlinePaperClip } from "react-icons/ai";
import {  useDispatch } from 'react-redux';


export default function TopBar(){

    
    const dispatch = useDispatch();
    
    
    return(
        <Container>
            <ul>
                <li><a href="#about" onClick={() => dispatch(switchOn())}>About Me</a><span></span></li>
                <li><a href="#projects"onClick={() => dispatch(switchOn())}>Projects</a><span></span></li>
                <li><a href="#contact"onClick={() => dispatch(switchOn())}>Contact</a><span></span></li>
            </ul>
            <span className="logo">GF</span>
            <div className="social">
                <a href="https://github.com/Gitberg" target="_blank" className="icon"><AiFillGithub/></a>
                <a href="https://br.linkedin.com/in/gutembergfilho" target="_blank" className="icon"><AiFillLinkedin/></a>
                <a href="https://www.instagram.com/guttos_f/" target="_blank" className="icon"><AiOutlineInstagram/></a>
                <a href="https://drive.google.com/uc?export=download&id=1dpz23xoxjnCUY54wD1lDWcfgKC8d7KW9" className="icon"><AiOutlinePaperClip/></a>
            </div>
        </Container>
    )
}