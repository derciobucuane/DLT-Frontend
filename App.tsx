import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import dva from './src/utils/dva'
import UserModel from './src/models/Users'
import Login from './src/models/Auth'
import SecurityContext from './src/contexts/SecurityContext';

const app = dva({
    initialState: {},
    models: [UserModel, Login],
    onError(e: any) {
      console.log('onError', e)
    },
});

const App = app.start(
    <NavigationContainer>
        <SecurityContext />
    </NavigationContainer>
);

export default App


