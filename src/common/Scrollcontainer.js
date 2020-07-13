import {ScrollView} from "react-native";
import React from "react";
const Scrollcontainer = (props) => {
    return(
       <View style={styles}>
               {props.children}    
        </View> 
    );
}
export default Scrollcontainer;

styles={
    padding: 10,
    flex : 1
}
