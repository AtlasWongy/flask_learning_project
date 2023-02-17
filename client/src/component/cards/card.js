import React from 'react';

export const Card =({listOfTodos})=>{
    return (
    <>
        {listOfTodos.map(x=>{
            return(
            <ul key={x.id}>
                <li>{x.content}</li>
            </ul>
            )
        })}
    </>
)
}
