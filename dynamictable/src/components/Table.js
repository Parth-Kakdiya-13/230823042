import React from 'react'

export default function Table() {
    return (
        <div className='table' style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <table>
                <tr style={{ textAlign: "center" }}>
                    <th colSpan="3">
                        <h1>Core 1</h1>
                        <p>For the students admitted from A.Y. 2021-2022 onwards</p>
                    </th>
                </tr>
                <tr>
                    <td>
                        <p>offering Department</p>
                        <h2>Computer Science</h2>
                    </td>
                    <td colSpan="2">
                        <h2><span style={{ "fontSize": "16px", fontWeight: "normal" }}>Offered to:</span> B.Sc. Information Technology</h2>
                    </td>
                </tr>
                <tr>
                    <td colSpan='3' style={{ textAlign: "center" }}>
                        <h3>Semester - 1</h3>
                    </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                    <td>Course Code</td>
                    <td>Course Title</td>
                    <td>Course Credit and Hours</td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                    <td><h4>21BITCC101</h4></td>
                    <td><h4>Fundamentals of Computer (F)</h4></td>
                    <td><h4>4 Credits - 4 hrs/wk</h4></td>
                </tr>
            </table>
        </div >
    )
}
