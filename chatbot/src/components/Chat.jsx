import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import Show from '../assets/img/DSC_0281.JPG_001.png'
import Wani from '../assets/img/Wani.png'

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="Icon" src={Show} />
                ) : (
                    <Avatar alt="Icon" src={Wani} />
                )}
            </ListItemAvatar>
            <div className='p-chat__bubble'>{props.text}</div>
        </ListItem>

    )
}

export default Chat