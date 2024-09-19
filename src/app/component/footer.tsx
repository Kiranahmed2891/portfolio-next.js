import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-blue-50  ">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between ">
          <a className="flex title-font font-medium items-center md:justify-start justify-end text-gray-900 ">
            <Image
              src={require("../../../public/assests/picture/untitled design.jpg")}
              alt="kiran ahmed portfolio"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">KIRAN AHMED PORTFOLIO</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 KIRAN AHMED PORTFOLIO
          </p>
          
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-3xl "> */}
          <div className="gap-5 flex items-center justify-center">
            <Link
              target="_blank"
              href={"https://www.youtube.com/@kiranahmed862"}
            
              className="text-[#ff0000]"
            >
              <span className="text-3xl sm:text-5xl md:text-5xl  hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out text-[#ff0000]">
              <BsYoutube  />
              </span>
            </Link>
          {/* </span> */}

    
          <Link href="https://www.linkedin.com/in/kiran-ahmed-8064462b7/" target='_blank'>
            <span className="text-3xl sm:text-4xl  md:text-5xl text-[#0077B5] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out">
              <SiLinkedin /></span>
          </Link>

          <Link href="https://web.facebook.com/profile.php?id=100007473633651" target='_blank'>
           <span className="text-3xl sm:text-5xl md:text-5xl text-[#1877F2] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out"> <SiFacebook /></span>

          </Link>


          <Link href="https://github.com/Kiranahmed2891" target='_blank'>
           <span className="text-3xl sm:text-5xl md:text-5xl text-[#2b3137] hover:scale-110 hover:opacity-80 transition-transform duration-300 ease-in-out"> <SiGithub  /> </span>
          </Link>
          </div>






        

        </div>
      </footer>
    </div>
  );
};

export default Footer;

      