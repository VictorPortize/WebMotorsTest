import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Request, RequestModel, RequestVersion,RequestAllVehicles} from '../../utils/connect'
import {saveMakers,saveModel,saveVehicles,saveVersion} from '../../redux/actions/vehicleActions'
import {StyleSheet, View, ActivityIndicator, Dimensions, Alert,Text} from 'react-native';

let {width,height} = Dimensions.get('window')

class Initial extends Component{
    
    
    async componentDidMount(){
        try{
            let rest = await Request('/api/OnlineChallenge/Make')
            this.props.saveMakers(rest)
            let rest2 = await RequestModel('/api/OnlineChallenge/Model?MakeID=',rest)
            this.props.saveModel(rest2)
            let rest3 = await RequestVersion('/api/onlineChallenge/Version?ModelID=',rest2)
            this.props.saveVersion(rest3)
            let rest4 = await RequestAllVehicles('/api/OnlineChallenge/Vehicles?Page=',['1','2','3'])
            this.props.saveVehicles(rest4)
            this.props.navigation.replace('VehicleList')
        }catch(error){
            Alert.alert('Erro ao carregar dados','Erro ao se conectar ao servidor',[{text:"Fechar"},{text:"Tentar Novamente",onPress:() => this.componentDidMount()}])
        }
    }


    render() {
        return (
        <View style={styles.container}>
            <ActivityIndicator  size={width*0.4} color={'darkred'}></ActivityIndicator>
            <Text>Carregando dados do servidor...</Text>
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