import React from "react";
import {View , Text, TouchableNativeFeedback} from "react-native";	

const Stack = (props) => {
    styles = {
        label: {
            fontWeight:'bold',
            color: props.textcolor
        },
        wrapper:{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: 300,
            borderRadius: 10,
            backgroundColor: props.backgroundcolor,
            marginTop: 10,
            marginBottom: 10
        }
    }
    return(
        <TouchableNativeFeedback
            onPress={()=>props.optionSwitch()}
            background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.wrapper}>
            <Text style={styles.label}>
                    {props.name}
            </Text>
        </View>
    </TouchableNativeFeedback>
    );
}
export default Stack;

