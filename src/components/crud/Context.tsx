import React, { useEffect, useState } from 'react'
import AddItem from './AddItem'
import apiRequest from './apiRequest'
import ContextItem from './ContextItem'
import SearchItem from './SearchItem'

export interface ContextDat {
    id: number,
    checked: boolean,
    item: string
}
const Context = () => {
    const data = [
        {
            id: 1,
            checked: false,
            item: "help me God item 1"
        },
        {
            id: 2,
            checked: false,
            item: "help me God item2"
        },
        {
            id: 3,
            checked: false,
            item: "help me God item 3="
        },
    ]

    const API_URL = 'http://localhost:3500/items'


    // const [items, setItems] = useState<any>(JSON.parse(localStorage.getItem('shoppingList')) || [])
    const [newitems, setNewitems] = useState('')
    const [search, setSearch] = useState('')
    const [items, setItems] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [fetchError, setFetchError] = useState(null)
    // const [count, setCount] = useState<number>(0)
    console.log(`Before useEffect renders ${items}`)

    useEffect(() => {
        // localStorage.setItem('shoppingList', JSON.stringify(items))
        const fetchItems = async () => {
            try {
                const res = await fetch(API_URL)
                if (!res.ok) throw Error('Did not recenive any data')
                const listItems = res.json()
                setItems(listItems)
                // console.log('first listItems', listItems)
                setFetchError(null)
            } catch (err: any) {
                // console.log(err.stack)
                setFetchError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchItems()
    }, [])

    console.log(`After useEffect renders ${items}`)

    // const setAndSaveItems = (itemItems: any) => {
    //     setItems(itemItems)
    //     localStorage.setItem('shoppingList', JSON.stringify(itemItems))
    // }

    const handleCheck = async (id: any) => {
        const listItems: any = items.map((item: any) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        const myItems = listItems.flter((item: any) => item.id === id)
        const updateOptions = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ checked: myItems[0].checked })
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result)
    }
    const handleDelete = async (id: number) => {
        const itemItems = items.filter((item: any) => item.id !== id)
        console.log(itemItems, 'delete')
        setItems(itemItems)

        const deleteOptions = { method: "DELETE" }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) setFetchError(result)
    }

    const addItem = async (item: any) => {
        const id: number = items.length ? items[items.length - 1].id + 1 : 1
        const mynewitem = { id, checked: false, item }
        const listItems = [...items, mynewitem]
        setItems(listItems)

        const postOption = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mynewitem)
        }
        const result = await apiRequest(API_URL, postOption)
        if (result) setFetchError(result)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!newitems) return
        addItem(newitems)
        console.log(addItem(newitems), 'add')
        setNewitems('')
    }

    return (
        <div>
            {/* Add Item */}
            <AddItem {...{ newitems }} {...{ setNewitems }} {...{ handleSubmit }} />
            <SearchItem {...{ search }} {...{ setSearch }} />
            <main>
                {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
                {!fetchError && <ContextItem {...{ items }} {...{ handleCheck }} {...{ handleDelete }} />}
            </main>
        </div>
    )
}

export default Context