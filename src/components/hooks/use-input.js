import { useState } from "react";

const useInput = (validateFunc)=>{

    const [enteredValueTouched, setEnteredValueTouched] = useState(false);
    const [enteredValue, setEnteredValue] = useState("");
    const valueIsValid = validateFunc(enteredValue);
    const valueInputIsInvalid = !valueIsValid && enteredValueTouched;

    const valueHandler = (event) => {
        setEnteredValue(event.target.value);
      };


      const IsValueTouched = (event) => {
        setEnteredValueTouched(true);
      };

      const resetFunc = (event)=>{
        setEnteredValueTouched(false);
        setEnteredValue("");
      }

      return {
        enteredValue: enteredValue,
        enteredValueTouched: enteredValueTouched,
        valueIsValid: valueIsValid,
        IsValueTouched: IsValueTouched,
        valueInputIsInvalid: valueInputIsInvalid,
        valueHandler: valueHandler,
        resetFunc: resetFunc
      }

}

export default useInput;