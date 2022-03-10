import { useState } from "react";
import eachChar from "./shiftingArray";

export default function RenderFizz(): JSX.Element {
  const [FizzBuzzState, setFizzBuzzState] = useState<
    string | number
  >();

  const [FizzBuzzReRender, setFizzBuzzRerender] = useState<any[]>(
    []
  );

  const handleStoreCurrentCount = () => {
    setFizzBuzzState(eachChar());
    setFizzBuzzRerender([
      ...FizzBuzzReRender,
      FizzBuzzState,
    ]);
  };

  const fizzBuzzArray = FizzBuzzReRender.map((fizz) => (
    <>
      <li>{fizz}</li>
    </>
  ));

  return (
    <>
      <p>FizzBuzz: {FizzBuzzState}</p>
      <p>FizzBuzz List: {fizzBuzzArray}</p>
      <button onClick={handleStoreCurrentCount}>NEXT</button>
    </>
  );
}
