import React, { useState } from 'react'

export const ReactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${name} ${email}`)
    }
    return (
        <div>
            <h3>ReactForm</h3>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Useremail</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
