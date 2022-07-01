import React from 'react'

const ListItem = ({item, key}: any) => {
  return (
    <li style={{width:'100%'}} {...{key}}>{JSON.stringify(item)}</li>
  )
}

export default ListItem