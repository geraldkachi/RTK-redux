// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Layout, Space, Typography } from "antd"
// import { Link, Routes, Route } from "react-router-dom"
// // import './App.css';
// import { RootState } from './app/store';
// import { petDecrement, petIncrement } from './action';
// import { useGetUsersQuery } from './services/users';
// import TodoList from './components/TodoList';
// import { useDispatch, useSelector } from 'react-redux';
import Test from './components/test/Test';

function App() {

  // const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery()
  
  // const petCounter = useSelector((state: any) => state.petCounter)
  // const petFavourite = useSelector((state: any) => state.petFavourite)
  // const dispatch = useDispatch()

  return (
    <div className="">
      <Test />
      {/* <h1 style={{textAlign:'center'}}>Welcome to React Redux Crash Course 2021</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add</button>{" "}
      <button onClick={() => dispatch(petDecrement())}>Remove</button>
      <h1>Pet counter {petCounter}</h1>
      <h2>Number of favourite pets so far {petFavourite}</h2> */}

      <div>
        {/* <hr />
        <TodoList />
        <br /> */}
        {/* {isLoading && "Loading..."}
        {isError && error.message}
        {isSuccess && data && data.map((user: any) => <h1>{user.name}</h1>)} */}
      </div>
    </div>
  );
}

export default App;
