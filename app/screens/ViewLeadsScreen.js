import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ViewLeadsScreen(props) {

    const data = [
        {
            title: 'Name',
            field1: 'Jhon',
            field2: 'Ally',
            field3: 'Anna'
        },
        {
            title: 'Comapny',
            field1: 'xyz',
            field2: 'xyz',
            field3: 'xyz'
        },
        {
            title: 'Country',
            field1: 'Canada',
            field2: 'England',
            field3: 'Australia'
        },
        {
            title: 'Email',
            field1: 'Jhon@123',
            field2: 'Ally@123',
            field3: 'Anna@123'
        },
        {
            title: 'Phone',
            field1: '123-26387-273',
            field2: '123-288387-273',
            field3: '673-26387-043'
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
                        {/* user */}
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2) }}>
                            <Image style={{ width: RFPercentage(5.5), height: RFPercentage(5.5) }} source={require('../../assets/images/drop.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Pink Shade */}
            <Image style={{ width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/pinkshade.png')} />

            <View style={{ width: RFPercentage(20), height: RFPercentage(6), marginTop: RFPercentage(-20), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(3.5) }}>
                    Leads
                </Text>
            </View>

            {/* date */}
            <View style={{ marginTop: RFPercentage(2), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }} >
                    Date
                </Text>
                <View style={{ marginLeft: RFPercentage(1), backgroundColor: Colors.darkRed, width: RFPercentage(12), height: RFPercentage(3), borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: RFPercentage(1.8), color: Colors.white }} >
                        20-12-2022
                    </Text>
                </View>
            </View>

            {/* Data Container */}
            <ImageBackground style={{ marginTop: RFPercentage(1.5), width: '100%', height: RFPercentage(34), justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row' }} source={require('../../assets/images/lead.png')} >

                <View style={{ marginTop: RFPercentage(5), width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                    {
                        data.map((item, i) => (
                            <View key={i} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: !i == 0 ? RFPercentage(0.5) : 0 }}>
                                <ImageBackground style={{ width: RFPercentage(10), height: RFPercentage(4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                        {item.title}
                                    </Text>
                                </ImageBackground>

                                <ScrollView style={{ flex: 1, width: '100%' }} >
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), marginTop: RFPercentage(6) }}>
                                            {item.field1}
                                        </Text>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), marginTop: RFPercentage(3) }}>
                                            {item.field2}
                                        </Text>
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), marginTop: RFPercentage(3) }}>
                                            {item.field3}
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        ))
                    }
                </View>
            </ImageBackground>

            {/* Bottom Tab */}
            <BottomTab />
        </View>
    );
}

export default ViewLeadsScreen;