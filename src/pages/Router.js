import {createAppContainer, createStackNavigator} from 'react-navigation'
import React from 'react'
import {Dimensions} from 'react-native'
import IconHeader from '../components/IconHeader'
import Initial from './initial/initial'
import FindPage from './vehicles/FindPage'
import VehicleList from './vehicles/VehicleList'
import RF from 'react-native-responsive-fontsize'

let {width,height} = Dimensions.get('window')

const Router = createStackNavigator({
    Initial:{
        screen:Initial,
        navigationOptions:{
            header:null
        }
    },
    VehicleList:{
        screen:VehicleList,
        navigationOptions:{
            title:'Revendedor',
            headerStyle: {
                backgroundColor: '#c70f33',
                height:height*0.1,
                elevation:5
            },
            headerTitleStyle:{
                fontSize:RF(3.2),
                color:'white',
            },
            headerRight:(<IconHeader name={'ios-search'} to={'FindPage'} ></IconHeader>)
        }
    },
    FindPage:{
        screen:FindPage,
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#c70f33',
                height:height*0.1,
                elevation:5,
            },
            headerLeft:(<IconHeader name={'ios-arrow-round-back'} to={'VehicleList'} ></IconHeader>)
        }
    }
},{
    initialRouteName:"Initial",
    navigationOptions:{
    }
})


export default createAppContainer(Router)