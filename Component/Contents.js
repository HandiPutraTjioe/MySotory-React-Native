import React, { Component } from 'react';
import { Content, Card, Left, Right, Body, Text, Icon, CardItem, Thumbnail } from 'native-base';
import { Image } from 'react-native';

export default class ContentLayout extends Component{
    render(){
        return(
            <Content>
            <Card>
            <CardItem>
            <Left>
            <Thumbnail source={{ uri: "https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}/>
            <Body>
            <Text>HandiZhou</Text>
            <Text>United Kingdom, UK</Text>
            </Body>
            </Left>
            <Right>
            <Icon name="more" />
            </Right>
            </CardItem>
            
            <CardItem cardBody>
            <Image source={{ uri: "https://images.pexels.com/photos/2260030/pexels-photo-2260030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} 
            style={{ height: 200, flex: 1 }} />
            </CardItem>
            
            <CardItem >
            <Icon name="heart" />
            <Icon name="text" />
            <Icon name="paper-plane" />
            </CardItem>
            
            <CardItem>
            <Left>
            <Icon name="heart" />
            <Text> 5 Likes </Text>
            </Left>
            </CardItem>

            <CardItem>
            <Text>Sea is a smaller part of an ocean and is typically partially contained by an area of land. 
            Therefore, all seas are found in areas where the ocean and land meet.</Text>
            </CardItem>

            </Card>
            </Content>
        );
    }
}