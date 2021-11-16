import { Formik } from "formik";
import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput } from "react-native";
import COLORS from "../../consts/colors";

export const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text
        style={{
          color:COLORS.secondary,
          padding: 10,
          fontSize: 18,
          fontWeight: "600",
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.secondary,
        }}
      >
        CREATE FISHERMAN
      </Text>
          <Formik
            initialValues={{name:'', age:'',location:'', contact:'',}}
          >
              {({handleChange,handleBlur, handleSubmit, values}) =>(
                  <View>
                      <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        />
                        <TextInput
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        />
                        <TextInput
                        onChangeText={handleChange('location')}
                        onBlur={handleBlur('location')}
                        value={values.location}
                        />
                        <TextInput
                        onChangeText={handleChange('namcontact')}
                        onBlur={handleBlur('contact')}
                        value={values.contact}
                        />
                  </View>
              )}
          </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
