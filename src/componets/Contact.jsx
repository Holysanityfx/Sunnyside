 import Face from "../assets/images/icon-facebook.svg"
 import Insta from "../assets/images/icon-instagram.svg"
 import Twitt from "../assets/images/icon-twitter.svg"
 import Pin from "../assets/images/icon-pinterest.svg"

function Contact() {
  return (
    <div id="contact" className="bg-green-300 p-20 items-center text-center">
        <div className="flex flex-col items-center ">
            <h1 className=" text-black/30 font-extrabold mb-5 text-2xl">Sunnyside</h1>
            <div className="flex gap-8 font-bold text-black/20 mb-15  ">
                <a href="#">About</a>
                <a href="#"> Service</a>
                <a href="#"> Projects</a>
            </div>
            <div className="flex gap-8">
                <img src={Face} alt="" />
                <img src={Insta} alt="" />
                <img src={Twitt} alt="" />
                <img src={Pin} alt="" />

            </div>


        </div>
    </div>
  )
}

export default Contact