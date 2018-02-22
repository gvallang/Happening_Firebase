import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';


import common from '../../../styles/Theme.js';

const EventCard = (props) => { 

    const {
        name, 
        date, 
        time, 
        location, 
        picture, 
        numGuest, 
        admin 
    } = props

    return (

        // Made a custom edit on Card component in node_modules/react-native-elemets. 
        // Changed line 79 resizeMode from 'cover' -> 'contain'
        <Card
            style={styles.eventCard}
            image={{ uri: picture }}
            imageWrapperStyle={{padding: 5}}
            imageStyle={{height: 250}}>
            <View>
                <View> 
                    <Text style={styles.eventTitle}> {name} </Text>
                    <Text style={styles.eventSubtitle}> {date} @ {time} </Text>
                    <Text style={styles.eventSubtitle}> {location} </Text>
                    <Text style={styles.eventSubtitle}> {numGuest} attendees </Text> 
                    {admin && 
                        <View style={styles.eventButtonContainer}> 
                            <Button 
                                buttonStyle={styles.eventButton}
                                backgroundColor={common.mainColor}
                                title='Scan Code'
                                iconRight={{name: 'nfc'}}
                                fontSize={14}/>
                            <Button 
                                buttonStyle={styles.eventButton}                                        
                                backgroundColor= {common.mainColor}
                                title='See Guests'
                                iconRight={{name: 'recent-actors'}}
                                fontSize={14}/>                                
                        </View>
                    }
                </View>
            </View>
        </Card>
    )
}

EventCard.defaultProps = {
    admin: false
}

const styles = StyleSheet.create({
    eventTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        // color: common.primaryTextColor
    },
    eventSubtitle: {
        fontSize: 14,
        // color: common.primaryTextColor        
    },
    eventButtonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        paddingTop: 10
    },
    eventButton: {
        height: 35
    }
});

export default EventCard