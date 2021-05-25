/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Text>Hello World!</Text>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default App;
