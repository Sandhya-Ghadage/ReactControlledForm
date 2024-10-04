import React, { useEffect, useRef } from 'react'

export const RefForm = () => {
    const inputref=useRef(null);
    useEffect(()=>{
        inputref.current.focus()
    },[])
    return (
        <div>
            <h4>RefForm</h4>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" ref={inputref}/>
                </div>
            </form>
        </div>
    )
}
