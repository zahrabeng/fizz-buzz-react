import fizzBuzz from "./fizzbuzz";
 
const testing:(string | number)[]= fizzBuzz()


export default function eachChar():string|number|undefined{
    for (let i = 0; i < testing.length; i++){
        console.log(testing)
        const newArr = testing.shift()
        return newArr
    }
}


