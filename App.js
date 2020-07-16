import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { NavigationContainer } from '@react-navigation/native';

import Search from './Search';

import { reducer } from './reducer'
import { searchSaga } from './sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(searchSaga)

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                <Search />
                </NavigationContainer>
            </Provider>)

    }
}

export default App