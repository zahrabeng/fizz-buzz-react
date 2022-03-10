import { useState } from "react";
import eachChar from "./shiftingArray";

export default function RenderFizz(): JSX.Element {
  const [FizzBuzzCurrentRender, queueRerenderWithNewFizzBuzz] = useState<
    string | number
  >();
  const [FizzBuzzReRender, queueReRerenderWithNewFizzBuzz] = useState<any[]>(
    []
  );

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewFizzBuzz(eachChar());
    queueReRerenderWithNewFizzBuzz([
      ...FizzBuzzReRender,
      FizzBuzzCurrentRender,
    ]);
  };

  const fizzBuzzArray = FizzBuzzReRender.map((fizz) => (
    <>
      <li>{fizz}</li>
    </>
  ));

  return (
    <>
      <p>FizzBuzz: {FizzBuzzCurrentRender}</p>
      <p>FizzBuzz List: {fizzBuzzArray}</p>
      <button onClick={handleStoreCurrentCount}>NEXT</button>
    </>
  );
}
