import React from 'react'

export default function Content({ data }) {
    return (
        <div className='table' style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <table>
                {data.map((list) => {
                    return <>
                        <tr style={{ "textAlign": "left" }}>
                            <th>{list.title}</th>
                        </tr>
                        <ul>
                            <li>{list.content}</li>
                        </ul>
                    </>
                })}
            </table>
        </div>
    )
}
