import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";

export const TopMenu = ({ screenName }) => {
    return (
        <Container>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{screenName}</Text>
        </Container>
    );
};

const Container = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: white;
  flex: 1;
`;
