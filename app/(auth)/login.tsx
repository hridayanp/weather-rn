import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTabs from '@/components/CustomTabs';
import { Link } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';

const SignupScreen = () => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    className="flex-1 py-5"
  >
    <View className="flex-1 justify-between">
      {/* Top Text */}

      <Text className="text-[20px] font-semibold text-primary-100 mt-2">
        Create your account
      </Text>

      {/* Input Fields */}
      <View className="flex-1">
        <View className="flex-1 justify-start">
          <InputField
            placeholder="First Name"
            textContentType="emailAddress"
            labelStyle="text-primary-100"
          />
          <InputField
            placeholder="Last Name"
            textContentType="emailAddress"
            labelStyle="text-primary-100"
          />

          <InputField
            placeholder="Email"
            textContentType="emailAddress"
            labelStyle="text-primary-100"
          />

          <InputField
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            labelStyle="text-primary-100"
          />

          <InputField
            placeholder="Confirm Password"
            secureTextEntry={true}
            textContentType="password"
            labelStyle="text-primary-100"
          />
        </View>
      </View>

      {/* Button */}
      <View className="mb-6">
        <CustomButton
          title="Log In"
          className="w-full"
          bgVariant="secondary"
          textVariant="secondary"
        />
      </View>
    </View>
  </KeyboardAvoidingView>
);

const LoginScreen = () => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    className="flex-1 py-5"
  >
    <View className="flex-1 justify-between">
      {/* Top Text */}

      <Text className="text-[20px] font-semibold text-primary-100 mt-2">
        Login to your account
      </Text>

      {/* Input Fields */}
      <View className="flex-1">
        <View className="flex-1 justify-start">
          <InputField
            placeholder="Email"
            textContentType="emailAddress"
            labelStyle="text-primary-100"
          />

          <InputField
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            labelStyle="text-primary-100"
          />
        </View>
      </View>

      {/* Button */}
      <View className="mb-0">
        <CustomButton
          title="Log In"
          className="w-full"
          bgVariant="secondary"
          textVariant="secondary"
        />
      </View>
    </View>
  </KeyboardAvoidingView>
);

const Login = () => {
  return (
    <SafeAreaView className="flex-1 h-screen bg-[#0B1D29]">
      <View className="flex-1 px-6">
        <CustomTabs tabs={['Signup', 'Login']}>
          <SignupScreen />
          <LoginScreen />
        </CustomTabs>
      </View>
    </SafeAreaView>
  );
};

export default Login;
