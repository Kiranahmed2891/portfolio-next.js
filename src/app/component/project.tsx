import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/picture/project 1.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Tech force Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Online platform
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Tech Force Pakistan is an online platform that provides a range of technical courses and training programs. The platform aims to equip individuals with the skills and knowledge required to succeed in the tech industry. With a focus on innovation and excellence, Tech Force Pakistan offers courses in areas such as artificial intelligence, cybersecurity, and data science.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Kiranahmed2891/tech-force-pakistan-web.git"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/picture/todo.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    TO DO LIST
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CLI project 
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  CLI To-Do List is a command line interface-based task management tool. It provides the facility to organize and prioritize tasks. You can add, edit, and delete tasks, and track their status. CLI To-Do List helps you manage your work and boosts your productivity.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Kiranahmed2891/TS-CLI-TODO-LIST.git"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/picture/WC.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Word counter Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CLI wordcounter
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  CLI Word Counter Project is a command line interface-based application that counts the number of words in a given text. It takes a text file or user input as an argument and returns the total word count. The project can be implemented using programming languages like typscript or JavaScript. CLI Word Counter Project is a useful tool for writers, editors, and developers to quickly count words in a piece of text.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Kiranahmed2891/word-counter-project.git"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>



































            
              </div>
            </div>


             {/* Project */}
             <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/picture/STM.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Student managemennt Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CLI student management
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Command Line Interface (CLI) Student Management System is a comprehensive tool designed to streamline student data management for educational institutions. This system enables administrators to efficiently manage student records, including personal details, academic performance, and attendance. With its intuitive interface, users can easily add, update, or delete student records, generate reports, and track student progress, making it an essential tool for schools, colleges, and universities to optimize their student management processes.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Kiranahmed2891/typescript_-student_-managemant_system.git"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>


































            
              </div>
            </div>
             {/* Project */}
             <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/picture/images (1).png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Cli Calculeter Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CLI calculeter
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  The Command Line Interface (CLI) Calculator is a simple yet powerful tool designed to perform various mathematical operations. With its intuitive interface, users can easily navigate through the menu and select the desired operation, whether it&lsquo;s basic arithmetic, trigonometric functions, or more complex calculations. This project aims to provide a user-friendly and efficient way to solve mathematical problems, making it an essential tool for students, professionals, and anyone who needs to perform calculations on the go
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Kiranahmed2891/simple-calculater-.git"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>



































            
              </div>
            </div>
             {/* Project */}
             <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/picture/ATM.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    ATM Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CLI ATM Project
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  In today&lsquo;s digital age, we need a reliable and efficient ATM system to manage our finances safely and easily. With this system, we can check our account balance, withdraw cash, and deposit money into our account. This ATM system empowers us to take control of our finances
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/Kiranahmed2891/ATM-assignment-.git"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default Project;
