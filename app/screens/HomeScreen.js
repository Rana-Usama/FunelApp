import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const firstRowData = [
        {
            iconSource: require('../../assets/images/home.png'),
            title: 'Home Page'
        },
        {
            iconSource: require('../../assets/images/account.png'),
            onPress: "CreateTicketScreen",
            title: 'Account'
        },
        {
            iconSource: require('../../assets/images/music.png'),
            title: 'Support'
        },
    ]

    const secondRowData = [
        {
            iconSource: require('../../assets/images/dollor.png'),
            onPress: "Invoice2Screen",
            title: 'Invoice'
        },
        {
            iconSource: require('../../assets/images/logout.png'),
            onPress: "LoginScreen",
            title: 'Logout'
        },
        {
            iconSource: require('../../assets/images/finance.png'),
            onPress: "ViewLeadsScreen",
            title: 'View Leads'
        },
    ]


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(21), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(3), width: '86%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <View>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8) }} >
                            Hi
                        </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: RFPercentage(1), color: Colors.white, fontSize: RFPercentage(2.8) }}>
                            Patrick
                        </Text>
                    </View>

                    {/* Nav right icons */}
                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }} >
                        {/* message */}
                        <TouchableOpacity activeOpacity={0.8}>
                            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(5.5), height: RFPercentage(5.5) }} source={require('../../assets/images/circle.png')}>
                                <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5) }} source={require('../../assets/images/message.png')} />
                            </ImageBackground>
                        </TouchableOpacity>
                        {/* settings */}
                        <TouchableOpacity onPress={() => props.navigation.navigate("SupportTicket")} activeOpacity={0.8} style={{ marginLeft: RFPercentage(1) }}>
                            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(5.5), height: RFPercentage(5.5) }} source={require('../../assets/images/circle.png')}>
                                <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.7) }} source={require('../../assets/images/settings.png')} />
                            </ImageBackground>
                        </TouchableOpacity>
                        {/* user */}
                        <TouchableOpacity onPress={() => props.navigation.navigate("SettingsScreen")} activeOpacity={0.8} style={{ marginLeft: RFPercentage(1) }}>
                            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/circle.png')}>
                                <Image style={{ width: RFPercentage(6.5), height: RFPercentage(6.5) }} source={require('../../assets/images/user.png')} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Pink Shade */}
            <Image style={{ width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/pinkshade.png')} />

            {/* First row icons */}
            <View style={{ width: '90%', marginTop: RFPercentage(-10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                {
                    firstRowData.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: !i == 0 ? RFPercentage(4) : 0 }} >
                            <ImageBackground style={{ width: RFPercentage(11), height: RFPercentage(11), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/box.png')}>
                                <TouchableOpacity onPress={() => props.navigation.navigate(item.onPress)} activeOpacity={0.5}>
                                    <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={item.iconSource} />
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text style={{ marginTop: RFPercentage(0.3), color: Colors.white, fontSize: RFPercentage(2.2) }}>
                                {item.title}
                            </Text>
                        </View>
                    ))
                }
            </View>

            {/* second row icons */}
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(5) }} >
                {
                    secondRowData.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: !i == 0 ? RFPercentage(4) : 0 }} >
                            <ImageBackground style={{ width: RFPercentage(11), height: RFPercentage(11), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/box.png')}>
                                <TouchableOpacity onPress={() => props.navigation.navigate(item.onPress)} activeOpacity={0.5}>
                                    <Image style={{ width: i == 2 ? RFPercentage(7) : RFPercentage(5), height: i == 2 ? RFPercentage(5) : RFPercentage(5) }} source={item.iconSource} />
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text style={{ marginTop: RFPercentage(0.3), color: Colors.white, fontSize: RFPercentage(2.2) }}>
                                {item.title}
                            </Text>
                        </View>
                    ))
                }
            </View>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default HomeScreen;