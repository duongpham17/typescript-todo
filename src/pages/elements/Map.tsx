interface Props {
    array: {
        id: number,
        name: string,
        title: string,
        open?: string,
        location?: string,
    }[]
}

export const Map = (props: Props) => {

    return (
        <div>
            {props.array.map(el => 
                <p key={el.id}>
                    {el.name} - {el.title} - {el?.open} - {el?.location}
                </p>    
            )}
        </div>
    )
};

export default Map