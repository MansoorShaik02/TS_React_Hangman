const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 sm:gap-3 w-full px-2 sm:px-4">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
            key={key}
            className={`
              rounded-md py-2 sm:py-3 text-lg sm:text-xl font-semibold uppercase
              transition-all duration-200
              ${isActive ? "bg-green-500 text-white" : ""}
              ${isInactive ? "bg-gray-400 text-white cursor-not-allowed" : ""}
              ${!isActive && !isInactive ? "bg-blue-100 hover:bg-blue-300" : ""}
              disabled:opacity-70
            `}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
