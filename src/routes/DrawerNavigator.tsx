import React, { Component} from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps} from '@react-navigation/drawer';
import { AuthModelState  } from '../models/Auth';
import { connect } from 'dva';
import CustomDrawer from './components/CustomDrawer';
import UsersScreen from "../views/Users";
import HomeScreen from '../views/Home';


const Drawer = createDrawerNavigator();

interface DrawerNavigationProps{
    auth: AuthModelState;
}

interface DrawerNavigationState{

}

@connect(
    ({
        auth,
    }: {
        auth: AuthModelState;
    }) => ({
        auth,
    }),
  )
class DrawerNavigation extends Component<DrawerNavigationProps, DrawerNavigationState>{

    onLogout = (e?: any) => {
        console.log("logged out");
    };
    

    render() {
        const { auth: { loggedUser, logged } } = this.props;
        
        return (
            <Drawer.Navigator 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#261657',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
            drawerContent={(props) => <CustomDrawer { ...props } onLogout={this.onLogout} loggedUser={loggedUser} />}
            >
                <Drawer.Screen name="Home" 
                    component={HomeScreen} 
                    options={{                     
                        title: 'Dashboard', 
                        headerTitle: '',
                    }}
                />
                <Drawer.Screen name="Users" 
                    component={UsersScreen}  
                    options={{                     
                        title: 'Criar Utilizadores', 
                        headerTitle: '',
                    }} 
                />
            </Drawer.Navigator>
        ); 
    }
}
export default DrawerNavigation;
