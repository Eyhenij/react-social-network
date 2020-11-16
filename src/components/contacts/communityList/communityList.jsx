import React from 'react';
import s from './communityList.module.css';
import CommunityItemCard from "./communityItem/communityItem";

const CommunityList = (props) => {
    let communityList = props.arrUsers.map(c =>
        <CommunityItemCard
            name={c.name}
            id={c.id}
            avatar={c.avatar}
            key={c.id}
            status={c.status}
        />
    )

    return (
        <div>
            {communityList}
        </div>
    )
}


export default CommunityList;