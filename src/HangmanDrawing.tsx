const HEAD = (
  <div className="absolute top-[40px] sm:top-[50px] right-[-16px] sm:right-[-20px] rounded-full border-[5px] sm:border-[8px] md:border-[10px] border-black w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]" />
);

const BODY = (
  <div className="absolute bg-black w-[6px] sm:w-[8px] md:w-[10px] h-[90px] sm:h-[110px] top-[90px] sm:top-[120px] right-0" />
);

const RIGHT_ARM = (
  <div className="absolute bg-black w-[70px] sm:w-[100px] h-[6px] sm:h-[8px] md:h-[10px] top-[115px] sm:top-[150px] right-[-70px] sm:right-[-100px] rotate-[-30deg] origin-left-bottom" />
);

const LEFT_ARM = (
  <div className="absolute bg-black w-[70px] sm:w-[100px] h-[6px] sm:h-[8px] md:h-[10px] top-[115px] sm:top-[150px] right-[8px] sm:right-[10px] rotate-[30deg] origin-right-bottom" />
);

const RIGHT_LEG = (
  <div className="absolute bg-black w-[70px] sm:w-[100px] h-[6px] sm:h-[8px] md:h-[10px] top-[160px] sm:top-[210px] right-[-65px] sm:right-[-90px] rotate-[60deg] origin-left-bottom" />
);

const LEFT_LEG = (
  <div className="absolute bg-black w-[70px] sm:w-[100px] h-[6px] sm:h-[8px] md:h-[10px] top-[160px] sm:top-[210px] right-0 rotate-[-60deg] origin-right-bottom" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative flex justify-center items-start mx-auto w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] h-[300px] sm:h-[400px]">
      {BODY_PARTS.slice(0, numberOfGuesses)}

      {/* Rope */}
      <div className="absolute bg-black h-[40px] sm:h-[50px] w-[6px] sm:w-[8px] md:w-[10px] top-0 right-0" />

      {/* Top horizontal bar */}
      <div className="bg-black h-[6px] sm:h-[8px] md:h-[10px] w-[120px] sm:w-[160px] md:w-[200px] ml-[100px] sm:ml-[120px]" />

      {/* Vertical support pole */}
      <div className="bg-black h-[260px] sm:h-[340px] md:h-[400px] w-[6px] sm:w-[8px] md:w-[10px] ml-[100px] sm:ml-[120px]" />

      {/* Base */}
      <div className="absolute bottom-0 left-0 bg-black h-[6px] sm:h-[8px] md:h-[10px] w-[180px] sm:w-[230px] md:w-[250px]" />
    </div>
  );
}
