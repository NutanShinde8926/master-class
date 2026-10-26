import { useState } from "react"

const Toggle = () =>{
    const [show, setShow] = useState(false);

    return(
        <div>
        <button onClick={() =>setShow(!show)}>{show? "Hide": "Show"}</button>
        {show && <p>ye text pehle chupa tha</p>}
        </div>
    );
};
export default Toggle;



// const [user, setUser] = useState({ name: "", email: "" });

// <input onChange={(e) => setUser({ ...user, name: e.target.value })} />