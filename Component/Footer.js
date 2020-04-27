import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class Footers extends Component{
    render(){
        return(
            <Footer>
                <FooterTab style={{ backgroundColor: "white" }}>
                    <Button>
                        <Icon name="home" />
                    </Button>
                    <Button>
                        <Icon name="search" />
                    </Button>
                    <Button>
                        <Icon name="camera" />
                    </Button>
                    <Button>
                        <Icon name="heart" />
                    </Button>
                    <Button>
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}