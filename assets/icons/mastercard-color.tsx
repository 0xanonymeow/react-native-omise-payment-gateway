import { View } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

export default ({
  width = 25,
  height = 15,
}: {
  width: number;
  height: number;
}) => {
  return (
    <View
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ aspectRatio: 1, width: '100%', height: 'auto' }}>
        <Svg width="100%" height="100%" viewBox="0 0 25 15" fill="none">
          <G id="mastercard_color">
            <G id="Mastercard-Copy">
              <G id="Master">
                <Path
                  id="Fill-3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.91327 2.11989H15.6833V12.7809H9.91327V2.11989Z"
                  fill="#FF5F00"
                />
                <Path
                  id="Fill-4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2796 7.45036C10.2796 5.28427 11.2687 3.36303 12.7891 2.11988C11.6717 1.21577 10.2613 0.66954 8.72259 0.66954C5.07738 0.66954 2.12823 3.70208 2.12823 7.45036C2.12823 11.1987 5.07738 14.2312 8.72259 14.2312C10.2613 14.2312 11.6717 13.685 12.7891 12.7808C11.2687 11.5565 10.2796 9.61646 10.2796 7.45036Z"
                  fill="#EB001B"
                />
                <Path
                  id="Fill-5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4682 7.45036C23.4682 11.1987 20.5191 14.2312 16.8739 14.2312C15.3352 14.2312 13.9247 13.685 12.8074 12.7808C14.3461 11.5377 15.3169 9.61646 15.3169 7.45036C15.3169 5.28427 14.3277 3.36303 12.8074 2.11988C13.9247 1.21577 15.3352 0.66954 16.8739 0.66954C20.5191 0.66954 23.4682 3.72091 23.4682 7.45036Z"
                  fill="#F79E1B"
                />
              </G>
            </G>
          </G>
        </Svg>
      </View>
    </View>
  );
};
