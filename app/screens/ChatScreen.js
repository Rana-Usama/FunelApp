import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import InputField from './../components/common/InputField';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ChatScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Type a message here...",
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const [sendPress, setSendPress] = useState(false);

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
                        <TouchableOpacity onPress={() => props.navigation.navigate("SettingsScreen")} activeOpacity={0.8} style={{ marginLeft: RFPercentage(1) }}>
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

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >

                <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(0.2) }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <View style={{ marginTop: RFPercentage(25), width: '100%', alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                            {/* Input field */}
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', alignSelf: 'center' }}>
                                {inputField.map((item, i) => (
                                    <View key={i} style={{ justifyContent: 'center', alignItems: 'center' }} >

                                        {sendPress ?
                                            <View style={{ position: 'absolute', right: 0, bottom: RFPercentage(12) }} >
                                                <View style={{ justifyContent: 'center', alignItems: 'center', height: RFPercentage(4.5), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(1) }}  >
                                                    {/* Message Here */}
                                                    <Text style={{ marginHorizontal: RFPercentage(2), color: Colors.white, fontSize: RFPercentage(1.8) }} >
                                                        {item.value}
                                                    </Text>
                                                </View>
                                            </View>
                                            :
                                            null
                                        }

                                        <InputField
                                            placeholder={item.placeholder}
                                            backgroundColor={"#5B0038"}
                                            placeholderColor={Colors.grey}
                                            borderWidth={RFPercentage(0.1)}
                                            borderColor={'#5B0038'}
                                            height={RFPercentage(5.6)}
                                            placeholderAtCenter={false}
                                            secure={item.secure}
                                            borderRadius={RFPercentage(10)}
                                            fontSize={RFPercentage(2)}
                                            handleFeild={(text) => handleChange(text, i)}
                                            value={item.value}
                                            width={"84%"}
                                            color={Colors.white}
                                        />
                                    </View>
                                ))}

                                {/*send icon */}
                                <TouchableOpacity onPress={() => setSendPress(true)} activeOpacity={0.5} style={{ marginLeft: RFPercentage(-3) }} >
                                    <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/send.png')} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </View>

    );
}

export default ChatScreen;