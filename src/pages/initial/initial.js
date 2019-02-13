import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Request, RequestModel, RequestVersion,RequestAllVehicles} from '../../utils/connect'
import {saveMakers,saveModel,saveVehicles,saveVersion} from '../../redux/actions/vehicleActions'
import {StyleSheet, View, ActivityIndicator, Dimensions} from 'react-native';

let {width,height} = Dimensions.get('window')

class Initial extends Component{
    
    
    async componentDidMount(){
        let rest = await Request('/api/OnlineChallenge/Make')
        this.props.saveMakers(rest)
        let rest2 = await RequestModel('/api/OnlineChallenge/Model?MakeID=',rest[0].ID.toString())
        this.props.saveModel(rest2)
        let rest3 = await RequestModel('/api/OnlineChallenge/Model?MakeID=',rest[1].ID.toString())
        this.props.saveModel(rest3)
        let rest4 = await RequestModel('/api/OnlineChallenge/Model?MakeID=',rest[2].ID.toString())
        this.props.saveModel(rest4)
        let rest5 = await RequestVersion('/api/onlineChallenge/Version?ModelID=',this.props.vehicle.models[0][0].ID.toString())
        this.props.saveVersion(rest5)
        let rest6 = await RequestVersion('/api/onlineChallenge/Version?ModelID=',this.props.vehicle.models[0][1].ID.toString()) 
        this.props.saveVersion(rest6)
        let rest7 = await RequestVersion('/api/onlineChallenge/Version?ModelID=',this.props.vehicle.models[0][2].ID.toString()) 
        this.props.saveVersion(rest7)
        let rest8 = await RequestAllVehicles('/api/OnlineChallenge/Vehicles?Page=',['1','2','3']).then(respost => {
            console.log(respost)
        })
    }


    render() {
        return (
        <View style={styles.container}>
            <ActivityIndicator  size={width*0.4} color={'darkred'}></ActivityIndicator>
        </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = state => ({vehicle : state})

export default connect(mapStateToProps,{saveMakers,saveModel,saveVehicles,saveVersion})(Initial)