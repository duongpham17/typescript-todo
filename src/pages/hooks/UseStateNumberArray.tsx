import React, {useState} from 'react'

export const UseStateNumberArray = () => {

    const [arr, setArr] = useState<number[]>([]);

    const randomNumberGenerator = (max: number): number => {
        return Math.floor(Math.random() * max);
    }

    const onAdd = (value: number): void => {
        setArr((arr: number[]) => [...arr, value]);
    };

    const onRemove = (value: number): void => {
        setArr((arr:number[]): number[] => arr.filter((num:number) => num !== value))
    }

    return (
        <div>
            <button onClick={() => onAdd(randomNumberGenerator(1000))}>Generate Random Number</button>
            {arr.map((num, index) => 
                <button key={index} onClick={() => onRemove(num)}>{index} - {num}</button>
            )}
        </div>
    )
}

export default UseStateNumberArray