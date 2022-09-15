import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import SplashLogo from '../../assets/splashLogo.svg';

import {
    Container
} from './styles';

export function Splash(){
    return (
        <Container>
            <SplashLogo 
                width={RFValue(120)}
                height={RFValue(68)}
            />
        </Container>
    );
}