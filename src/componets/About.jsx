import Emi from "../assets/images/image-emily.jpg"
import Jen from "../assets/images/image-jennie.jpg"
import Thos from "../assets/images/image-thomas.jpg"

function About() {
  return (
    <div id="about" className="md:p-30 items-center text-center">
      <h1 className=" font-extrabold text-black/20 tracking-widest mb-5 mt-10 ">
        CLIENT TESTIMONIES
      </h1>
      <div className="md:flex mt-10 ">
        <div className="items-center flex flex-col">
          <img className="rounded-full h-15 mb-10" src={Emi} alt="" />

          <p>
            {" "}
            we out our trust in Sunnyside and they delivered. making sure our
            needs were met and deadliness were always hit
          </p>

          <h1 className=" mt-10 font-extrabold">Emily R.</h1>
          <p className="text-black/30">MArketing Director</p>
        </div>

        <div className="items-center flex flex-col">
          <img className="rounded-full h-15 mb-10" src={Thos} alt="" />

          <p>
            {" "}
             Sunnyside's enthusiasm coupled with either 
             keen interest in our brand's success made it 
             a satisfying and enjoyable experience.
          </p>

          <h1 className=" mt-10 font-extrabold">Thomas S.</h1>
          <p className="text-black/30">Chief Operating Officer</p>
        </div>

        <div className="items-center flex flex-col">
          <img className="rounded-full h-15 mb-10" src={Jen} alt="" />

          <p>
            {" "}
             incredible end result! Our sals Increased over 400% 
             when we worked with Sunnyside Highly recommended!
          </p>

          <h1 className=" mt-10 font-extrabold">Jennie F.</h1>
          <p className="text-black/30">Business Owner</p>
        </div>
      </div>
    </div>
  );
}

export default About