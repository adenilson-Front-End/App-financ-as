import { createContext } from 'react';
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext(AuthContext);

export default function ListProvider({ children }) {
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ authLoading, setAuthLoading ] = useState(false);
  const [ renderizarGrafico, setRenderizarGrafico ] = useState();




  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');
      if (storageUser) {
        const response = await api.get('/me', {
          headers: {
            'Authorization': `Bearer ${storageUser}`
          }
        })
          .catch(() => {
            setUser(null)
          })

        api.defaults.headers[ 'Authorization' ] = `Bearer ${storageUser}`;
        setUser(response.data)
      }

      setLoading(false)

    }
    loadStorage()
  }, [])
  async function login(email, password) {
    setAuthLoading(true)
    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      const { name, id, token } = response.data;
      const data = {
        name,
        email,
        id,
        token
      }


      api.defaults.headers[ 'Authorization' ] = `Bearer ${token}`;
      await AsyncStorage.setItem('@finToken', token);
      setUser({
        name,
        email,
        id,
        token,
      });

      setAuthLoading(false)
      return;
    } catch (err) {

      console.log('Erro ao logar usuário', err.code);
      setAuthLoading(false)
    }

  }

  async function SignUp(nome, email, password) {
    setAuthLoading(true)
    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password,
      });
      console.log('Usuário cadastrado com sucesso"');

      setAuthLoading(false)
      return;
    } catch (err) {
      if (err.code === 'ERR_BAD_REQUEST') {
        console.log('Tente outro email');
      }

      setAuthLoading(false)
    }
  }


  async function logOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser(null)
      })
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, login, logOut, SignUp, loading, authLoading, renderizarGrafico, setRenderizarGrafico }}>
      {children}
    </AuthContext.Provider>
  );
}
