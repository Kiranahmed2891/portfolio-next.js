"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font  bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Beauticien",
                 
                  "Fashion designer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
          Experienced Frontend Web Developer | Expert in Typescript, JavaScript, Node.js, React.js, Next.js, HTML, CSS | Bootatraps | FireBase | Participant  Governor Initiative of Artificial Intelligence
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        

<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.div
            className="relative w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Image
              className="object-cover object-center rounded mx-auto w-full h-auto"
              alt="hero"
              height={500}
              width={500}
              src={require("../../../public/assests/picture/img2.png")}
            />
          </motion.div>
        </div>














      </div>
    </section>
  );
};

export default Hero;