import Egg from "../assets/images/desktop/image-transform.jpg"
import Out from "../assets/images/desktop/image-stand-out.jpg"
import Gra from "../assets/images/desktop/image-graphic-design.jpg"
import Photo from "../assets/images/desktop/image-photography.jpg"
function Pic() {
  return (
    <div id="pic">
      <div className="md:flex md:flex-row flex-col-reverse ">
        <div className=" md:p-40 py-8 px-6 text-center md:text-start">
          <h1 className=" mb-5 font-extrabold text-3xl">Tranform your brand</h1>
          <p>
            we are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>

          <button className="bg-amber-700 p-1 cursor-pointer rounded mt-5 ">
            Learn More
          </button>
        </div>

        <img className=" md:w-1/2 object-cover" src={Egg} alt="" />
      </div>

      <div className="md:flex md:flex-row  flex-col-reverse flex  ">
        <img className=" md:w-1/2 object-cover" src={Out} alt="" />
        <div className=" py-8 px-6 text-center md:text-start md:p-40 md:w-1/2">
          <h1 className=" mb-5 font-extrabold text-3xl">
            Stand out to the right audience
          </h1>
          <p>
            using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>

          <button className="bg-amber-700 p-1 cursor-pointer rounded mt-5 ">
            Learn More
          </button>
        </div>
      </div>

      <div className="md:flex w-full">
        
        <div
          className="md:w-1/2 h-[500px] bg-cover bg-no-repeat bg-center flex items-end justify-center text-white"
          style={{ backgroundImage: `url(${Gra})` }}
        >
            <div className="flex flex-col mb-20 w-70 text-center text-black ">
                          <h1 className="text-3xl text-black font-bold mb-5">Graphic Design</h1>
          <p>Great design makes you memorable. we deliver artwork that underscores 
            your brand message and capture potential clientt's attention.
          </p>
          </div>
        </div>

    
        <div
          className="md:w-1/2 h-[500px] bg-cover bg-no-repeat bg-center flex items-end justify-center text-white"
          style={{ backgroundImage: `url(${Photo})` }}
        >
            <div className="flex flex-col mb-20 w-70 text-black text-center">
          <h1 className="text-3xl font-bold mb-5">Photography</h1>
          <p> Increase your credibility by getting the most stunning,
            high-quality photos that improve your business image.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pic