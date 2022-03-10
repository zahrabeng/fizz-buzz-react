//import fizzBuzz from "./fizzbuzz";
import { useState } from "react";
import eachChar from "./fizzorbuzz";



export default function RenderFizz(): JSX.Element{
    const [FizzBuzzCurrentRender, queueRerenderWithNewFizzBuzz] =
    useState <string|number>(); 

    return(
        <>
        <p>FizzBuzz: {FizzBuzzCurrentRender}</p>
        <button onClick={() => queueRerenderWithNewFizzBuzz(eachChar())}>NEXT</button>
        </>
    )
}