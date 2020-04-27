import React from 'react';
import { View } from 'react-native';
import Header from './Component/Header';
import Atas from './Component/Atas';
import Contents from './Component/Contents';
import Footers from './Component/Footer';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ height: 100 }}>
        <Atas />
      </View>
      <Contents />
      <Footers />
    </View>
  );
}
