import { useState, useEffect } from "react"
import { Card } from "../component/cards/card"


export const TodoPage = () =>{
    const [todo, setTodo] = useState ([])
    useEffect(()=>{
        fetch('/api')
        .then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(data=>setTodo(data))
        console.log(todo)
    }, [])

    return (
        <>
            <Card listOfTodos={todo}/>
        </>
    )
}