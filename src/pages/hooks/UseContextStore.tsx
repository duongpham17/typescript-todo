import {createContext} from 'react';

//typeof will infer the types inside initalState

const InitalState = {
    firstname: "",
    lastname: "",
};

export type InitalStateProps = typeof InitalState;

export const context = createContext<InitalStateProps>(InitalState);

export default context;