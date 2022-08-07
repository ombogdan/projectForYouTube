import React, { useState } from "react";
import {Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Input } from "../../components/Input";
import Feather from "react-native-vector-icons/Feather";
import styled from "styled-components";

export const Registration = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [iconName, setIconName] = useState("eye-off");
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [iconName2, setIconName2] = useState("eye-off");
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);
    return (
        <Container>
            <TouchableWithoutFeedback
                accessible={false}
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <View style={{ height: "100%" }}>
                    <TopContentContainer>
                        <Text style={{ fontWeight: "bold", fontSize: 25 }}>ProjectForYouTube</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 30 }}>New Account</Text>
                    </TopContentContainer>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ width: "100%" }}>
                            <Input value={email} onValue={setEmail} placeholder={"Email"} />
                        </View>
                        <View style={{ width: "100%" }}>
                            <Input
                                value={password}
                                onValue={setPassword}
                                placeholder={"Create password"}
                                secureTextEntry={secureTextEntry} />
                            <TouchableOpacity
                                onPress={() => {
                                    setIconName(secureTextEntry === true ? "eye" : "eye-off");
                                    setSecureTextEntry(!secureTextEntry);
                                }}
                                style={{ position: "absolute", right: 15, bottom: 20 }}>
                                <Feather name={iconName} size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "100%" }}>
                            <Input
                                value={password2}
                                onValue={setPassword2}
                                placeholder={"Repeat the password"}
                                secureTextEntry={secureTextEntry2} />
                            <TouchableOpacity
                                onPress={() => {
                                    setIconName2(secureTextEntry2 === true ? "eye" : "eye-off");
                                    setSecureTextEntry2(!secureTextEntry2);
                                }}
                                style={{ position: "absolute", right: 15, bottom: 20 }}>
                                <Feather name={iconName2} size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2, justifyContent: "flex-end" }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "dodgerblue",
                                margin: 10,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                            }}
                            onPress={() => {

                            }}>
                            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Create Account</Text>
                        </TouchableOpacity>
                        <View
                            style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 10 }}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack();
                                }}>
                                <Text style={{ color: "dodgerblue", marginLeft: 5 }}>Go to Log In screen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const TopContentContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
`;
