import React, { useState } from "react";
import AuthRoutes from '../routes/auth.routes';
import AuthHome from '../routes/app.routes';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { ActivityIndicator, StyleSheet, View } from "react-native";


export default function Routes() {

  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styled.container}>
        <ActivityIndicator size={'large'} color={'#fff'}>

        </ActivityIndicator>
      </View>
    )
  }
  return signed ? <AuthHome /> : <AuthRoutes />;
}


const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  }
})