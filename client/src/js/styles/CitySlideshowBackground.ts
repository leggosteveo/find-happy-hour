import { useEffect, useState } from "react";
import city1 from "../../../public/img/city1.jpeg";
import city2 from "../../../public/img/city2.jpeg";
import city3 from "../../../public/img/city3.jpeg";
import city4 from "../../../public/img/city4.jpeg";
import city5 from "../../../public/img/city5.jpeg";

const photos = [city1, city2, city3, city4, city5];
export const returnPhotoURL = (photo: number) => {
  switch (photo) {
    case 1:
      return photos[0];
    case 2:
      return photos[1];
    case 3:
      return photos[2];
    case 4:
      return photos[3];
    case 5:
      return photos[4];
    default:
      return photos[0];
  }
};

const useSlideshow = () => {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    setTimeout(() => {
      setPhoto((prev) => (prev === 5 ? 1 : prev + 1));
    }, 1000);
  };

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(45deg, blue, transparent) ,url(${returnPhotoURL(
      photo
    )})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "10em 0 0",
    width: "100%",
    height: "calc(100% - 10em - 56px)",
  };

  return { backgroundImageStyle };
};

export default useSlideshow;
