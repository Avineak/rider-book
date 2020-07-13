import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "#reducers";
import React , {Component} from 'react';
import CalcPage from "#components/CalcPage";
import "./global.js";

class Calculation extends Component{
    render(){
        return(
            <Provider store={createStore(reducers)}>
                <CalcPage/>
            </Provider>
        );
    }
}
export default Calculation;





    
