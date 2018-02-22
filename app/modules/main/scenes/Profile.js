import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
    Left,
    Right,
    Body
  } from 'native-base';

// 3rd party componenets
import Spinner from 'react-native-loading-spinner-overlay';

// styles
import common from '../../styles/common.js';

// custom components
import UserInfo from './UserInfo';
import EventCard from '../EventCard/EventCard';

// actions
import FetchUserData from '../../Actions/FetchUserData';
import FetchEventData from '../../Actions/FetchEventData';


class Profile extends Component {
    
    componentWillMount() {
        this.props.FetchUserData()
        this.props.FetchEventData()
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
        const { profile, event } = this.props; 

        if (profile.isFetching || event.isFetching) {
            return (
                <View>
                    <Spinner 
                        visible={profile.isFetching || event.isFetching}
                        textContent={'Loading...'}
                        textStyle={{color: common.primaryTextColor}}/>
                </View>
            )
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={styles.container}>
                    {this.renderUserProfile()}
                    <View style={styles.eventCardContainer}>
                        {this.renderEventCards()}
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    eventCardContainer: {
        paddingBottom: 50
    }
});

function mapStateToProps(state) {
    return { 
        profile: state.profile,
        event: state.event
    }
}

export default connect(mapStateToProps, { FetchUserData, FetchEventData })(Profile)