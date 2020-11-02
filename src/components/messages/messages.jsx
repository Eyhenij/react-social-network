import React from 'react';
import s from './messages.module.css';
// import {BrowserRouter, Route} from "react-router-dom";
import Message from "./dialogs/message/message";
import DialogItem from "./dialogs/dialodItem";


let arrMessages = [
    {id: 1, message: 'Hi! How are you?'  },
    {id: 2, message: 'Hello' },
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'How is your study?' }
]
let MessagesElements = arrMessages.map( m => <Message message={m.message} id={m.id}/> )
// export default MessagesElements;



let arrCommunity = [
    {id: 1, name: 'Max'  },
    {id: 2, name: 'Olga' },
    {id: 3, name: 'Peter'},
    {id: 4, name: 'John' }
]
const CommunityItems = arrCommunity.map ( n => <DialogItem name={n.name} id={n.id}/> )
// export default CommunityItems;



const Messages = () => {
    return (
        // <BrowserRouter>
            <div className={s.community}>
                <div className={s.community__item}>
                    {CommunityItems}
                    {/*<Route path='/messages' render={ () => <CommunityItems />}/>*/}
                </div>
                <div className={s.messages}>
                    {MessagesElements}
                    {/*<Route path='/messages' render={ () => <MessagesElements />}/>*/}
                </div>
            </div>
        // </BrowserRouter>
    )
}

export default Messages;