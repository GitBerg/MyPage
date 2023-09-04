import { ReactTypical } from "@deadcoder0904/react-typical";
import { motion } from "framer-motion";
import { Container } from "./style";
import { memo } from "react";

const TypicalAnimation = () => {
    return (
        <Container>
            Hi, My name is Gutemberg Filho
            <div>I{"\'"}m a&nbsp;
                <ReactTypical
                    className="typical"
                    steps={['Web Developer💻', 2000, 'Frontend Developer🎨', 2000, 'React Developer⚛️', 2000, 'Gamer🎮', 2000,]}
                    loop={Infinity}
                    wrapper="b"
                />
                <motion.div
                    initial={{ height: '40px', width: '3px', backgroundColor: '#002323', opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 0.5, repeatType: 'reverse' }}
                    className="line"
                />
            </div>
        </Container>
    )
}

export default memo(TypicalAnimation)