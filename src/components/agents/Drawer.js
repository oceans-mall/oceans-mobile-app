import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dashboard } from "./Dashboard";
import { DrawerContent } from './DrawerContent'
const Drawer = createDrawerNavigator();

export const Agent = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};
