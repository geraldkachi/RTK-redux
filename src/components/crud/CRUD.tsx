import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUsersQuery } from '../../services/users'
import Context from './Context'

const CRUD = () => {
    const ref = useRef<any>()


    const [color, setColor] = useState<string>('')
    const [name, setName] = useState<string>('Kachi')
    const [count, setCount] = useState<number>(0)
  
    const { data, error, isLoading, isSuccess, isError, isFetching } = useGetUsersQuery()
  
    const petCounter = useSelector((state: any) => state.petCounter)
    const petFavourite = useSelector((state: any) => state.petFavourite)
    const dispatch = useDispatch()
  
    const handleNameChange = () => {
      const name = ["Bob", "Kelvin", "Dave"]
      const int = Math.floor(Math.random() * 3)
      // return name[int]
      return setName(name[int])
    }
  
    const handleClck = () => console.log('you clicked it')
    const handleClck2 = (name: string) => console.log(`${name}you clicked it`)
    const handleEvent = (e: React.ChangeEvent) => console.log(e.target.innerHTML)
  
  
    return (
      <div className="">
        {/* Hello {name}
  
        <button onClick={handleNameChange}>Chnage Nmae</button>
  
        <button onClick={handleClck}>handleClck</button>
        <button onClick={() => handleClck2("David")}>handleClck</button>
        <button onClick={(e: any) => handleEvent(e)}>handleEvent</button>
  
        <Footer />
        
        
      <Context /> */}
      <div>
        <h1>count: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>handleClck</button>
      </div>
        <form onSubmit={e => e.preventDefault()}>
  
          <div className="" style={{ backgroundColor: color, width: '100px', height: '100px' }}>
            <p>{color ? color : 'type the colors you want here'}</p>
          </div>
  
          <input type="text" value={color} {...{ ref }} autoFocus onChange={e => setColor(e.target.value)} />
          <button
            onClick={() =>{
              ref.current.focus()
              setColor(color)
            }}
            type="submit">Add Item</button>
        </form>
        <Context/>
      </div>
  
    );
}

export default CRUD