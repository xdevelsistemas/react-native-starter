/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApplicationProvider, Text, TopNavigation, Layout} from 'react-native-ui-kitten'
import {mapping, dark, light} from '@eva-design/eva'
const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={dark}>
      <TopNavigation title="teste"/>
      <Layout>
        <Text style={{color: 'black', fontSize: 30}}>
          Hello ...
        </Text>
      </Layout>
    </ApplicationProvider>
  );
};


export default App;
