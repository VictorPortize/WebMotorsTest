import React from 'react'
import {ScrollView, Image, FlatList,View, StyleSheet,Dimensions, Text} from 'react-native'
import {connect} from 'react-redux'
import VehicleCard from '../../components/VehicleCard'

let {width,height} = Dimensions.get('window')

class VehicleList extends React.Component{

    render(){
        return(
            <ScrollView>
                <Image style={styles.imageStyle} source={require('../../images/logo-webmotors.png')}></Image>
                <FlatList data={this.props.vehicles} keyExtractor={(item,index) => index.toString()} maxToRenderPerBatch={10} initialNumToRender={10}  renderItem={(item) => <VehicleCard value={item.item} />} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        width:width*0.8,
        height:height*0.15,
        marginTop:height*0.05,
        resizeMode:'contain',
        alignSelf:'center'
    }
})

const mapStateToProps = state => ({vehicles : state.allVehicles})

export default connect(mapStateToProps,null)(VehicleList)