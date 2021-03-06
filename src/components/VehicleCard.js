import React from 'react'
import {View, Image, Text,StyleSheet,Dimensions,TouchableNativeFeedback} from 'react-native'
import navigator from '../utils/navigationService'
import {connect} from 'react-redux'
import {setSelect} from '../redux/actions/vehicleActions'
import RF from 'react-native-responsive-fontsize'

let {width, height} = Dimensions.get('window')

export default connect(null,{setSelect})( props => {
    return(<View>
            <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{uri:props.value.Image }} ></Image>
            <TouchableNativeFeedback onPress={(() => {
                props.setSelect(props.value)
                navigator.goTo('VehicleDetails')
            })}>
                <View>
                    <Text style={styles.priceStyle}>{`R$:${props.value.Price}`}</Text>
                    <View style={styles.detailsStyle}>
                        <Text style={styles.nameStyle}>{`${props.value.Make} ${props.value.Model}`}</Text>
                        <Text style={{fontSize:RF(3)}}>{`${props.value.Version}`}</Text>
                        <Text style={{fontSize:RF(2)}}>
                        <Text style={{fontWeight:'bold',color:'black'}}>COR: <Text style={{color:'gray'}}>{`${props.value.Color}  `}</Text></Text> 
                        <Text style={{fontWeight:'bold',color:'black'}}>FAB: <Text style={{color:'gray'}}>{`${props.value.YearFab}  `}</Text></Text> 
                        <Text style={{fontWeight:'bold',color:'black'}}>MODEL: <Text style={{color:'gray'}}>{`${props.value.YearModel}  `}</Text></Text></Text>
                        <Text style={{fontSize:RF(3)}}>{`KM: ${props.value.KM}`}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    </View>)
})

const styles = StyleSheet.create({
    imageStyle:{
        width:width*0.9,
        height:height*0.4,
        resizeMode:'contain',
        alignSelf:'center',
    },
    containerStyle:{
        borderWidth:2,
        borderColor:'rgba(145,145,145,0.5)',
        borderRadius:5,
        elevation:4,
        width:width*0.95,
        alignSelf:'center',
        marginTop:width*0.05
    },
    priceStyle:{
        fontSize:RF(5),
        fontWeight:'bold',
        color:'gray',
        alignSelf:'center',
    },
    detailsStyle:{
        borderTopColor:'rgba(145,145,145,0.3)',
        borderTopWidth:2,
        backgroundColor: "rgba(145,145,145,0.05)",
        paddingLeft:width*0.05
    },
    nameStyle:{
        fontSize:RF(4),
        fontWeight:'bold',
        color:'black'
    },

})