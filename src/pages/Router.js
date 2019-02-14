import {createAppContainer, createStackNavigator} from 'react-navigation'
import {Dimensions} from 'react-native'
import Initial from './initial/initial'
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
            }
        }
    }
},{
    initialRouteName:"Initial",
    // navigationOptions:{
    //     headerTitleStyle:{
    //         color
    //     }
    // }
})


export default createAppContainer(Router)