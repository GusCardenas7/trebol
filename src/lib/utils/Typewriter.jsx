import { useState, useEffect } from "react";

export default function Typewriter({ text, speed, pause }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, pause]);

  return <span className="border-r-2 border-white pr-1">{displayedText}</span>;
}
