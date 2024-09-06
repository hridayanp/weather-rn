import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTabs from '@/components/CustomTabs';

const SignupScreen = () => (
  <View className="p-4 mt-20">
    <Text className="text-red mt-20">Signup Form</Text>
    {/* Add your signup form components here */}
  </View>
);

const LoginScreen = () => (
  <View className="p-4">
    <Text className="text-red mt-20">Login Form</Text>
    {/* Add your login form components here */}
  </View>
);

const Login = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#0B1D29] p-6">
      <CustomTabs tabs={['Signup', 'Login']}>
        <SignupScreen />
        <LoginScreen />
      </CustomTabs>
    </SafeAreaView>
  );
};

export default Login;
