import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import { NativeRouter, Route, Link } from 'react-router-native'
import { Button } from 'react-native-elements';

import common from '../../../styles/Theme.js';

const UserInfo = (props) => { 
    
    const { 
        username, 
        picture,
        navigation
    } = props

    return (
        <View style={styles.container}>
            <Image
                style={styles.userImage}
                source={{url: picture}}
                resizeMode='contain'
            />
            <Text style={styles.userNameText}> @{username} </Text>
            <Button 
                buttonStyle={styles.button} 
                containerViewStyle={{ paddingTop: 5 }}                                                 
                backgroundColor= {common.mainColor}
                title='QR Code'
                iconRight={{name: 'nfc'}}
                fontWeight='bold'
                fontSize={14}
                onPress={() => navigation.navigate("QRModal")}/> 
            <Button 
                buttonStyle={styles.button} 
                containerViewStyle={{ paddingTop: 5 }}                                                 
                backgroundColor= {common.mainColor}
                title='Edit Profile'
                fontWeight='bold'
                fontSize={14}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userImage: {
        width: 100,
        height: 100,
    },
    userNameText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
    },
    button: {
        height: 30,
    }
});

export default UserInfo