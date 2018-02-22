import React from 'react';
var { View, StyleSheet, Alert, ScrollView } = require('react-native');

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { color } from "../../../styles/Theme"

import { actions as auth } from "../../auth"
var { signOut } = auth;

import { actions as fetch } from "../"
var { fetchUserData } = fetch;
var { fetchEventData } = fetch;

//Components 
import UserInfo from '../components/ProfileUserInfo';
import EventCard from '../components/EventCard';


class Home extends React.Component {
    constructor(){
        super();
        this.state = { }
    }

    onSignOut() {
        this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
        Actions.Welcome()
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    componentWillMount() {
        this.props.fetchUserData
        // this.props.fetchEventData()
    }

    renderUserProfile() {
        const { profile } = this.props; 
        return profile.data.map((user) => 
            <UserInfo 
                key={user.email}
                username={user.login.username}
                picture={user.picture.medium}
                navigation={this.props.navigation}/>
        )
    }

    renderEventCards() {
        const { event } = this.props;
        return event.data.map((event) =>
            <EventCard 
                key={event.id}
                name={event.name}
                date={event.date}
                time={event.time}
                location={event.location}
                picture={event.pictureUrl}
                numGuest={event.numGuest}
                />
        )
    }

    render() {
        const { profile/*, event */} = this.props; 
        return (
            <View style={styles.container}>
                <Button
                    raised
                    title={'LOG OUT'}
                    borderRadius={4}
                    backgroundColor={color.main}
                    containerViewStyle={styles.buttonContainer}
                    buttonStyle={{}} //optional
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut.bind(this)}/>
                <ScrollView style={styles.container}>
                    {this.renderUserProfile()}
                    <View style={styles.eventCardContainer}>
                        {/*{this.renderEventCards()}*/}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user:  state.authReducer.user
    }
}

export default connect(mapStateToProps, { signOut })(Home);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },

    buttonContainer:{
        marginVertical:0, marginHorizontal:0
    },

    buttonText:{
        fontWeight:"500"
    }
});



