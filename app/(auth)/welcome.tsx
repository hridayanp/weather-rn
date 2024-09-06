import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { View } from 'react-native';
import { router } from 'expo-router';

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#0B1D29] px-14 pb-20">
      <Image
        source={images.IndraWhiteLogo}
        className="w-full h-[300px] mb-6"
        resizeMode="contain"
      />

      <CustomButton
        title={'Login'}
        className="w-full mb-4"
        bgVariant="secondary"
        textVariant="secondary"
      />

      <CustomButton title={'Register'} className="w-ful mb-4" />

      <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
        <Text className="text-white underline text-[14px] font-semibold leading-[16.94px] text-center font-inter">
          Continue as Guest
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
