import React from 'react'
import Native from 'react-native'
import { Button } from '../../components/Button'
import { styles } from './styles'

export function UserIdentification() {
  const [isFocused, setIsFocused] = React.useState(false)
  const [isFilled, setIsFilled] = React.useState(false)
  const [name, setName] = React.useState('')

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <Native.SafeAreaView style={styles.container} >
      <Native.KeyboardAvoidingView
        style={styles.container}
        behavior={Native.Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <Native.View style={styles.content} >
          <Native.View style={styles.form} >
            <Native.View style={styles.header} >
              <Native.Text style={styles.emoji} >{ isFilled ? '😄': '🧐' }</Native.Text>

              <Native.Text style={styles.title} >
                Como podemos {'\n'}
                chamar você?
              </Native.Text>
            </Native.View>

            <Native.TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && styles.inputHighlighted,
              ]}
              placeholder='Digite o nome'
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <Native.View style={styles.footer} >
              <Button />
            </Native.View>
          </Native.View>
        </Native.View>
      </Native.KeyboardAvoidingView>
    </Native.SafeAreaView>
  )
}
