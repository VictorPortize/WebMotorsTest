import React from 'react'
import {ScrollView, Image, ListView,View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import VehicleCard from '../../components/VehicleCard'


class VehicleList extends React.Component{
    render(){
        return(
            <ScrollView>
                <Image></Image>
                {this.props.vehicles.map((value,index) => <View key={index}>
                    <VehicleCard value={value}></VehicleCard>
                </View>)}
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({vehicles : state.allVehicles})

export default connect(mapStateToProps,null)(VehicleList)