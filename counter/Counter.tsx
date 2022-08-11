import React, { useEffect, useState } from "react";
import { Button } from "native-base";
interface CounterProps{
    value: number,
    name?: string,
    onChange?: (value: number) => void ,
};

const Counter = (counterProps: CounterProps) => {
    const {name, onChange, value} = counterProps;

    return(
        <div>
            {value} {name}
            <div><Button onPress={() => { if(onChange){
            onChange(value+1);
        }}}>Add</Button></div>
            <div><Button onPress={() => { if(onChange){
            onChange(value-1);
        }}}>Sub</Button></div>
        </div>);
}

export default Counter;