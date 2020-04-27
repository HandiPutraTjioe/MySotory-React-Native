import React, { Component } from 'react';
import { View } from 'react-native';
import { CardItem, Content, Card, Thumbnail, Text } from 'native-base';

const dataAtas = [
    {
        nama: "Your Story",
        gambar: "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Richard",
        gambar: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Luis Alex",
        gambar: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Alexander",
        gambar: "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Gilbert",
        gambar: " https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Margareta",
        gambar: "https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Nico",
        gambar: "https://images.pexels.com/photos/2260030/pexels-photo-2260030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
]

export default class Atas extends Component{
    render(){
        return(
            <Content horizontal>
                {dataAtas.map((data, index)=> {
                    return(
                        <Card key={index} style={{ height: 110 }} transparent>
                            <CardItem style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                <Thumbnail source={{ uri: data.gambar }} />
                                <Text>{data.nama}</Text>
                            </CardItem>                    
                        </Card>
                    )
                })}
            </Content>
        )
    }
}