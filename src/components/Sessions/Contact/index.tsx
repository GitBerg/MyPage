"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Footer } from "./styles";
import { sendContactForm } from "@/lib/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type FormData = {
    sender: string;
    from: string;
    to?: string;
    subject: string;
    text: string;
}


export default function ContactContainer() {
    const {register, handleSubmit} = useForm<FormData>();
    const [emailData, setEmailData] = useState<FormData>({
        sender: '',
        from: '',
        to: 'guttu.sf@gmail.com',
        subject: '',
        text: '',
    });

    const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setEmailData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = async (value:FormData) => {

        try {
            sendContactForm(value)
            toast.success('Your email has been sent!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setEmailData(prevData => ({
              ...prevData,
              sender: '',
              from: '',
              subject: '',
              text: '',  
            }))
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
        }
    };

    return (

        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Container id="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            autoComplete="off"
                            type="text"
                            id="sender"
                            {...register("sender")}
                            value={emailData.sender}
                            onChange={handleInputChange}
                            className={emailData.sender?"has-value":""}
                            required
                        />
                        <label htmlFor="sender">Your name</label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="from"
                            {...register("from")}
                            role="presentation"
                            value={emailData.from}
                            onChange={handleInputChange}
                            className={emailData.from?"has-value":""}
                            required
                        />
                        <label htmlFor="from">Your email</label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="subject"
                            {...register("subject")}
                            value={emailData.subject}
                            onChange={handleInputChange}
                            className={emailData.subject?"has-value":""}
                            required
                        />
                        <label htmlFor="subject">Subject</label>
                        <textarea
                            id="text"
                            {...register("text")}
                            rows={5}
                            cols={20}
                            maxLength={200}
                            placeholder="Type your message here..."
                            value={emailData.text}
                            onChange={handleInputChange}
                            className={emailData.text?"has-value":""}
                            required
                        />
                        <label htmlFor="text">Message</label>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <Footer>
                    <p>Copyright © 2023 Gutemberg Filho</p>
                </Footer>
            </Container>
        </>

    )
}