import Hangmandrawing from "./components/Hangmandrawing";
import Hangmanword from "./components/Hangmanword";
import Keyboard from "./components/Keyboard";
import { useCallback, useEffect, useState } from "react";
import words from "./wordlist.json";
import Cmodal from "./components/Modal";
import Hint from "./components/Hint";

function App() {
  const [wordToguess, setwordToguess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [lettersGussed, setlettersGussed] = useState([]);

  const [hintLimit, sethintLimit] = useState(false);

  const incorrectguess = lettersGussed.filter(
    (letter) => !wordToguess.includes(letter)
  );

  const isLosser = incorrectguess.length >= 6;
  const isWinner = wordToguess
    .split("")
    .every((letter) => lettersGussed.includes(letter));

  const addGussedletter = useCallback(
    (letter) => {
      if (lettersGussed.includes(letter)) return;
      setlettersGussed((prev) => [...prev, letter]);
    },
    [lettersGussed]
  );
  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGussedletter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [lettersGussed]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "5rem auto",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute" }}>
        <Hint
          word={wordToguess}
          setHintedLetter={addGussedletter}
          sethintLimit={sethintLimit}
        />
      </div>
      <Cmodal
        isLosser={isLosser}
        isWinner={isWinner}
        hintLimit={hintLimit}
        sethintLimit={sethintLimit}
      />
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Hangman game</div>

      <Hangmandrawing incorrectguess={incorrectguess.length} />

      <Hangmanword lettersGussed={lettersGussed} wordToguess={wordToguess} />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          setlettersGussed={addGussedletter}
          inActive={incorrectguess}
        />
      </div>
    </div>
  );
}

export default App;
