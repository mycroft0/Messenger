import {useEffect, useState} from "react";
import {baseUrl} from "../api/api";
import classes from "./messages.module.css";
import axios from "axios";

const Messages = () => {
    const [messagesData, setMessagesData] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/messages`)
            .then(res=>{
                setMessagesData(res.data)
            })
    }, [])

    return (
        <main className="messages">
            {
                messagesData.map(message=>{
                    return(
                        <div className={classes.messageItem} key={message.id}>
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