import React from 'react'

const Table = ({ items }: any) => {
    return (
        <div>
            <table>
                <tbody>
                    {items.map((post: any, i: number) => <li key={i} className="list-group-item">{post.title}</li>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table