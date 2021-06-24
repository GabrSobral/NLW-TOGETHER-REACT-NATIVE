import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { Background } from '../../components/BackgroundLinear'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { GuildProps } from '../../components/Guild'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'

import { styles } from './style'
import { theme } from '../../global/styles/theme'
import { Guilds } from '../Guilds'

export function AppointmentCreate(){
  const [ category, setCategory ] = useState('')
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const [ guild, setGuild ] = useState<GuildProps>({} as GuildProps)

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  function handleGuildSelect(guildSelected: GuildProps){
    setGuild(guildSelected)
    setIsModalVisible(false)
  }
  function handleOpenGuildsModal(){
    setIsModalVisible(true)
  }
  function handleCloseGuildsModal(){
    setIsModalVisible(false)
  }

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios"? 'padding' : 'height'}
    >
      <ScrollView>
        <Background>
          <View>
            <Header
              title="Agendar partida"
            />
            <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 15 }]}>
              Categoria
            </Text>

            <CategorySelect
              hasCheckBox
              setCategory={handleCategorySelect}
              categorySelected={category}
            />

            <View style={styles.form}>
              <RectButton onPress={handleOpenGuildsModal}>
                <View style={styles.select}>

                  { guild.icon ? <GuildIcon/> : <View style={styles.image}/>} 
                  
                  <View style={styles.selectBody}>
                    <Text style={styles.label}>
                      { guild.name ? guild.name : 'Selecione um servidor' }
                    </Text>
                  </View>

                  <Feather
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
                </View>
              </RectButton>
            
              <View style={styles.field}>
                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2}/>
                  </View>
                </View>

                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>

                  <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2}/>
                  </View>
                </View>
              </View>

              <View style={[styles.field, { marginBottom: 12 }]}>
                <Text style={styles.label}>Descrição</Text>
              
                <Text style={styles.caracteresLimit}>Max 100 caractéres</Text>
              </View>

              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
              />

              <View style={styles.footer}>
                <Button title="Agendar"/>
              </View>
            </View>

          </View>
        </Background>
      </ScrollView>

      <ModalView visible={isModalVisible} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelected={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}