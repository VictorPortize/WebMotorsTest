import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions,} from 'react-native'
import RF from 'react-native-responsive-fontsize'
import {connect} from 'react-redux'

let {width, height} = Dimensions.get('window')


class VehicleDetails extends React.Component{

    componentDidMount(){
        this.props.navigation.setParams({name:this.props.vehicle.Version})
    }

    render(){
        return(<View>
                <View style={styles.containerStyle}>
                    <Image style={styles.imageStyle} source={{uri:this.props.vehicle.Image }} ></Image>
                    <Text style={styles.priceStyle}>{`R$:${this.props.vehicle.Price}`}</Text>
                    <View style={styles.detailsStyle}>
                        <Text style={styles.nameStyle}>{`${this.props.vehicle.Make} ${this.props.vehicle.Model}`}</Text>
                        <Text style={{fontSize:RF(3)}}>{`${this.props.vehicle.Version}`}</Text>
                        <Text style={{fontSize:RF(2)}}>
                        <Text style={{fontWeight:'bold'}}>COR: </Text> {`${this.props.vehicle.Color}`}
                        <Text style={{fontWeight:'bold'}}>  FAB: </Text> {`${this.props.vehicle.YearFab}`}
                        <Text style={{fontWeight:'bold'}}>  MODEL: </Text>{`${this.props.vehicle.YearModel}`}</Text>
                        <Text style={{fontSize:RF(3)}}>{`KM: ${this.props.vehicle.KM}`}</Text>
                    </View>
                </View>
        </View>)
    }
}

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
        width:width*0.95,
        alignSelf:'center',
        marginTop:width*0.05
    },
    priceStyle:{
        fontSize:RF(5),
        fontWeight:'bold',
        color:'gray',
        paddingLeft:width*0.05

    },
    detailsStyle:{
        borderTopColor:'rgba(145,145,145,0.3)',
        borderTopWidth:2,
        backgroundColor: "rgba(145,145,145,0.05)",
        paddingLeft:width*0.05
    },
    nameStyle:{
        fontSize:RF(4),
        fontWeight:'bold'
    },

})

const mapStateToProps = state => ({ vehicle : state.select})

export default connect(mapStateToProps,null)(VehicleDetails)