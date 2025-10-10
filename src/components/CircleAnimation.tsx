import { useEffect, useState } from "react";

const CircleAnimation = () => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const ascii = ["○", "◌", "●", "◉", "◎"];
      const randomAscii = ascii[Math.floor(Math.random() * ascii.length)];
      setAnimation(randomAscii);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <pre>{animation}</pre>;
};

export default CircleAnimation;
