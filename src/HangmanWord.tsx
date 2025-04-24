type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-1 sm:gap-2 md:gap-3 flex-wrap justify-center font-mono font-bold uppercase text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]">
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-4 border-black px-1 sm:px-2 md:px-3"
        >
          <span
            className={
              guessedLetters.includes(letter) || reveal
                ? reveal && !guessedLetters.includes(letter)
                  ? "text-red-500"
                  : "text-black"
                : "invisible"
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
