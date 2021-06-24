import React, { createContext, ReactNode, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import { 
  SCOPE,
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE
} from '../config'
import { api } from '../services/api'

type AuthContextProps = {
  user : User;
  signIn: () => Promise<void>;
  loading: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode
}

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string
  }
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps){
  const [ user, setUser ] = useState<User>({} as User)
  const [ loading, setLoading ] = useState(false)

  async function signIn(){
    try{
      setLoading(true)

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      
      const {
        type,
        params
      } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

      if(type === 'success') {
        api.defaults.headers.Authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        })
        setLoading(false)
      } else {
        setLoading(false)
      }
      console.log(type, params)

    }catch(error){
      throw new Error(error)
    }
  }
  
  return(
    <AuthContext.Provider
      value={{
        user,
        signIn,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}