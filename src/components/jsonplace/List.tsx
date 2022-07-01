import React from 'react'
import ListItem from './ListItem'
interface ListType {
    items: any
}
const List = ({ items }: ListType) => {
    return (
        <div>{items.map((item: any) => <ListItem key={item.id} {...{ item }} />)}</div>
    )
}

export default List