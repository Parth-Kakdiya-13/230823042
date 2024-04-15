import React from 'react';

const DynamicTable = ({ data }) => {
    // Extract column names from the first object in the data array
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className='table' style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} >{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} >{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;