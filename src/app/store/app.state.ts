import { createReducer, createAction, on } from '@ngrx/store';


export interface IAppState {
    atributo: string;
}

export const appInitialState: IAppState = {
    atributo: 'Escolha uma Palavra'
}

export const choosedWord = createAction('[App] Muda Palavra Traduzida')

export const appReducer = createReducer(
    appInitialState,
    on(choosedWord, (state) => {
        state = {
            ...state, 
            atributo: state.atributo
        }
        return state
    })
)