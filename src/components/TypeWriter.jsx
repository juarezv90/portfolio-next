import React, { useEffect, useState } from "react";

const TypeWriter = ({ content = ["start"], speed = 500 }) => {
  const [word, setWord] = useState("");
  const wordToPrint = content;
  const [index, setIndex] = useState(0);
  const setTextState = ["typing", "deleting"];
  const [typingState, SetTypingState] = useState(setTextState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typingState === "typing" && word !== wordToPrint[index]) {
        setWord(wordToPrint[index].slice(0, word.length + 1));
      } else if (word === wordToPrint[index] && typingState === "typing") {
        sleep(500).then(() => {
          SetTypingState(setTextState[1]);
        });
      } else if (
        (word === wordToPrint[index] && typingState === "deleting") ||
        typingState === "deleting"
      ) {
        setWord(wordToPrint[index].slice(0, word.length - 1));
        if (word.length <= 1) {
          if (index >= word.length) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
          SetTypingState(setTextState[0]);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [word, typingState]);

  return <>{word}<span className="animate-ping">|</span></>;
};

export default TypeWriter;
