import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps } from '@/types/type';

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-white';
    case 'danger':
      return 'bg-red-500';
    case 'success':
      return 'bg-green-500';
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]';

    case 'active-tab':
      return 'bg-white';

    case 'inactive-tab':
      return 'bg-grey-100';
    default:
      return 'bg-[#0B1D29]';
  }
};

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-white';
    case 'secondary':
      return 'text-black';
    case 'danger':
      return 'text-red-100';
    case 'success':
      return 'text-green-100';

    case 'inactive-tab':
      return 'text-[#BDBDBD]';
    default:
      return 'text-white';
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full h-[52px] rounded-md p-3 flex flex-row justify-center items-center shadow-sm shadow-neutral-400/70 ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`text-white text-[16px] font-semibold leading-[27.04px] tracking-[-0.01em] text-center ${getTextVariantStyle(
          textVariant
        )}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
