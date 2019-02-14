import React from 'react'
import {StyleSheet, View, Dimension} from 'react-native'
import {List} from 'react-native-paper'
import constructObject from '../../utils/constructObject'
import {connect} from 'react-redux'

const mapStateToProps = state => ({vehicle : state})

export default connect(mapStateToProps,null)(props => {
    let data = props.vehicle
    let id1 = constructObject(1,data.makers,data.models.data.versions)
    let id2 = constructObject(2,data.makers,data.models.data.versions)
    let id3 = constructObject(3,data.makers,data.models.data.versions)
    console.log('__________________________')
    console.log(id1)
    console.log('__________________________')
    console.log(id2)
    console.log('__________________________')
    console.log(id3)
    console.log('__________________________')

    return (
    <View>

    </View>)
})