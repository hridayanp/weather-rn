import { TextInputProps, TouchableOpacityProps } from 'react-native';

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'outline'
    | 'success'
    | 'active-tab'
    | 'inactive-tab';
  textVariant?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'inactive-tab';
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}
