import React, { useEffect, useState } from "react"
import './SearchResults.css';

function SearchResults(props) {

    const [data, setData] = useState(null)
    const url = `https://ctp-zip-api.herokuapp.com/zip/${props.zip}`

    useEffect(() => {
        fetch(`https://ctp-zip-api.herokuapp.com/zip/${props.zip}`)
            .then(res => res.json())
            .then(ret => setData(ret))
    }, [url])

    if(data && props.zip.length>4 && props.zip.length<6) {
        if(data[0].Zipcode === props.zip) {
            console.log("success")
            console.log(data)
            return (
                <div id={"results"}>
                    {data.map((elm) => {
                            return (<div className={"search-res"}>
                            <h2 className={"city"}>{elm.City}, {elm.State}</h2>
                            <ul>
                                <li>State: {elm.State}</li>
                                <li>location: {elm.Lat} {elm.Long}</li>
                                <li>Population(estimated): {elm.EstimatedPopulation}</li>
                                <li>Total Wages: {elm.TotalWages}</li>
                            </ul>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    
    return(
        <div id="no-res"><h2>No Results</h2></div>
    )

}



export default SearchResults