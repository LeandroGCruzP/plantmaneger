import Native from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const styles = Native.StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
})
