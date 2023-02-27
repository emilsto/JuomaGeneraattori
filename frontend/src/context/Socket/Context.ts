import { Socket } from 'socket.io-client';
import { createContext } from 'react';

export interface ISocketContext {
    socket: Socket;
    uid: string;
    users: string[];
}

export const defaultSocketContext: ISocketContext = {
    socket: {} as Socket,
    uid: '',
    users: [],
};

export type TSocketContextActions = 'updateSocket' | 'updateUid' | 'updateUsers' | 'removeUser';

export type TSocketContextPayload = string | Socket | string[];

export interface ISocketContextAction {
    type: TSocketContextActions;
    payload: TSocketContextPayload;
}

export const socketContextReducer = (state: ISocketContext, action: ISocketContextAction): ISocketContext => {
    console.log('socketContextReducer', action.type, action.payload);
    switch (action.type) {
        case 'updateSocket':
            return { ...state, socket: action.payload as Socket };
        case 'updateUid':
            return { ...state, uid: action.payload as string };
        case 'updateUsers':
            return { ...state, users: action.payload as string[] };
        case 'removeUser':
            return { ...state, users: state.users.filter((user) => user !== action.payload) };
        default:
            return state;
    }
};

export interface ISocketContextProps {
    SocketState: ISocketContext;
    SocketDispatch: React.Dispatch<ISocketContextAction>;
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContext,
    SocketDispatch: () => {},
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;

