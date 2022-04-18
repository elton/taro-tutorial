import { Text, View } from '@tarojs/components';
import { useReady } from '@tarojs/taro';
import { useState } from 'react';

const Index = () => {
  const [msg, setMsg] = useState('Hello World');

  // 表示组件首次渲染完毕，准备好与视图交互。
  useReady(() => {
    console.log('This app is ready.');
    setMsg('小程序启动成功！');
  });

  return (
    <View>
      <Text className='text-3xl text-amber-700 m-4'>{msg}</Text>
    </View>
  );
};

export default Index;
