import styles from './Home.module.scss';
import React from 'react';

import useControls from './useControls';

const Home = () => {

    const {input, setInput, data, editData, setEditData, onSetData, onRemoveData, onChange, onSubmit, onEditData, onCloseEditData, onStopPropagation} = useControls();

    return (
        <div className={styles.container}>
            <h2>Todo app</h2>

            <form onSubmit={onSubmit(() => onSetData(input))}>

                <div>
                    <b>Name</b>
                    <input name="name" value={input.name} onChange={onChange(setInput)}  />
                </div>

                <div>
                    <b>Value</b>
                    <textarea name="value" value={input.value} onChange={onChange(setInput)} />
                </div>

                <button onClick={onSubmit(() => onSetData(input))}>Send</button>

            </form>

            <div className={styles.map}>
                {data.map((el, index) => 
                    <div key={el.id} className={styles.element} onClick={() => setEditData(el)}>
                        <p className={styles.header}><b>{el.name}</b> <span>{el.date}</span></p>
                        <p>{el.value}</p>
                        <button className={styles.delete} onClick={onRemoveData(index)}>X</button>
                    </div>    
                )}
            </div>

            {editData.id &&
                <div className={styles.editContainer} onClick={onCloseEditData}>

                    <form onSubmit={onSubmit(() => onEditData(editData) )} onClick={onStopPropagation}>

                        <div>
                            <b>Name</b>
                            <input name="name" value={editData.name} onChange={onChange(setEditData)}  />
                        </div>

                        <div>
                            <b>Value</b>
                            <textarea name="value" value={editData.value} onChange={onChange(setEditData)}  />
                        </div>

                        <button onClick={onSubmit(() => onEditData(editData) )}>Update</button>

                    </form>

                </div>  
            }

        </div>
    )
}

export default Home