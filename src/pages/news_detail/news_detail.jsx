import { RichText, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { Router } from 'tarojs-router-next';

const NewsDetail = () => {
  const params = Router.getParams();
  console.log('newsID: ', params.id);

  const [detail, setDetail] = useState({});
  const [content, setContent] = useState('');

  useEffect(() => {
    try {
      Taro.request({
        url:
          'https://v.juhe.cn/toutiao/content?key=e7eb489fc2dd2a193e3c40b1b2f581e6&uniquekey=' +
          params.id,
        success: (res) => {
          setDetail(res.data.result.detail);
          setContent(res.data.result.content);
        },
      });
    } catch (e) {
      Taro.showToast({
        title: '载入远程数据出错',
      });
    }
  }, [params.id]);

  return (
    <View className='container m-4 text-sm'>
      <View>
        <Text className='text-xl'>{detail?.title}</Text>
      </View>
      <View className='text-sm text-neutral-500 flex justify-between my-2'>
        <Text>{detail?.author_name}</Text>
        <Text>{detail?.date}</Text>
      </View>
      <RichText
        className='leading-relaxed space-y-2 text-neutral-800'
        nodes={content}
      />
    </View>
  );
};

export default NewsDetail;
