import React from 'react'
import Router from '../pages/Router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import vehicleReducer from '../redux/reducers/vehicleReducer'

const store = createStore(vehicleReducer)

export default class WebMotorsTest extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}