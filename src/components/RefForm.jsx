import React, { useEffect, useRef } from 'react'

export const RefForm = () => {
    const inputref=useRef(null);
    useEffect(()=>{
        inputref.current.focus()
    },[])
    return (
        <div>
            <h4>RefForm for ref1</h4>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" ref={inputref}/>
                </div>
            </form>
        </div>
    )
}
