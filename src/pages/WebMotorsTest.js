import React from 'react'
import Router from '../pages/Router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import vehicleReducer from '../redux/reducers/vehicleReducer'
import NavigationService from '../utils/navigationService'

const store = createStore(vehicleReducer)

export default class WebMotorsTest extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router ref={ref => {NavigationService.setTopLevelNavigator(ref)}} />
            </Provider>
        )
    }
}