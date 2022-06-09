import {useState} from 'react';

import {InitalInputProps, InitalDataProps} from './types';

const generateRandomId = (): string => Math.random().toString(36).substring(7);

const useControls = () => {

    const storage = localStorage.getItem("todo-data");

    const [data, setData] = useState<InitalDataProps | []>(storage ? JSON.parse(storage) : []);
    
    const initalInput: InitalInputProps = {
        id: "",
        name: "",
        value: "",
        date: ""
    }

    const [input, setInput] = useState<InitalInputProps>(initalInput);

    const [editData, setEditData] = useState<InitalInputProps>(initalInput);

    const onSetData = (newData: InitalInputProps): void => {
        const storage = localStorage.getItem("todo-data") ? true : false;

        if(!newData.name) newData.name = generateRandomId();
        if(!newData.value) newData.value = "Empty";

        newData.id = generateRandomId();
        newData.date = ( new Date()).toString().split(" ").splice(1, 4).join(" ");

        if(storage) localStorage.setItem("todo-data", JSON.stringify([...data, newData]));
        if(!storage) localStorage.setItem("todo-data", JSON.stringify([newData]));

        setData((data) => [...data, newData]);
        setInput(initalInput);
    };

    const onEditData = (newData: InitalInputProps): void => {
        const storage = localStorage.getItem("todo-data");
        const updatedData = storage ? JSON.parse(storage) : [];
        const index = updatedData.findIndex(({id}:{id: string}) => id === newData.id);
        updatedData[index] = newData;
        localStorage.setItem("todo-data", JSON.stringify(data));
        setData(updatedData);
        setEditData(initalInput);
    };

    const onCloseEditData = (): void => setEditData(initalInput);

    const onRemoveData = (index: number) => (e:any):void => {
        e.stopPropagation();
        const currentData = [...data];
        currentData.splice(index, 1);
        localStorage.setItem("todo-data", JSON.stringify(currentData));
        setData(currentData);
    };

    const onChange = (setState: CallableFunction) => (e:{target: HTMLInputElement | HTMLTextAreaElement }): void => {
        setState((state: any) => ({...state, [e.target.name] : e.target.value}));
    };

    const onSubmit = (callback: CallableFunction) => (e: any): void => {
        e.preventDefault();
        callback();
    };

    const onStopPropagation = (e: any) => {
        e.stopPropagation();
    }

    return {
        data, setData,
        input, setInput,
        editData, setEditData,
        onSetData,
        onRemoveData,
        onChange,
        onSubmit,
        onEditData,
        onStopPropagation,
        onCloseEditData
    }
}

export default useControls