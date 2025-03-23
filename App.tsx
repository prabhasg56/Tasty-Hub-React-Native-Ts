import React from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import MainComponents from './src/navigation/MainComponents';

const App: React.FC = () => {
  return (
    <>
      <MainComponents />
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
