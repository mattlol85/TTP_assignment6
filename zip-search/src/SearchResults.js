import React, { useEffect, useState } from "react"

function SearchResults(props) {

    const [data, setData] = useState(null)
    const url = `https://ctp-zip-api.herokuapp.com/zip/${props.zip}`
    useEffect(() => {
        fetch(`https://ctp-zip-api.herokuapp.com/zip/${props.zip}`)
            .then(res => res.json())
            .then(ret => setData(ret))
    }, [url])

    if (data) {
        console.log(data)
        return (
            <div id={"results"}>
                {data.map((elm) => {
                    return (
                        <div className={"search-res"}>
                            <h2 className={"city"}>{elm.LocationText}</h2>
                            <ul className="resList">
                                <li>{elm.State}</li>
                                <li>{elm.Location}</li>
                                <li>{elm.EstimatedPopulation}</li>
                                <li>{elm.TotalWages}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div><h2>No Results</h2></div>
    )

}



export default SearchResults