import React from 'react'
import { ContextDat } from './Context'

const ContextItem = ({ items, handleCheck, handleDelete }: any) => {
    return (
        <>
            {items.length ? (
                <ul>
                    {items.map((item: ContextDat) =>
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheck(item.id)}
                            />
                            <label
                                // style={{textDecoration: 'line-through'}}
                                // style={(item.checked) ? {textDecoration: 'line-through'} : ""}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <button type="submit" onClick={() => handleDelete(item.id)}>Delete</button>
                        </li>
                    )}
                </ul>
            ) : (
                <p>Your List is empty</p>
            )}
        </>
    )
}

export default ContextItem