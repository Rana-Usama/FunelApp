import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

function BottomTab({ props }) {
    return (
        <ImageBackground style={{ width: '100%', height: RFPercentage(20), position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} source={require('../../../assets/images/bottomtab.png')}>

            <View style={{ width: '70%', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.9} style={{ position: 'absolute', bottom: 0 }}>
                    <ImageBackground style={{ width: RFPercentage(15), height: RFPercentage(13), justifyContent: 'center', alignItems: 'center' }} source={require('../../../assets/images/bc.png')}>
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require('../../../assets/images/home.png')} />
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{ position: "absolute", left: RFPercentage(0.8), bottom: RFPercentage(3) }}>
                    <Image style={{ width: RFPercentage(3.2), height: RFPercentage(4) }} source={require('../../../assets/images/pre.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ChatScreen")} activeOpacity={0.5} style={{ position: "absolute", right: RFPercentage(0.8), bottom: RFPercentage(3) }}>
                    <Image style={{ width: RFPercentage(3.2), height: RFPercentage(4) }} source={require('../../../assets/images/for.png')} />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

export default BottomTab;