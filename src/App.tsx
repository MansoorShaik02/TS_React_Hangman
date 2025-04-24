import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((current) => [...current, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col items-center gap-6 bg-white rounded-2xl shadow-2xl p-0 md:p-10">
        <h1
          className={`text-xl sm:text-2xl md:text-3xl font-bold text-center ${
            isWinner
              ? "text-green-600 animate-bounce"
              : isLoser
              ? "text-red-600 animate-pulse"
              : "text-gray-700"
          }`}
        >
          {isWinner && "🎉 You Won! Press Enter or Tap New Game"}
          {isLoser && "💀 Game Over! Press Enter or Tap New Game"}
        </h1>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl relative">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        </div>

        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <div className="w-full">
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((l) =>
              wordToGuess.includes(l)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>

        <button
          onClick={() => {
            setGuessedLetters([]);
            setWordToGuess(getWord());
          }}
          className="mt-0 px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-md transition-all duration-200"
        >
          🔁 New Game
        </button>
      </div>
    </div>
  );
}

export default App;
