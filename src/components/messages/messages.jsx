import React from 'react';
import s from './messages.module.css';
import DialogItem from "./community/dialodItem";
import Message from "./community/message/message";


let arrCommunity = [
    {id: 1, name: 'Max'  },
    {id: 2, name: 'Olga' },
    {id: 3, name: 'Peter'},
    {id: 4, name: 'John' }
]

let arrMessages = [
    {id: 1, message: 'Hi! How are you?'  },
    {id: 2, message: 'Hello' },
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'How is your study?' }
]

let communityItems = arrCommunity.map ( n => <DialogItem name={n.name} id={n.id}/> )
let messagesElements = arrMessages.map( m => <Message message={m.message} id={m.id}/> )

const Messages = () => {
    return (
            <div className={s.community}>
                <div className={s.community__item}>
                    {communityItems}
                    {/*<DialogItem name={arrCommunity[0].name} id={arrCommunity[0].id}/>*/}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    {/*<Message message={arrMessages[3].message} id={arrMessages[3].id}/>*/}
                </div>
            </div>
    )
}

export default Messages;