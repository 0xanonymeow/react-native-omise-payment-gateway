import { ReactNode } from 'react';
import { Animated } from 'react-native';
import {
  Gesture as DefaultGesture,
  GestureDetector,
} from 'react-native-gesture-handler';

export const Gesture = ({
  children,
  onLongPress,
  onPress,
}: {
  children: ReactNode;
  onLongPress?: () => void;
  onPress?: () => void;
}) => {
  const scale = new Animated.Value(1);
  const scaleUp = () =>
    Animated.timing(scale, {
      toValue: 1.1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  const scaleDown = () =>
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

  const tap = DefaultGesture.Tap()
    .onStart(scaleUp)
    .onEnd(() => {
      if (onPress) onPress();
    })
    .onFinalize(scaleDown);
  const longPress = DefaultGesture.LongPress()
    .onStart(() => {
      scaleUp();
      if (onLongPress) setTimeout(() => onLongPress(), 300);
    })
    .onFinalize(scaleDown)
    .minDuration(700);

  return (
    <GestureDetector gesture={DefaultGesture.Race(tap, longPress)}>
      <Animated.View
        style={{
          transform: [{ scale }],
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
