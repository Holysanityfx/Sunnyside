 import { useState } from "react";
 import Menu from "../assets/images/icon-hamburger.svg"
 import Logo from "../assets/images/logo.svg";
 import Header from "../assets/images/desktop/image-header.jpg";

 function Nav() {

  const [isOpen, setIsopen] = useState(false)
   return (
     <div
       className="relative w-full h-[500px] flex flex-col justify-between bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${Header})` }}
     >
       <div className="absolute inset-0 bg-black/20"></div>

       <div className=" fixed bg-blue-400 z-10 flex w-full justify-between items-center p-3 md:px-10 py-6">
         <img className="h-10" src={Logo} alt="Logo" />
         <nav className=" hidden md:flex gap-8 text-white font-medium">
           <a
             className=" hover:bg-amber-600 hover:rounded hover:text-black "
             href="#about"
           >
             About
           </a>{" "}
           <a
             className=" hover:bg-amber-600 hover:rounded hover:text-black "
             href="#pic"
           >
             Service
           </a>
           <a
             className=" hover:bg-amber-600 hover:rounded hover:text-black "
             href="#projects"
           >
             Projects
           </a>
           <a
             className=" hover:bg-amber-600 hover:rounded hover:text-black "
             href="#contact"
           >
             Contact
           </a>
         </nav>
         <img
           onClick={() => setIsopen(true)}
           className="md:hidden"
           src={Menu}
           alt=""
         />
         {isOpen && (
           <div className="fixed ml-15 bg-white  mt-80 w-60 py-8 px-20 text-2xl text-center z-5 ">
             <nav className="flex flex-col gap-5 font-bold text-black/50">
               <a
                 onClick={() => setIsopen(false)}
                 className=" hover:bg-amber-600 hover:rounded hover:text-white "
                 href="#about"
               >
                 About
               </a>
               <a
                 onClick={() => setIsopen(false)}
                 className=" hover:bg-amber-600 hover:rounded  hover:text-white "
                 href="#pic"
               >
                 Services
               </a>
               <a
                 onClick={() => setIsopen(false)}
                 className=" hover:bg-amber-600 hover:rounded hover:text-white "
                 href="projects"
               >
                 Projects
               </a>
               <a
                 onClick={() => setIsopen(false)}
                 className=" hover:bg-amber-600 hover:rounded hover:text-white "
                 href="#contact"
               >
                 {" "}
                 Contact
               </a>
             </nav>
           </div>
         )}
       </div>

       <div className="relative  flex flex-col items-center justify-center flex-1 text-white text-5xl font-extrabold tracking-widest -mt-20">
         <h1 className="text-center">WE ARE CREATIVES</h1>
         <div className="w-16 h-1 bg-white mt-4"></div>
       </div>
     </div>
   );
 }

 export default Nav;
