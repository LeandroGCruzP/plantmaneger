import Native from 'react-native'
import { styles } from './styles'

export function Button() {
  return (
    <Native.TouchableOpacity style={styles.container} >
      <Native.Text style={styles.text} >Confirmar</Native.Text>
    </Native.TouchableOpacity>
  )
}
