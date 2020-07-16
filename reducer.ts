import { Reducer } from "react"

export enum Actions {
    SearchQuery = "searchQuery",
    LoadComplete = "loadComplete"
}

type Action = {
    type: Actions,
    payload: any
}

export type State = {
    payload: string,
    loading: boolean,
    data: Array<any>
}

const defaultState: State = {
    payload: "",
    loading: false,
    data: []
}

export const reducer: Reducer<State> = (state = defaultState, action: Action) => {
    switch (action.type) {
        case Actions.SearchQuery:
            return { ...state, payload: action.payload, loading: true }
        case Actions.LoadComplete:
            return { ...state, loading: false, data: action.payload }
        default:
            return state
    }

}
