import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";
import {Add} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {nanoid} from "nanoid";
import {IRooms} from "../../../../types/types";

export const Rooms = () => {
    const [rooms, setRooms] = useState<IRooms[]>([])

    const deleteChat = (room: IRooms) => {
        const filterRooms = rooms.filter(el => el.id !== room.id)
        setRooms(filterRooms)
    }

    const addChat = () => {
        setRooms([...rooms, {
            name: 'комната', id: nanoid()
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
                        <ListItemText sx={{color: '#1a237e'}} primary={`${room.name} № ${room.id}`}/>
                    </ListItem>
                ))}
            </List>

        </>
    );
}