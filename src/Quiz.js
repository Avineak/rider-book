import React , {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import QuizPage from "#components/QuizPage";
import reducers from "#reducers";

class Quiz extends Component{
    render(){
        return(
        <Provider store={createStore(reducers)}>
            <QuizPage/>
        </Provider>
        );
    }
}
export default Quiz;
