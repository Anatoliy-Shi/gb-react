import React, {FC} from 'react';

interface Props {
    message: string
}

export const Message:FC<Props> = ({message} : Props) => {
    return (
            <h1 className={'hi'}>{message}</h1>
    );
};
