import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export const Input = ({ onValue, value, placeholder, secureTextEntry }) => {
    const [focus, setFocus] = useState(false);

    return (
        <TextInput
            style={[styles.input, { borderBottomColor: focus ? "dodgerblue" : "gray" }]}
            onChangeText={onValue}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
                setFocus(true);
            }}
            onBlur={() => {
                setFocus(false);
            }}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
});
