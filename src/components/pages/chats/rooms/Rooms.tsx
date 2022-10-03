import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import {Add} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {nanoid} from "nanoid";
import {IRooms} from "../../../../types/types";
import {Link, useParams} from "react-router-dom";

type roomProps = {
    rooms: IRooms[]
    setRooms: Function
}


export const Rooms = ({rooms, setRooms}: roomProps) => {

    const deleteChat = (room: IRooms) => {
        const filterRooms = rooms.filter(el => el.idRoom !== room.idRoom)
        setRooms(filterRooms)
    }

    const addChat = () => {
        setRooms([...rooms, {
            name: 'комната', idRoom: nanoid()
        }])
    }

    return (
        <>
            <List sx={{
                width: '300px', height: '500px', border: '1px solid #534bae',
                'overflow': 'auto', 'padding': '0 15px',
                'borderRight': 'none', 'borderRadius': '20px 0 0 20px',
            }}>
                <IconButton sx={{height: '70px', width: '260px'}} onClick={addChat} aria-label="delete" color="secondary" size="small">
                    <p>добавить чат</p>
                    <Add fontSize="inherit"/>
                </IconButton>
                <hr/>
                {rooms.map((room) => (

                    <ListItem
                        key={nanoid()}
                        disableGutters
                        secondaryAction={
                            <IconButton onClick={() => deleteChat(room)} aria-label="comment">
                                <DeleteIcon fontSize="small" color="warning"/>
                            </IconButton>
                        }
                    >
                        <Link to={`${room.idRoom}`}>
                            <ListItemText sx={{color: '#1a237e'}} primary={`${room.name} № ${room.idRoom}`}/>
                        </Link>
                    </ListItem>
                ))}
            </List>

        </>
    );
}