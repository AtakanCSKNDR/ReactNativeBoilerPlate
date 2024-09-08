import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../../assets/styles/globalStyle';

const BottomDrawerScreen = (props: any) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [children, setChildren] = useState<any>(null);
  const [fixed, setFixed] = useState(false);
  const translation = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTitle(props.route.params.title);
    setSubtitle(props.route.params.subtitle);
    setChildren(props.route.params.children);
    setFixed(props.route.params.fixed || false);
  }, [props]);

  const handleClose = () => {
    if (!fixed) {
      if (props.callback) {
        props.callback();
      }
      navigation.goBack();
      setTitle('');
      setSubtitle('');
      setChildren(null);
    }
  };
  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <Pressable style={[StyleSheet.absoluteFill, styles.pressable]} onPress={handleClose}/>
        <Animated.View
          style={[styles.content,{transform: [{translateY: translation}]}]}>
          {!fixed && (
            <View style={styles.closeButtonWrapper}>
              <TouchableOpacity onPress={handleClose}>
            <Text>x</Text>
              </TouchableOpacity>
            </View>
          )}
          <Title message={title} align={props.route.params.titleAlign} type="title" />
          <Title message={subtitle} align={props.route.params.subtitleAlign} type="subtitle" />
          {children}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const Title = ({message, align, type}: any) => {
  let currentAlign = align || 'left';
  let currentType = type || 'title';

  if (!message || message == '') return;
  return (
    <Text style={[globalStyles[currentType] , {marginBottom: 16, textAlign: currentAlign}]}>
      {message}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pressable: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: -26,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#15284B',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#15284B',
    textAlign: 'center',
    marginBottom: 16,
  },
  content: {
    padding: 16,
    maxHeight: '80%',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    backgroundColor: '#FFF',
    width: '100%',
  },
});
export default BottomDrawerScreen;
