import { useState, useEffect } from "react"
import { Card } from "../component/cards/card"
import { Form } from "../component/Forms/form"
import api from '../api/posts'
import './Todopage.css'

export const TodoPage = () =>{

    const[todo, setTodo] = useState([])
    const[addTodo, setAddTodo] = useState('')

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await api.get('/api')
                setTodo(response.data)
            } catch(err) {
                if(err.response) {
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    console.log(`Error: ${err.message}`)
                }
                
            }
        }

        fetch()
    }, [])

    // useEffect(()=>{
    //     fetch('/api').then(response => {
    //         if(response.ok){
    //             return response.json()
    //         }
    //     }).then(data => setTodo(data))
    // },[])

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
    }
    
    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content:addTodo
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(message => {
                console.log(message)
                setAddTodo('')
                getLatestTodos()
            })
    }

    const getLatestTodos = () => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setTodo(data))
    }

    return (
        <>
            <Form userInput={addTodo} onFormChange = {handleFormChange} onFormSubmit = {handleFormSubmit}/>
            <Card listOfTodos={todo}/>
        </>
    )
}