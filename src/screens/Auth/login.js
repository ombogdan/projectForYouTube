import React, { useState } from "react";
import { Image, Keyboard, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components";
import { Input } from "../../components/Input";
import Feather from "react-native-vector-icons/Feather";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [iconName, setIconName] = useState("eye-off");
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    function goToRegistration() {
        navigation.navigate("Registration");
    }

    return (
        <Container>
            <TouchableWithoutFeedback
                accessible={false}
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <View style={{ height: "100%" }}>
                    <TopContainer>
                        <Text style={{ fontWeight: "bold", fontSize: 25 }}>ProjectForYouTube</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 30 }}>Log In</Text>
                    </TopContainer>
                    <CenterContainer>
                        <InputContainer>
                            <Input value={email} onValue={setEmail} placeholder={"Email"} />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                value={password}
                                onValue={setPassword}
                                placeholder={"Password"}
                                secureTextEntry={secureTextEntry} />
                            <TouchableOpacity
                                onPress={() => {
                                    setIconName(secureTextEntry === true ? "eye" : "eye-off");
                                    setSecureTextEntry(!secureTextEntry);
                                }}
                                style={{ position: "absolute", right: 15, bottom: 20 }}>
                                <Feather name={iconName} size={25} />
                            </TouchableOpacity>
                        </InputContainer>
                    </CenterContainer>
                    <BottomContainer>
                        <LogInContainer
                            onPress={() => {
                            }}>
                            <LogInText>Log In</LogInText>
                        </LogInContainer>
                        <TouchableOpacity
                            style={styles.signInContainer}
                            onPress={() => {
                            }}>
                            <Image source={require("../../assets/google.png")} style={{ height: 50, width: 50 }} />
                            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold", marginLeft: 5 }}>Sign in
                                with Google</Text>
                        </TouchableOpacity>
                        <CreateAccount>
                            <Text>Don’t have an account</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    goToRegistration();
                                }}>
                                <Text style={{ color: "dodgerblue", marginLeft: 5 }}>Create account</Text>
                            </TouchableOpacity>
                        </CreateAccount>
                    </BottomContainer>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
};

const styles = StyleSheet.create({
    signInContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 6, height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        margin: 10,
        height: 50,
    },
});

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const TopContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const CenterContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled(View)`
  width: 100%;
`;

const BottomContainer = styled(View)`
  flex: 2;
  justify-content: flex-end;
`;

const LogInContainer = styled(TouchableOpacity)`
  background-color: dodgerblue;
  margin: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CreateAccount = styled(View)`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const LogInText = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

