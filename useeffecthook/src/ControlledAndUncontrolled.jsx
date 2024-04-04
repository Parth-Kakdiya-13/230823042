import React, { useRef, useState } from 'react'

export const ControlledAndUncontrolled = () => {

    //controlled
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [table, setTable] = useState(false);

    const nameInputRef = useRef(null);
    const cityInputRef = useRef(null);



    const submitHandler = (e) => {
        e.preventDefault();
        alert(`name: ${nameInputRef.current.value}, city: ${cityInputRef.current.value}, email: ${email}, number: ${number}`)
        setTable(true);
        console.log(`name: ${nameInputRef.current.value}, city: ${cityInputRef.current.value}, email: ${email}, number: ${number}`);
    }

    //uncontrolled


    return (
        <div>
            <form className='flex flex-col gap-3 items-start w-1/3 mx-auto bg-green-300 p-5 rounded-lg mt-5' onSubmit={submitHandler}>
                <label className='text-xl font-mono'>Name:</label>
                <input type='text' className='p-1 w-full rounded-sm' ref={nameInputRef} />
                <label className='text-xl font-mono'>City:</label>
                <input type='text' className='p-1 w-full rounded-sm' ref={cityInputRef} />
                <label className='text-xl font-mono'>Email:</label>
                <input type='email' className='p-1 w-full rounded-sm' onChange={(e) => setEmail(e.target.value)} />
                <label className='text-xl font-mono'>Mobile No:</label>
                <input type='number' className='p-1 w-full rounded-sm' onChange={(e) => setNumber(e.target.value)} />
                <button type='submit' className='px-5 py-1 bg-blue-900 rounded-sm text-white'>Submit</button>
            </form>

            {table && <div>
                <table className='border-2 border-black w-1/2 mx-auto mt-5'>
                    <thead>

                        <tr className='border-2 border-black'>
                            <th className='border-2 border-black p-2'>Name</th>
                            <th className='border-2 border-black p-2'>City</th>
                            <th className='border-2 border-black p-2'>Email</th>
                            <th className='border-2 border-black p-2'>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='border-2 border-black'>
                            <td className='border-2 border-black p-2'>{nameInputRef.current.value}</td>
                            <td className='border-2 border-black p-2'>{cityInputRef.current.value}</td>
                            <td className='border-2 border-black p-2'>{email}</td>
                            <td className='border-2 border-black p-2'>{number}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}
