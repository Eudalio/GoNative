import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loading: {
    padding: metrics.basePadding,
  },

  columnContainer: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
});

export default styles;
