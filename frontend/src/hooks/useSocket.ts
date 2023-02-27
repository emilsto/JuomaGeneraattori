import { useRef, useEffect } from 'react';
import io, { ManagerOptions, SocketOptions, Socket } from 'socket.io-client';

export const useSocket = (uri: string, opts?: Partial<ManagerOptions & SocketOptions> | undefined
    ): Socket => {
    const {} = useRef(io('http://localhost:1337'));

    const { current: socket } = useRef(io(uri, opts));

    useEffect(() => {
      return () => {
        if (socket) socket.close();
      };
    }, [socket]);

    return socket;
};