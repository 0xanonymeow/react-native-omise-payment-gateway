import { ReactNode } from 'react';
import { Animated } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

export const LongPressGesture = ({
  children,
  onLongPress,
}: {
  children: ReactNode;
  onLongPress?: () => void;
}) => {
  const scale = new Animated.Value(1);

  const onDefaultLongPress = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Animated.timing(scale, {
        toValue: 1.1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      if (onLongPress) onLongPress();
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <LongPressGestureHandler
      onHandlerStateChange={onDefaultLongPress}
      minDurationMs={700}
    >
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
    </LongPressGestureHandler>
  );
};
