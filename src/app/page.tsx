import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Skill from "./component/skill";
import Project from "./component/project";
import About from "./component/about";

export default function Home() {
  return (
   <div>

    <Hero/>
    <About/>

   <Contact/>
  
   <Project/>

   <Skill/>
   </div>
  );
}
