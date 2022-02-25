import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import { TextInput } from 'react-native-gesture-handler';

function SupportTicket(props) {


    const firstColumnData = [
        {
            no: '1'
        },
        {
            no: '2'
        },
        {
            no: '3'
        },
        {
            no: '4'
        },
    ]

    const secondColumnData = [
        {
            title: 'Project manager is not working properlly'
        },
        {
            title: 'My tool is not working properly'
        },
        {
            title: 'Tool not working'
        },
        {
            title: 'Tool not working'
        },
    ]

    const thirdColumnData = [
        {
            title: 'Hold',
        },
        {
            title: 'Hold',
        },
        {
            title: 'Open',
        },
        {
            title: 'Hold',
        },
    ]

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(21), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(3), width: '86%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.5) }} source={require('../../assets/images/noti.png')} />
                    </TouchableOpacity>
                    {/* Nav right icons */}
                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }} >
                        {/* user */}
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(1) }}>
                            <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/user.png')} />
                        </TouchableOpacity>
                        {/* DropDown */}
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2) }}>
                            <Image style={{ width: RFPercentage(5.5), height: RFPercentage(5.5) }} source={require('../../assets/images/drop.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Pink Shade */}
            <Image style={{ width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/pinkshade.png')} />

            <View style={{ width: RFPercentage(22), height: RFPercentage(6), marginTop: RFPercentage(-22), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(3) }}>
                    Support Ticket
                </Text>
            </View>

            <View style={{ width: '98%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: RFPercentage(-1) }} >
                <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(5), width: RFPercentage(16), height: RFPercentage(4.8), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(10) }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }} >
                        + Create Ticket
                    </Text>
                </TouchableOpacity>
                {/* Search input field */}
                <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(5), width: RFPercentage(18), height: RFPercentage(4.8), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(10), marginLeft: RFPercentage(1) }} >
                    <FontAwesome name="search" style={{ fontSize: RFPercentage(2.5), marginLeft: RFPercentage(2) }} color={Colors.white} />
                    <TextInput placeholder='Search' placeholderTextColor={Colors.white} style={{ width: '100%', marginLeft: RFPercentage(1), color: Colors.white }} />
                </TouchableOpacity>
            </View>

            {/* Data Container */}
            <ImageBackground style={{ marginTop: RFPercentage(0.8), width: '100%', height: RFPercentage(40), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../../assets/images/lead.png')} >

                <ScrollView horizontal={true} style={{ marginTop: RFPercentage(-12) }} >
                    <View style={{ flexDirection: 'row', width: '96%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >


                        {/* First Column */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(6) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    S.No
                                </Text>
                            </ImageBackground>

                            {firstColumnData.map((item, i) => (
                                <Text key={i} style={{ color: Colors.white, fontSize: RFPercentage(1.8), marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2) }} >
                                    {item.no}
                                </Text>
                            ))}

                        </View>

                        {/* Second Column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(1) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Subject
                                </Text>
                            </ImageBackground>
                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                                {secondColumnData.map((item, i) => (
                                    <Text key={i} style={{ color: Colors.white, fontSize: RFPercentage(1.8), marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2) }} >
                                        {item.title}
                                    </Text>
                                ))}

                            </View>
                        </View>

                        {/* Third Column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(1) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Status
                                </Text>
                            </ImageBackground>


                            {thirdColumnData.map((item, i) => (

                                <View key={i} style={{ justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(1.2), backgroundColor: i == 2 ? "#AC7C9C" : Colors.darkRed, width: RFPercentage(12), height: RFPercentage(4), marginTop: i == 0 ? RFPercentage(1) : RFPercentage(0.3) }} >
                                    <Text style={{ color: Colors.white }} >
                                        {item.title}
                                    </Text>
                                </View>
                            ))}

                        </View>

                    </View>
                </ScrollView>

            </ImageBackground>

            {/* Bottom Tab */}
            <BottomTab />
        </View>
    );
}

export default SupportTicket;