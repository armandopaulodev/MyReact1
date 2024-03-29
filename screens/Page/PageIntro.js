import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Home2 from './home2';



const PageIntro = () => {


  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
            <Home2/>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          skipLabel='Pular'
          nextLabel='Próximo'
          doneLabel='Feito'
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default PageIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Encontre aqui a solução mais \n\n próxima de ti',
    title: 'Bem Vindo Ap',
    image: require('../../assets/global/verlope.png'),
    backgroundColor: '#FFC54A',
  },
  {
    key: 's2',
    title: 'Refrigeração',
    text: 'Titulo 2',
    image: require('../../assets/global/ac.png'),
    backgroundColor: '#01B8FC',
  },
  {
    key: 's3',
    title: 'Cyber Security',
    text: 'Cyber Security',
    image: require('../../assets/global/cyber.png'),
    backgroundColor: '#5C606C',
  },
  {
    key: 's4',
    title: 'Titulo 4',
    text: 'Texto 4',
    image: {
      uri:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
    },
    backgroundColor: '#FFC54A',
  }
];