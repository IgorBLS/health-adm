import React, { useEffect, useState } from "react";
import { Button } from "native-base";
interface CounterProps{
    name?: string,
    onChange?: (value: number) => void ,
};

const Counter = (counterProps: CounterProps) => {
    const {name, onChange} = counterProps;
    const [value, setValue] = useState<number>(0);
    useEffect(()=>{
        if(onChange){
            onChange(value);
        }
    }, [value]);
    console.log('oi counter');
    return(
        <div>
            {value} {name}
            <div><Button onPress={() => {setValue(value + 1)}}>Add</Button></div>
            <div><Button onPress={() => {setValue(value - 1)}}>Sub</Button></div>
        </div>);
}

export default Counter;