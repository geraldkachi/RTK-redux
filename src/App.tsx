import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/posts/Posts';
import AppRoute from './ProtectedRoutes/AppRoute';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Link, Routes, Route } from "react-router-dom"
// import './App.css';
// import { RootState } from './app/store';
// import { petDecrement, petIncrement } from './action';
// import { useGetUsersQuery } from './services/users';
// import TodoList from './components/TodoList';
// import { useDispatch, useSelector } from 'react-redux';
// import Test from './components/test/Test';

export interface PostType {
  id: number,
  title: string,
  datetime: string,
  body: string
}

function App() {

    //   [
    //   {
    //     id: 1,
    //     title: "My First Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "Lorem ispsum dolor sit smet consectetur adipisicing elit. Quis 1"
    //   },
    //   {
    //     id: 2,
    //     title: "My First Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "Lorem ispsum dolor sit smet consectetur adipisicing elit. Quis 3"
    //   },
    //   {
    //     id: 3,
    //     title: "My First Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "Lorem ispsum dolor sit smet consectetur adipisicing elit. Quis 3"
    //   }
    // ]
  // )
 
  return (
    <>
      <Routes>
        <Route path='/^' element={<AppRoute />} />
      </Routes>
    </>

  );
}

export default App;

// return (
//   <>
//   <Posts />
//     {/* <div className="">
//     <hr style={{marginBottom: '20px'}} />
//   <CRUD/>  
//   </div>
//   <Jsonplace  /> */}
//   </>

// );



// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Link, Routes, Route } from "react-router-dom"
// // import './App.css';
// import { RootState } from './app/store';
// import { petDecrement, petIncrement } from './action';
// import { useGetUsersQuery } from './services/users';
// import TodoList from './components/TodoList';
// import { useDispatch, useSelector } from 'react-redux';
// import Test from './components/test/Test';
// import Footer from './components/Footer';

// function App() {

//   const { data, error, isLoading, isSuccess, isError, isFetching } = useGetUsersQuery()

//   const petCounter = useSelector((state: any) => state.petCounter)
//   const petFavourite = useSelector((state: any) => state.petFavourite)
//   const dispatch = useDispatch()

//   const handleNameChange = () => {
//     const name = ["Bob", "Kelvin", "Dave"]
//     const int = Math.floor(Math.random() * 3)
//     return name[int]
//   }

//   const handleClck = () => console.log('you clicked it')
//   const handleClck2 = (name: string) => console.log(`${name}you clicked it`)
//   const handleEvent = (e: React.ChangeEvent) => console.log(e.target.innerHTML)


//   return (
//     <div className="">
//       <Test />
//       <div>
//         <p>Hello {handleNameChange()}</p>!
//       </div>
//       <Counter />
//       <h1 style={{ textAlign: 'center' }}>Welcome to React Redux Crash Course 2021</h1>
//       <button onClick={() => dispatch(petIncrement(2))}>Add</button>{" "}
//       <button onClick={() => dispatch(petDecrement())}>Remove</button>
//       <h1>Pet counter {petCounter}</h1>
//       <h2>Number of favourite pets so far {petFavourite}</h2>

//       <div>
//         <hr />
//         <TodoList />
//         <br />
//         {isLoading && "Loading..."}
//         {isFetching && "isFetching"}
//         {isError && error.message}
//         {isSuccess && data && data.map((user: any) => <h1>{user.name}</h1>)}
//       </div>
//       <Footer />
//     </div>
//   );
// }