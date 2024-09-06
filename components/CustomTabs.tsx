import React, { useState, ReactNode } from 'react';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';

interface TabsProps {
  tabs: string[];
  children: ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  console.log('children', children);
  const [activeTab, setActiveTab] = useState<number>(0);

  const getMessage = () => {
    switch (activeTab) {
      case 0:
        return 'Welcome to Indra! Register your account!';
      case 1:
        return 'Welcome back! Glad to see you again!';
      default:
        return '';
    }
  };

  return (
    <View className="w-full h-full">
      <View className="py-5">
        <Text className="text-white text-[28px] font-medium leading-[33.89px] text-left font-InterMedium">
          {getMessage()}
        </Text>
      </View>
      {/* Tab Section Background */}
      <View className="bg-[#787878] p-2 rounded-[12px] mb-0">
        {/* Tab Buttons */}
        <View className="flex flex-row justify-around">
          {tabs.map((tab, index) => (
            <CustomButton
              key={index}
              onPress={() => setActiveTab(index)}
              title={tab}
              bgVariant={activeTab === index ? 'active-tab' : 'inactive-tab'}
              textVariant={activeTab === index ? 'secondary' : 'inactive-tab'}
              className={`w-1/2 px-4 ${
                activeTab === index ? 'rounded-[10px]' : ''
              }`}
            />
          ))}
        </View>
      </View>

      {/* Tab Content */}
      <View className="flex-1">{children[activeTab]}</View>
    </View>
  );
};

export default Tabs;
