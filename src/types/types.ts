export interface IMessage  {
    author: string,
    text: string,
    idRoom: string,
}

export interface IRooms  {
    idRoom: string,
    name: string
    message: string[]
}

