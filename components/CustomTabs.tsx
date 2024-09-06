import React, { useState, ReactNode } from 'react';
import { View } from 'react-native';
import CustomButton from './CustomButton';

interface TabsProps {
  tabs: string[];
  children: ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <View className="w-full">
      {/* Tab Section Background */}
      <View className="bg-[#787878] p-2 rounded-[12px] mb-4 ">
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
