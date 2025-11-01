 import Corn from "../assets/images/desktop/image-gallery-cone.jpg"
 import Bottle from "../assets/images/desktop/image-gallery-milkbottles.jpg";
 import Sugar from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
 import Orang from "../assets/images/desktop/image-gallery-orange.jpg"

function Projects() {
  return (
    <div id="projects" className="md:flex flex  flex-wrap w-full items-center p-4  ">
      <img className="md:w-1/4 items-center  w-40  1/2 md:h-[500px]  h-50 " src={Bottle} alt="" />
      <img className="md:w-1/4  w-40 1/2 md:h-[500px]  h-50 " src={Orang} alt="" />
      <img className="md:w-1/4 w-40 md:h-[500px] h-50 " src={Corn} alt="" />
      <img className="md:w-1/4  w-40 md:h-[500px] h-50 " src={Sugar} alt="" />
    </div>
  );
}

export default Projects