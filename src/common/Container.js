import React from "react";
import {View, Text} from 'react-native';

const Container = (props) => {
    return(
       <View style={styles}>
               {props.children}    
        </View> 
    );
}
export default Container;

styles={
    padding: 10
}
