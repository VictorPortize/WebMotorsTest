import {StackActions,NavigationActions} from 'react-navigation'

/**
 * Função que realiza as navegações pelo app sem utilizar o Props das screens
 */

let _navigator

function setTopLevelNavigator(ref){
    _navigator = ref
}

function replace(routeName,params=null){
    _navigator.dispatch(
        StackActions.replace({
            routeName,
            params,
        })
    )
}

function goBack(){
    _navigator.dispatch(
        NavigationActions.back()
    )
}

function goTo(routeName){
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName
        })
    )
}

export default {replace,goBack,goTo,setTopLevelNavigator}