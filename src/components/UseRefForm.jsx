import React, { useRef } from 'react'

export const UseRefForm = () => {
    const nameref = useRef(null);
    const emailref=useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        nameref.current.focus();
        alert(` ${emailref.current.value}`)
    }
    return (
        <div>
            <h3>UseRefForm</h3>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" ref={nameref} />
                </div>
                <div>
                    <label>Useremail</label>
                    <input type="email" ref={emailref} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
