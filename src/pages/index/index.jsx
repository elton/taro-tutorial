import { View } from '@tarojs/components';
import Taro, { useReady } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import NewsList from '../../components/NewsList';

const Index = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      Taro.request({
        url: 'https://v.juhe.cn/toutiao/index?type=top&page_size=10&key=e7eb489fc2dd2a193e3c40b1b2f581e6',
        success: (res) => {
          // console.log('data:', res.data.result.data);
          setNews(res.data.result.data);
          setLoading(false);
        },
      });
    } catch (e) {
      Taro.showToast({
        title: '载入远程数据出错',
      });
    }
  }, []);

  // 表示组件首次渲染完毕，准备好与视图交互。
  useReady(() => {
    console.log('This app is ready.');
  });

  return (
    <View>
      <NewsList news={news} loading={loading} />

      {/* {news.map((n) => {
        return <View>{n.title}</View>;
      })} */}
    </View>
  );
};

export default Index;
