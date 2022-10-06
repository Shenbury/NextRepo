import { createContext } from 'react';
import { IUserContext } from '../interfaces/IUserContext';

const currentUserContext : IUserContext = {
    user: {},
    username: ''
}

export const UserContext = createContext(currentUserContext);