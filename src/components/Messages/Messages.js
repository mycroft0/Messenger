import {useEffect, useState} from "react";
import {baseUrl} from "../api/api";
import axios from "axios";

const Messages = () => {
    const [messagesData, setMessagesData] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/messages`)
            .then(res=>{
                console.log(res)
            })
    }, [])

    return (
        <main className="messages">
            {
                messagesData.map(message=>{
                    return(
                        <div key={message.id}>
                            <p>{message.author}</p>
                            <p>{message.text}</p>
                            <p>{message.date}</p>
                        </div>

                    )
                })
            }
        </main>
    )
}

export default Messages