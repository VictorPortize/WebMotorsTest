import React from 'react'
import {StyleSheet, View, Dimensions, TouchableNativeFeedback} from 'react-native'
import {Icon} from 'react-native-elements'
import navigator from '../utils/navigationService'


let {width,height} = Dimensions.get('window')

export default props => (
    <TouchableNativeFeedback  onPress={() => navigator.goTo(props.to)}>
        <View>
                <Icon color={'white'} underlayColor={'transparent'} type={'ionicon'} name={props.name} size={width*0.08} containerStyle={styles.iconStyle} ></Icon>
        </View>
    </TouchableNativeFeedback>

)

const styles = StyleSheet.create({
    iconStyle:{
        alignSelf:'center',
        marginRight:width*0.05,
        marginLeft:width*0.05,
    }
})