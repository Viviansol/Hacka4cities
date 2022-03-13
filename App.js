import React from 'react';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} />
          <Drawer.Screen name="Denuncia" component={denuncia} />
          <Drawer.Screen name="suaEconomia" component={suaEconomia} />
          <Drawer.Screen name="Missoes" component={missoes} />
          <Drawer.Screen name="MyProfile" component={Myprofile} />
        </Drawer.Navigator>
        
      </NavigationContainer>
   
  );
}

