import { useState } from "react"

const Car = () =>{
    const[brand, setBrand] = useState("Mercedes");
    const[company, setCompany] = useState("Tata");
    
    return(
        <div>
           <h1>the car {brand} is belong to the {company} and it very good </h1>
           <button className="levi" onClick={() =>setBrand("BMW")}> Change Brand</button>
           <button onClick={() =>setCompany ("grmmy")}>Chnage company</button>
        </div>
    ) 
}
export default Car