import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function Invoice2Screen(props) {

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
            title: '10 Feb 2022'
        },
        {
            title: '10 Feb 2022'
        },
        {
            title: '10 Feb 2022'
        },
        {
            title: '10 Feb 2022'
        },
    ]

    const thirdColumnData = [
        {
            title: '2022-10-78',
        },
        {
            title: '2022-10-78',
        },
        {
            title: '2022-10-78',
        },
        {
            title: '2022-10-78',
        },
    ]

    const fourthColumnData = [
        {
            title: '$266'
        },
        {
            title: '$22-5'
        },
        {
            title: '$22-8'
        },
        {
            title: '$22-9'
        },
    ]

    const fifthColumnData = [
        {
            title: '30 Nov 2022',
        },
        {
            title: '20 Feb 2022',
        },
        {
            title: '20 Feb 2022',
        },
        {
            title: '20 Feb 2022',
        },
    ]

    const sixthColumnData = [
        {
            title: 'Opriv Bla',
        },
        {
            title: 'Opriv Bla',
        },
        {
            title: 'Opriv Bla',
        },
        {
            title: 'Opriv Bla',
        },
    ]

    const sevenColumnData = [
        {
            title: 'Unpaid',
        },
        {
            title: 'Unpaid',
        },
        {
            title: 'Paid',
        },
        {
            title: 'Unpaid',
        },
    ]

    const eighthColumnData = [
        {
            title: 'View',
        },
        {
            title: 'View',
        },
        {
            title: 'View',
        },
        {
            title: 'View',
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
            <ImageBackground style={{ marginTop: RFPercentage(2), width: '100%', height: RFPercentage(40), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../../assets/images/lead.png')} >

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
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(0.5) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Date
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
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(0.5) }} >
                            <ImageBackground style={{ marginTop: RFPercentage(1), width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Number
                                </Text>
                            </ImageBackground>


                            {thirdColumnData.map((item, i) => (

                                <View key={i} style={{ justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(1.2), backgroundColor: i == 2 ? "#AC7C9C" : Colors.darkRed, width: RFPercentage(12), height: RFPercentage(4), marginTop: i == 0 ? RFPercentage(2) : RFPercentage(0.3) }} >
                                    <Text style={{ color: Colors.white }} >
                                        {item.title}
                                    </Text>
                                </View>
                            ))}

                        </View>

                        {/* Fourth column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(1) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Total
                                </Text>
                            </ImageBackground>
                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                                {fourthColumnData.map((item, i) => (
                                    <Text key={i} style={{ color: Colors.white, fontSize: RFPercentage(1.8), marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2) }} >
                                        {item.title}
                                    </Text>
                                ))}

                            </View>
                        </View>

                        {/* Fifth Column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(0.5) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Due Date
                                </Text>
                            </ImageBackground>

                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                                {fifthColumnData.map((item, i) => (
                                    <Text key={i} style={{ color: Colors.white, fontSize: RFPercentage(1.8), marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2) }} >
                                        {item.title}
                                    </Text>
                                ))}

                            </View>
                        </View>

                        {/* Sixth Column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(0.5) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Created By
                                </Text>
                            </ImageBackground>

                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                                {sixthColumnData.map((item, i) => (
                                    <Text key={i} style={{ color: Colors.white, fontSize: RFPercentage(1.8), marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2) }} >
                                        {item.title}
                                    </Text>
                                ))}

                            </View>
                        </View>

                        {/* Seven Column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(0.5) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Status
                                </Text>
                            </ImageBackground>


                            {sevenColumnData.map((item, i) => (

                                <View key={i} style={{ justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(1.2), backgroundColor: i == 2 ? "#AC7C9C" : Colors.darkRed, width: RFPercentage(12), height: RFPercentage(4), marginTop: i == 0 ? RFPercentage(1) : RFPercentage(0.3) }} >
                                    <Text style={{ color: Colors.white }} >
                                        {item.title}
                                    </Text>
                                </View>
                            ))}

                        </View>

                        {/* 8th column */}
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(6), marginLeft: RFPercentage(0.5) }} >
                            <ImageBackground style={{ width: RFPercentage(12), height: RFPercentage(4.4), justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/button.png')}  >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }}>
                                    Actions
                                </Text>
                            </ImageBackground>

                            {eighthColumnData.map((item, i) => (

                                <View key={i} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(1.2), backgroundColor: "#022F41", width: RFPercentage(12), height: RFPercentage(4), marginTop: i == 0 ? RFPercentage(1) : RFPercentage(0.3) }} >

                                    <Ionicons name="eye" style={{ fontSize: RFPercentage(2.6) }} color={Colors.white} />

                                    <Text style={{ color: Colors.white, marginLeft: RFPercentage(0.5) }} >
                                        {item.title}
                                    </Text>
                                </View>
                            ))}

                        </View>


                    </View>
                </ScrollView>

                {/* Pagination Front end Frame */}
                <View style={{ alignSelf: 'center', marginTop: RFPercentage(2), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }} >
                        Showing 1 to 8 of 8 entries
                    </Text>

                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <TouchableOpacity activeOpacity={0.5} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }} >
                                Previous
                            </Text>
                        </TouchableOpacity>
                        <View style={{ marginLeft: RFPercentage(1), width: RFPercentage(6), height: RFPercentage(4), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.darkRed, borderRadius: RFPercentage(20) }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }} >
                                1
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={{ marginLeft: RFPercentage(1) }}>
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.8) }} >
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </View>
    );
}

export default Invoice2Screen;