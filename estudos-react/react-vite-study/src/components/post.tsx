import React from "react"


export function Post(props)  {
   
    return (
        <div>
            <h4>{props.author}</h4>
            <p>{props.content}</p>
        </div>
    )

}