import {createAppContainer, createStackNavigator} from 'react-navigation'
import React from 'react'
import {Dimensions} from 'react-native'
import IconHeader from '../components/IconHeader'
import Initial from './initial/initial'
import FindPage from './vehicles/FindPage'
import VehicleDetails from './vehicles/VehicleDetails'
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
                paddingLeft:width*0.05
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
            headerLeft:(<IconHeader name={'ios-arrow-round-back'} to={'VehicleList'} ></IconHeader>),
            headerTitle:"Lista de Veículos",
            headerTitleStyle:{
                fontSize:RF(3.2),
                color:'white',
                marginLeft:width*0.045
            },
        }
    },
    VehicleDetails:{
        screen:VehicleDetails,
        navigationOptions : ({ navigation }) => {
            return {
            headerStyle: {
                backgroundColor: '#c70f33',
                height:height*0.1,
                elevation:5,
            },
            headerLeft:(<IconHeader name={'ios-arrow-round-back'} to={'VehicleList'} ></IconHeader>),
            headerTitleStyle:{
                fontSize:RF(3.2),
                color:'white',
                marginLeft:width*0.045
            },
            title: navigation.getParam('name', 'version'),
            }
        }
    }
},{
    initialRouteName:"Initial",
    navigationOptions:{
    }
})


export default createAppContainer(Router)