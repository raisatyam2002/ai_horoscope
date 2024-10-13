import Image from "next/image";
import placeHolder from "../images/Placeholder.png";
export default function About() {
  return (
    <div className="text-white w-full">
      <p className="text-white  text-2xl sm:text-4xl pl-6  font-custom1  sm:pl-28">
        At <em>Celestial</em>, we are committed to helping you discover the
      </p>
      <p className="text-white text-2xl sm:text-4xl  font-custom1 pl-6 sm:pl-28">
        incredible wisdom that the stars and planets hold. Our{" "}
        <em>commitment</em>
      </p>
      <p className="text-white text-2xl sm:text-4xl  font-custom1  pl-6 sm:pl-28 ">
        includes:
      </p>
      <div className="sm:grid sm:grid-cols-3 sm:pl-28 mt-6 sm:gap-x-6 sm:pr-32 pl-6 ">
        <div className="text-white mb-4 sm:mb-0 ">
          <h1 className="text-2xl font-custom1 mb-2">
            Providing accurate and insightful astrological readings
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            distinctio laudantium doloremque tempore aut molestiae laborum
            velit. Rerum voluptate quae amet culpa nobis nisi eligendi! Iure
            dicta reprehenderit eveniet placeat.
          </p>
        </div>
        <div className="text-white mb-4 sm:mb-0">
          <h1 className="text-2xl font-custom1 mb-2">
            Delivering timely and reliable guidance for your daily life
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            distinctio laudantium doloremque tempore aut molestiae laborum
            velit. Rerum voluptate quae amet culpa nobis nisi eligendi! Iure
            dicta reprehenderit eveniet placeat.
          </p>
        </div>
        <div className="text-white mb-4 sm:mb-0">
          <h1 className="text-2xl font-custom1 mb-2">
            Continuously learning and growing in the field of astrology
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            distinctio laudantium doloremque tempore aut molestiae laborum
            velit. Rerum voluptate quae amet culpa nobis nisi eligendi! Iure
            dicta reprehenderit eveniet placeat.
          </p>
        </div>
      </div>
      <Image
        className="sm:px-20 sm:mt-28 sm:w-[1600px]"
        src={placeHolder}
        alt="placeHolder"
      ></Image>
    </div>
  );
}
