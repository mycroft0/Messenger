import {createContext, useContext} from "react";
import {baseUrl} from "../components/api/api";
import {useEffect, useState} from "react";
import axios from "axios";


const MessagesContext = createContext(null)

const MessagesProvider = ({children}) =>{

    const [messagesData, setMessagesData] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () =>{
        axios.get(`${baseUrl}/messages`)
            .then(res=>{
                setMessagesData(res.data)
            })
            .catch(err=>console.log(err))
    }


    const sendPost = (text, author, date = '07/05/2022') => {
        const obj = {
            text, author, date
        }

        axios.post(`${baseUrl}/messages`,obj)
            .then(res=>console.log(res))
            .then(()=>{
                fetchPosts()
            })
            .catch(err=>console.log(err))
    }

    const deletePost = id =>{
        axios.delete(`${baseUrl}/messages/${id}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return <MessagesContext.Provider value={{messagesData,sendPost, deletePost}}>
        {children}
    </MessagesContext.Provider>
}

export const useMessages = () => useContext(MessagesContext)

export default MessagesProvider