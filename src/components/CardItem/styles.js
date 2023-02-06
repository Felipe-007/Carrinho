import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: '#168fff',
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 2,
  },
  amount: {
    marginLeft: 14,
    marginRight: 14,
  },
})