/*Example of Collapsible - Accordion - Expandable View in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
//import basic react native components
import * as Animatable from 'react-native-animatable';
//import for the animation of Collapse and Expand
import Collapsible from 'react-native-collapsible';
//import for the collapsible/Expandable view
import Accordion from 'react-native-collapsible/Accordion';

import Card from "#common/card/Card"
//import for the Accordion view

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    title: 'स्मार्ट ड्राइभिङ लाइसेन्स लिनु परेमा (बागमती अञ्चलको लागि) : यातायात व्यवस्था कार्यालय',
    content:
      'नयाँ सवारी चालक अनुमति पत्र जारी गर्न व्यक्ति स्वम उपलब्ध हुनुपर्ने हुन्छ, जसको लागि सवारी व्यवस्था बिभागमा जानुपर्ने हुन्छ',
 title1:'आवश्यक कागजात:',
 body11:'1.    निवेदन फारम पत्र । ',                                                                             body12:'2.    आफ्नो सक्कली नागरिकता र त्यसको प्रतिलिपि ।',                                                      body13:'3.    एक प्रति पासपोर्ट साइजको फोटो ।तपाइले काट्नु भएको हरेक रसिद ।   ',
 title2:'दस्तुर',
body21:'1.    मो .सा- स्कुटरको लागि रु ७०० । ',                                                                 body22:'2.    मो.सा बाहेक साना सवारीका लागि रु १००० ।',                                                         body23:'3.    मझौला सवारीका लागि रु १५०० ।',                                                                   body24:'4.   ठुला सवारीका लागि रु २००० ।',
title3:'एक भन्दा बढी वर्गको स.चा.अ.प को हकमा सबैभन्दा बढी दस्तुर लाग्ने वर्गको दस्तुर बराबर ।',
body31:'1.     वर्ग थपका लागि : स.चा.अ.प दस्तुर',                                                                body32:'2.    साना सवारीको लागि रु १०० ।',                                                                      body33:'3.    मझौला सवारीको लागि रु २५० ।  ',                                                                   body34:'4.    ठुला सवारीको लागि रु ५०० ।',
title4:'प्रक्रिया',
body41:'1.    यातायात व्यवस्था कार्यालय एकान्तकुनामा निवेदन फारम भरि टिकट किनी तेस्मा तस्नुहोस साथै स्वास्थ्य परीक्षणको राषिद काट्नुहोस् र टोकन लिनुहोस्| (personal verification) को लागि डिजिटल प्रणालीको प्रयोग पछि टोकन लिने प्रक्रिया सुरु भएको हो )',                                                 body42: '2.    आफ्नो टोकन अनुसार लाइनमा बस्नुहोस र त्यहाको कर्मचारीले बोलाएपछि सो कार्यालयको पहिलो भवनको भुईतल्लाको कोठामा प्रवेश गर्नुहोस्| ' ,                                                              body43:'3.    कोठामा प्रवेश गरेपछि कुनै एक कम्प्युटर अपरेटर कहाँ गइ आफ्नो सक्कली नागरिकता र निवेदन फारम बुझाई वेबक्यामबाट आफ्नो फोटो खिचाउनुहोस र डिजिटल प्रक्रियामा आफ्नो बुढी औलाको छाप दिई डिजिटल प्रक्रियाले त्यहाको नै नोट पेनले आफ्नो दस्तागत गर्नुहोस्|'     ,                                          body44: '4.    तपाईको स्वास्थ्य परीक्षणको राषिद देखाई सोहि कोठामा भएको स्वाथ्य परीक्षण गर्ने कर्मचारीबाट स्वास्थ्य परीक्षण गर्नुहोस्| '      ,                                                         body45 :'5.    आफ्नो निवेदन फारम लिई कोठा नॉ.६ मा फारम बुझाई रु २०० तिरी राषिद काट्नुहोस् र तेस्को केहि समयपछि तपाइले सोहि कोठामा अपरेटरले तपाइलाई प्रवेशिका पत्र दिनुहुनेछ(लिखित परीक्षा र ट्रायलको लागि)|   ',                                                                                                  body46: '6.    भोलि पल्ट बिहानै लिखित परीक्षाको लागि तपाई सोहि कार्यालयको दोश्रो तल्लामा उपस्थित हुनुपर्नेछ, जसको लागि सुरुमा गेट निर टासिएको सुचीमा आफ्नो नाम अनुसारको अंक टिप्पणी गरी लाइनमा बस्नुहोस्| ',                                                                                                                                                                                             body47:  '7.    आफ्नो पालो आएपछि तपाइले आफ्नो राषिद फारम, सक्कली नागरिकता र प्रवेशिका पत्र देखाई लिखितको परीक्षा दिनसक्नुहुनेछ|स्कूटर र बाइकको ट्रायलको लागि तपाई बिहानै मिण भवनमा जानुपर्नेछ र गाडीको लागि सिहदरबार, बग्गीखानामा जानुपर्नेछ|',                                                                 body48: '8.    लिखित र ट्रायल पास गरेपछि त्यहा निरिक्षण गर्ने ट्राफिकले भनेको मितिमा तपाई एकान्तकुनामा जानुपर्नेछ|',                                                                                            body49: '9.    सो मितिमा तपाई उपस्थित भइ स्मार्ट कार्डको लागि फारमभरि, दोश्रो भवनमा राषिद काट्नहोस् र सो राषिद लिई पहिलो भवनको कोठा नॉ. ५ मा राषिद बुझाई स्मार्ट कार्ड लिनुहोस्',
title5:'सुचना',
body51:'1.    यदि तपाईसंग पुरानो लाइसेन्स छ भने सो लाइसेन्सको अवधि समाप्तिपछि, नविकरण गर्नुहुदा स्मार्ट कार्ड प्राप्त गर्नुहुनेछ| ',                                                                       body52:'2.    यदि तपाई लिखित या ट्रायलमा फेल हुनुभयो भने, तिन महिना सम्म तपाइले स्मार्ट ड्राइभिङ लाइसेन्सको लागि पुन् प्रयास गर्न पाउनु हुनेछैन|'

  },


  {
    title: 'सवारी चालक अनुमतिपत्रको प्रतिलिपि',
    content:
      'सवारी चालक अनुमतिपत्रको प्रतिलिपि यातायात व्यवस्था कार्यालयबाट लिन सकिन्छ| सबै अभिलेख दुरुस्त भएमा सवारी चालक अनुमतिपत्र एक घण्टा भित्र पाउन सकिन्छ||',
       title1:'आवश्यक कागजात',
       body11:'1.    रु १० को टिकट टाँसिएको तोकिएको ढाँचाको दरखास्त फारम चाहिने हुन्छ|',
       body12:'2.    पासपोर्ट साइजको फोटो दुई प्रति र अटो साइजको फोटो १ प्रति चाहिने हुन्छ',
       body13:'3.    नविकरण समेत गर्नुपर्ने भएमा नविकरणको दरखास्त र तोकिएको ढाँचाको निरोगिता प्रमाणपत्र चाहिने हुन्छ|',
       body14:'4.    नागरिकताको प्रमाणपत्र सक्कल र सोको प्रतिलिपि चाहिने हुन्छ|',
       body15:'5.     ट्राफिक प्रहरी कार्यालयको सिफारिस उपलब्ध गराउनु पर्ने हुन्छ|अन्य अंचलको भएमा, यस कार्यालयमा नविकरण भएको हुनुपर्ने हुन्छ|',
        title2:'दस्तुर:',
       body2:'सबै बर्गको लागि रु १००',
       title3:'जिम्मेवार अधिकारी                                शाखा अधिकृत',
  },
 

  {
    title: 'मोटरसाइकल सवारी दर्ता प्रमाणपत्रको (ब्लुबुक) प्रतिलिपि',
    content:'सवारी साधन आफ्नो हो भन्ने प्रमाण र दर्ता भएको सवारी साधनमा लाग्ने कर वर्षै पिच्छे तिरी नविकरण गर्ने प्रमाण नै ब्लु बुक हो| यसमा सवारी धनीको परिचयको साथै सवारीको सम्पूर्ण जानकारी पनि हुन्छ|',
    title1:'आवश्यक कागजात:',
    body11:'1.    सक्कलै नागरिकता सहित सम्बन्धित सवारी धनि स्वयम उपस्थित हुनुपर्छ',
    body12:'2.    ट्राफिक प्रहरीको सिफारिस (ब्लुबुक हराएकोमा) चाहिने हुन्छ|चालु आर्थिक वर्ष सम्मको कर तिरेतेस्रो पक्ष वीमा गरिएको कागजात चाहिने हुन्छ|',
    body13:'3.    सवारी धनि विदेशमा भए दुतावासबाट प्रमाणित मंजुरिनामा चाहिने हुन्छ|',
    body14:'4.    ऋणी भए ऋणीको उपस्थिती, विदेशमा भए दुताबासबाट प्रमाणित मंजुरिनामा चाहिने हुन्छ|',
    body15:'5.    संस्था, फर्म, कम्पनी भए तिनको अध्यावधिकता झल्काउने कागजात चाहिने हुन्छ|( कर विवरण, नविकरण विवरण )सक्कलै फाइल (सम्बन्धित फाँटबाट उपलब्ध) हुनुपर्छ|रु १० को टिकट टाँसी तोकिएको ढाँचामा निवेदन दिनुपर्छ|',
    body16:'6.    सक्कलै फाइल (सम्बन्धित फाँटबाट उपलब्ध) हुनुपर्छ|',
    body17:'7.    रु १० को टिकट टाँसी तोकिएको ढाँचामा निवेदन दिनुपर्छ|',
    title2:'दस्तुर',
    body21:'1.    प्रतिलिपिको दस्तुर रु १००',
    body22:'2.    प्रदूषण दस्तुर रु २०',
    body23:'3.    प्रक्रिया पुरा भएपछि ३० मिनेट',
    title3:'प्रक्रिया',
    body31:'1.    सवारीसाधन दर्ता प्रमाणपत्रको (ब्लु बुक) प्रतिलिपि लिनको लागि सर्वप्रथम ट्राफिक प्रहरी कार्यालय (राम शाह पथ) मा ब्लु बुक हराएको निवेदन दिने|',
    body32:'2.    निवेदनको ढाँचा त्यही नै उपलब्ध हुन्छ| निवेदन दिएको तिन दिनपछि सिफारिस लिन जानुपर्ने हुन्छ| ',
    body33:'3.    प्रक्रियाको लागि यातायात कार्यालय जानुपर्ने हुन्छ|',
    body34:'4.    ब्लु बुकको लागि फारम भरेपछि टोकन लिई काउन्टर न. ४ र ५ बाट फारम बुझाउनु पर्छ|',
    body35:'5.    तेस्रो पक्ष विमा मोटरसाइकलको हकमा १,१३५ लाग्ने हुन्छ| ( मोटरसाइकलको लट, चेसिस न ( इन्जिन न. ) को आधारमा पनि वीमा शुल्क निर्धारण गरीन्छ|'
  },
 

];
export default class Study1 extends Component {
  state = {
    //default active selector
    activeSections: [],
    //collapsed condition for the single collapsible
    collapsed: true,
    //multipleSelect is for the Multiple Expand allowed
    //true: You can expand multiple at a time
    //false: One can be expand at a time and other will be closed automatically
    multipleSelect: false,
  };

  toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Card>
        <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
      </Card>
      
    );
  };

  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Card style={{backgroundColor: "#fff"}}>

      
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        
        <Animatable.Text
          
          style={{ fontSize:19,
            fontWeight:"bold" }}>
          {section.content}
          </Animatable.Text>

           <Animatable.Text
          
           style={styles.subtitle}>
          {section.title1}
            </Animatable.Text>
           <Animatable.Text
          
          style={styles.subBody}>
          {section.body11}
            </Animatable.Text>
            <Animatable.Text
          
          style={styles.subBody}>
          {section.body12}
            </Animatable.Text>
            <Animatable.Text
          
          style={styles.subBody}>
          {section.body13}
            </Animatable.Text>
             <Animatable.Text
          
          style={styles.subBody}>
          {section.body14}
            </Animatable.Text>
             <Animatable.Text
          
          style={styles.subBody}>
          {section.body15}
            </Animatable.Text>
             
           <Animatable.Text
          
           style={styles.subtitle}>
          {section.title2}
            </Animatable.Text>
           <Animatable.Text
          
          style={styles.subBody}>
          {section.body21}
            </Animatable.Text>
            <Animatable.Text
          
          style={styles.subBody}>
          {section.body22}
            </Animatable.Text>
            <Animatable.Text
          
          style={styles.subBody}>
          {section.body23}
            </Animatable.Text>
            <Animatable.Text
          
          style={styles.subBody}>
          {section.body24}
            </Animatable.Text>
           <Animatable.Text
          
          style={{fontSize:20,marginTop:22,marginBottom:22}}>
          {section.title3}
            </Animatable.Text>
           <Animatable.Text
          
          style={styles.subBody}>
          {section.body3}
            </Animatable.Text>
           <Animatable.Text
         
           style={styles.subtitle}>
          {section.title4}
            </Animatable.Text>
           <Animatable.Text
         
           style={styles.subBody}>
          {section.body41}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body42}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body43}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body44}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body45}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body46}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body47}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body48}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body49}
            </Animatable.Text>

           <Animatable.Text
         
           style={styles.subtitle}>
          {section.title5}
            </Animatable.Text>
           <Animatable.Text
         
           style={styles.subBody}>
          {section.body51}
            </Animatable.Text>
            <Animatable.Text
         
           style={styles.subBody}>
          {section.body52}
            </Animatable.Text>
      </Animatable.View>
      </Card>  
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
          <Card>
          <Text style={styles.title}>अध्ययन</Text>
          </Card>
          

  
          <View style={{ backgroundColor: '#000', height: 1, marginTop: 10 }} />
        
         

          {/*Code for Selector starts here*/}
         
          {/*Code for Selector ends here*/}

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={this.renderHeader}
            //Header Component(View) to render
            renderContent={this.renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={this.setSections}
            //setting the state of active sections
          >
             <View style={{ backgroundColor: '#000', height: 1, marginTop: 10 }} />
          </Accordion>
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    fontSize:20
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle:{
    fontWeight:"bold",
    fontSize:22,
    marginTop:22,
    marginBottom:22
  },
  subBody:{
    fontSize:18,
    padding:2

  },

  header: {
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 2,
    marginTop:22,
    marginBottom:22,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
    fontSize:25
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
    fontSize:25
  },
  
});
