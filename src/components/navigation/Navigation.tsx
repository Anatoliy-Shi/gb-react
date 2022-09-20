import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

export default function GutterlessList() {


    return (
        <List sx={{ width: '100%', border: '1px solid #534bae',
            'borderRight': 'none',
            'borderRadius': '20px 0 0 20px',
            'padding': '0 15px'
        }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <CommentIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={`Пользователь ${value}`} />
                </ListItem>
            ))}
        </List>
    );
}