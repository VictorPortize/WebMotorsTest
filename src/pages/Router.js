import {createAppContainer, createStackNavigator} from 'react-navigation'
import Initial from './initial/initial'

const Router = createStackNavigator({
    Initial,
},{
    defaultNavigationOptions:{
        header:null
    }
})


export default createAppContainer(Router)