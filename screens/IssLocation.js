import React, { Component } from 'react';
import { Text, View,ImageBackground,SafeAreaView,StatusBar,StyleSheet, Alert } from 'react-native';
import {MapView,Marker }from 'react-native maps'
export default class IssLocationScreen extends Component {
    getISSLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({location:response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render() {
        return (
            <View
                style={{
                    styles.container
                }}>
                    <SafeAreaView style={styles.SafeAreaView}/>
                    <ImageBackground source ={require('../assets/bg.png')}>
                        <View style ={styles.TileContainer}>
                            
                    
                <Text>ISS Location Screen!</Text>
                </View>
                <View style={styles.MapContainer}>
                    <MapView></MapView>
            </View>
            </ImageBackground>
            </View>
        )
    }
}

