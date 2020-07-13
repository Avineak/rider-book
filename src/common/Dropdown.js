import React, {Component} from 'react';
import {Picker} from "react-native";

class Dropdown extends Component{
    state = {
        language: ''
    }
    render(){
        return(
        <Picker
            selectedValue={this.state.language}
            style={{height: 100, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
                }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>            
        );
    }
}
export default Dropdown;
