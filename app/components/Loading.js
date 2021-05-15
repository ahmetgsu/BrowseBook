import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {colors} from '../style/style';

const Loading = ({visible}) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      supportedOrientations={['portrait']}
      onRequestClose={() => {}}>
      <View style={styles.indicatorContainer}>
        <SkypeIndicator size={70} color={colors.primary} />
      </View>
    </Modal>
  );
};

export default Loading;

Loading.defaultProps = {
  backgroundColor: 'rgba(0,0,0,0.1)',
};
const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
