import { useEffect, useState } from "react";

const AsciiLineAnimation = () => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const ascii = ["/", "-", "\\", "|"];
      const randomAscii = ascii[Math.floor(Math.random() * ascii.length)];
      setAnimation(randomAscii);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <pre>{animation}</pre>;
};

export default AsciiLineAnimation;
