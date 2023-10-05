"use client"
import WelcomeContainer from "@/components/Sessions/Welcome";
import AboutMeContainer from "@/components/Sessions/AboutMe";
import ProjectsContainer from "@/components/Sessions/Projects";
import ContactContainer from "@/components/Sessions/Contact";
import { TransitionEffect } from "@/components/TransitionEffect";
import { Provider, useSelector } from "react-redux";
import store from "@/redux/store";
import "./page.css"


export default function Home() {

  const trigger = useSelector((state:any) => state.trigger.trigger);

  return (
      <Provider store={store}>
        <div className="page"> 
          {trigger && <TransitionEffect />}
          <WelcomeContainer />
          <AboutMeContainer />
          <ProjectsContainer />
          <ContactContainer />
        </div>
      </Provider>
  )
}
