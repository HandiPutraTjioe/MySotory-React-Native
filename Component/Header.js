import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Text, Icon, Right } from 'native-base';

export default class HeaderContent extends Component{
    render(){
        return(
            <View>
                <Header style={{ backgroundColor: 'white'}}>
                    <Left>
                        <Icon name="camera" />
                    </Left>

                    <Body style={{ marginLeft: 113}}>
                        <Text>
                            MySotory
                        </Text>
                    </Body>

                    <Right>
                        <Icon name="paper-plane"/>
                    </Right>
                </Header>
            </View>
        );
    }
}