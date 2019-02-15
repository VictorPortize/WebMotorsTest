import React from 'react'
import {StyleSheet, Text, Dimensions,ScrollView} from 'react-native'
import {List} from 'react-native-paper'
import RF from 'react-native-responsive-fontsize'
import constructObject from '../../utils/constructObject'
import {connect} from 'react-redux'
import {setSelect} from '../../redux/actions/vehicleActions'

const mapStateToProps = state => ({vehicle : state})

let {width,height} = Dimensions.get('window')

export default connect(mapStateToProps,{setSelect})(props => {
    let data = props.vehicle
    let id1 = constructObject(1,data.makers,data.models,data.versions)
    let id2 = constructObject(2,data.makers,data.models,data.versions)
    let id3 = constructObject(3,data.makers,data.models,data.versions)

    return (
    <ScrollView>
        <Text style={[styles.sectionStyle,{marginTop:height*0.03}]} >{id1.Name}</Text>
            {id1.itens.map(value => 
            <List.Accordion theme={{colors:{primary:"#c70f33"}}} key={value.ID} title={value.Name}>
                {value.versions.map(versions=>
                <List.Item key={versions.ID} title={versions.Name}>

                </List.Item> )}
            </List.Accordion>)}
        <Text style={[styles.sectionStyle,{marginTop:height*0.03}]} >{id2.Name}</Text>
            {id2.itens.map(value => 
            <List.Accordion theme={{colors:{primary:"#c70f33"}}} key={value.ID} title={value.Name}>
                {value.versions.map(versions=>
                <List.Item key={versions.ID} title={versions.Name}>

                </List.Item> )}
            </List.Accordion>)}
        <Text style={[styles.sectionStyle,{marginTop:height*0.03}]} >{id3.Name}</Text>
            {id3.itens.map(value => 
            <List.Accordion theme={{colors:{primary:"#c70f33"}}} key={value.ID} title={value.Name}>
                {value.versions.map(versions=>
                <List.Item key={versions.ID} title={versions.Name}>

                </List.Item> )}
            </List.Accordion>)}
    </ScrollView>)
})



const styles = StyleSheet.create({
    sectionStyle:{
        marginTop:height*0.01,
        backgroundColor:'rgba(199, 15, 51, 0.9)',
        fontSize:RF(3),
        color:'white',
        paddingLeft:width*0.05,
        borderRadius:5,
        alignSelf:'center',
        width:width*0.95,
        height:height*0.05,
    }
})