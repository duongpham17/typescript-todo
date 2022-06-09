import {useState} from 'react';

export const useOpen = <T,>(customValue?: T) => {

    const [open, setOpen] = useState<boolean>(false);

    const onOpen = ():void => setOpen(open => !open);

    const [openValue, setOpenValue] = useState<T | undefined | null>(customValue);

    return {
        open,
        setOpen,
        onOpen,
        openValue,
        setOpenValue,
    }

}

export const CustomHooks = () => {
    
    const {onOpen, open, openValue, setOpenValue} = useOpen({
        color: "orange",
        calc: [10, true],
        open: false,
        name: "calc",
        id: "1234568"
    });

    const onChangeValue = () => {
        setOpenValue({
            color: "orange",
            calc: [100, false],
            open: true,
            name: "app",
            id: "123124123"
        })
    }

    return (
        <div>

            <p>Boolean button</p>
            <button onClick={onOpen}>{open ? "OPEN" : "CLOSE"}</button>

            {open && 
                <p>Open content</p>
            }

            {!open && 
                <p>Close content</p>
            }

            <br/>
            <p>Any value button</p>
            <button onClick={onChangeValue}>Change</button>
            <p>{openValue?.color}</p>
            <p>{openValue?.calc[1]}</p>
            <p>{openValue?.open ? "open" : "closed"}</p>
            <p>{openValue?.name}</p>
            <p>{openValue?.id}</p>

        </div>
    )
}

export default CustomHooks;