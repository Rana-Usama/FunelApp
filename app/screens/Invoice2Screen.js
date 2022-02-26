import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function Invoice2Screen(props) {

    const data = [
        {
            title: 'From',
            field1: 'Jhon',
            field2: 'Ally',
            field3: 'Anna'
        },
        {
            title: 'ID',
            field1: '011',
            field2: '022',
            field3: '033',
        },
        {
            title: 'Desect From',
            field1: 'Canada',
            field2: 'England',
            field3: 'Australia'
        },
        {
            title: 'Rdee',
            field1: '$.3',
            field2: '$.4',
            field3: '$.5'
        },
        {
            title: 'QTY',
            field1: '1000',
            field2: '1000',
            field3: '2000'
        },
        {
            title: 'Total',
            field1: '200$',
            field2: '200$',
            field3: '200$'
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

            <View style={{ width: RFPercentage(20), height: RFPercentage(6), marginTop: RFPercentage(-22), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(3.5) }}>
                    Invoices
                </Text>
            </View>

            {/* Data Container */}
            <ImageBackground style={{ marginTop: RFPercentage(1), width: '100%', height: RFPercentage(40), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../../assets/images/lead.png')} >

                <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(2) }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {/* Second table data */}
                        <ScrollView horizontal={true} >
                            <View style={{ marginTop: RFPercentage(5), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                {
                                    data.map((item, i) => (
                                        <View key={i} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: !i == 0 ? RFPercentage(1) : RFPercentage(2) }}>
                                            <View style={{ width: i == 1 ? RFPercentage(6) : RFPercentage(10), height: RFPercentage(4), borderRadius: RFPercentage(10), backgroundColor: !i == 0 ? Colors.green : Colors.darkRed, justifyContent: 'center', alignItems: 'center' }} >
                                                <Text style={{ color: Colors.white, fontSize: i == 2 ? RFPercentage(1.6) : RFPercentage(2.1) }}>
                                                    {item.title}
                                                </Text>
                                            </View>

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
                                    ))
                                }
                            </View>
                        </ScrollView>

                    </View>
                </ScrollView>
            </ImageBackground>

            {/* Bottom Tab */}
            <BottomTab />
        </View>
    );
}

export default Invoice2Screen;