import React, { useState } from 'react'
import Nav from './Nav'

const Posts = () => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResults] = useState([])
  return (
    <>
    <Nav {...{search}} {...{setSearch}} />
    </>
  )
}

export default Posts