import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import BottomTab from '../components/common/BottomTab';
import InputField from './../components/common/InputField';
import { TextInput } from 'react-native-gesture-handler';

//config
import Colors from '../config/Colors';

function SettingsScreen(props) {

    const [inputField, SetInputField] = useState([

        {
            placeholder: "",
            title: 'First Name',
            value: "",
        },
        {
            placeholder: "",
            title: 'Email',
            value: "",
        },
        {
            placeholder: "",
            title: 'Company',
            value: "",
        },
        {
            placeholder: "",
            title: 'Zip',
            value: "",
        },

        {
            placeholder: "",
            title: 'Password',
            value: "",
        },


    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const [SecondInputField, SetSecondInputField] = useState([

        {
            placeholder: "",
            title: 'Last Name',
            value: "",
        },
        {
            placeholder: "",
            title: 'Phone',
            value: "",
        },
        {
            placeholder: "",
            title: 'City',
            value: "",
        },
        {
            placeholder: "None",
            title: 'Country',
            value: "",
        },
        {
            placeholder: "None",
            title: 'Confirm Password',
            value: "",
        },


    ]);

    const handleChange2 = (text, i) => {
        let tempfeilds = [...SecondInputField];
        tempfeilds[i].value = text;
        SetSecondInputField(tempfeilds);

    };

    const handleLogin = () => {
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

    };



    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>

            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(21), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(3), width: '86%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.5) }} source={require('../../assets/images/noti.png')} />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(1) }}>
                            <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/user.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2) }}>
                            <Image style={{ width: RFPercentage(5.5), height: RFPercentage(5.5) }} source={require('../../assets/images/drop.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Pink Shade */}
            <Image style={{ width: '100%', height: RFPercentage(3) }} source={require('../../assets/images/pinkshade.png')} />

            {/* Input fields */}

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ marginTop: RFPercentage(18), flexDirection: 'row', width: '100%', alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(1) }} >
                        {/* First Column */}
                        <View style={{ alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '35%', marginTop: RFPercentage(-16) }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: !i == 0 ? RFPercentage(2) : 0, justifyContent: 'center', alignItems: 'flex-start' }} >
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2), marginBottom: RFPercentage(0.1), marginLeft: RFPercentage(1.5) }} >
                                        {item.title}
                                    </Text>
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.darkRed}
                                        placeholderColor={'#F5F3EE80'}
                                        borderWidth={RFPercentage(0.1)}
                                        borderColor={Colors.darkRed}
                                        height={RFPercentage(4)}
                                        placeholderAtCenter={false}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(10)}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"100%"}
                                        color={Colors.white}
                                    />

                                </View>
                            ))}
                        </View>
                        {/* second Column */}
                        <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-start', alignItems: 'flex-start', width: '35%', marginTop: RFPercentage(-16) }}>
                            {SecondInputField.map((item, i) => (
                                <View key={i} style={{ marginTop: !i == 0 ? RFPercentage(2) : 0, justifyContent: 'center', alignItems: 'flex-start' }} >
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2), marginBottom: RFPercentage(0.1), marginLeft: RFPercentage(1.5) }} >
                                        {item.title}
                                    </Text>
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.darkRed}
                                        placeholderColor={'#F5F3EE80'}
                                        borderWidth={RFPercentage(0.1)}
                                        borderColor={Colors.darkRed}
                                        height={RFPercentage(4)}
                                        placeholderAtCenter={false}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(10)}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange2(text, i)}
                                        value={item.value}
                                        width={"100%"}
                                        color={Colors.white}
                                    />
                                </View>
                            ))}
                        </View>

                        {/* Image with buttons */}
                        <View style={{ marginTop: RFPercentage(-16), justifyContent: 'center', alignItems: 'center', width: '30%' }} >
                            <Image style={{ marginRight: RFPercentage(2), width: RFPercentage(14.1), height: RFPercentage(13.8) }} source={require('../../assets/images/pro.png')} />
                            <View style={{ marginRight: RFPercentage(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginRight: RFPercentage(2), width: RFPercentage(8), height: RFPercentage(4.5), borderRadius: RFPercentage(10), backgroundColor: Colors.darkRed }} >
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(1.4) }} >
                                        Cancel
                                    </Text>
                                    <Entypo name="circle-with-cross" style={{ fontSize: RFPercentage(1.6), marginLeft: RFPercentage(0.5) }} color={Colors.white} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: RFPercentage(8), height: RFPercentage(4.5), borderRadius: RFPercentage(10), backgroundColor: '#022F41' }} >
                                    <Text style={{ color: Colors.white, fontSize: RFPercentage(1.4) }} >
                                        Update
                                    </Text>
                                    <AntDesign name="checkcircle" style={{ fontSize: RFPercentage(1.6), marginLeft: RFPercentage(0.5) }} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Address input field */}
                    <View style={{ marginLeft: RFPercentage(1), marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'flex-start' }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2), marginBottom: RFPercentage(0.1), marginLeft: RFPercentage(1.5) }}>
                            Address
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '100%', backgroundColor: Colors.darkRed, height: RFPercentage(5), borderRadius: RFPercentage(10) }} >
                            <TextInput style={{ width: '100%', marginLeft: RFPercentage(2), color: Colors.white }} />
                        </View>
                    </View>

                    <View style={{ marginBottom: RFPercentage(25) }} />
                </View>
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab />
        </View>
    );
}

export default SettingsScreen;