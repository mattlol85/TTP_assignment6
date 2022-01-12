import React, {useState, useEffect} from "react"
import SearchResults from "./SearchResults"

export default function InputBox(){
    const [val, setVal] = useState(0)
    return (
        <div>
            <div id="input-box">
            <label>ZipCode: </label>
            <input type={"text"} onInput={event => setVal(event.target.value)}/>
            </div>
            <SearchResults zip={val}/>
        </div>
    )
}
