import { switchOn } from "@/redux/store";
import { Container, Menu } from "./styles";
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlinePaperClip } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { useState } from "react";


export default function TopBar() {

    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const handleOptionMenu = () => {
        dispatch(switchOn());
        setShowMenu(!showMenu);
    }

    return (
        <>
            <Container>
                <ul>
                    <li><a href="#about" onClick={handleOptionMenu}>About Me</a><span></span></li>
                    <li><a href="#projects" onClick={handleOptionMenu}>Projects</a><span></span></li>
                    <li><a href="#contact" onClick={handleOptionMenu}>Contact</a><span></span></li>
                </ul>
                <span className="logo">GF</span>
                <div className="social">
                    <a href="https://github.com/Gitberg" title="GitHub" target="_blank" className="icon"><AiFillGithub /></a>
                    <a href="https://br.linkedin.com/in/gutembergfilho" title="LinkedIn" target="_blank" className="icon"><AiFillLinkedin /></a>
                    <a href="https://www.instagram.com/guttos_f/" title="Instagram" target="_blank" className="icon"><AiOutlineInstagram /></a>
                    <a href="https://drive.google.com/uc?export=download&id=1dpz23xoxjnCUY54wD1lDWcfgKC8d7KW9" title="Download CV" className="icon"><AiOutlinePaperClip /></a>
                </div>
                <span onClick={() => setShowMenu(prev => !prev)} className={`menu ${showMenu ? "open" : ""}`}><AiOutlineMenu id="open-icon" /><AiOutlineClose id="close-icon" /></span>
            </Container>
            {
                showMenu && <Menu>
                <li><a href="#about" onClick={handleOptionMenu}>About Me</a></li>
                <li><a href="#projects" onClick={handleOptionMenu}>Projects</a></li>
                <li><a href="#contact" onClick={handleOptionMenu}>Contact</a></li>
                <li><a href="https://github.com/Gitberg" title="GitHub" target="_blank" className="icon">GitHub</a></li>
                <li><a href="https://br.linkedin.com/in/gutembergfilho" title="LinkedIn" target="_blank" className="icon">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/guttos_f/" title="Instagram" target="_blank" className="icon">Instagram</a></li>
                <li><a href="https://drive.google.com/uc?export=download&id=1dpz23xoxjnCUY54wD1lDWcfgKC8d7KW9" title="Download CV" className="icon">Download CV</a></li>
            </Menu>
            }
        </>
    )
}