import React, { useRef } from 'react'

const AddItem = ({ setNewitems, handleSubmit, newitems }: any) => {
    const ref = useRef<any>()
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input {...{ ref }} type="text" value={newitems} autoFocus placeholder='Add Item' id="addItem"
                onChange={(e) => setNewitems(e.target.value)}
                required />
            <button
                onClick={() => ref.current.focus()}
                type="submit">Add Item</button>
        </form>
    )
}

export default AddItem