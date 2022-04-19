import { View } from '@tarojs/components';
import Taro, {
  usePullDownRefresh,
  useReachBottom,
  useReady,
} from '@tarojs/taro';
import { useEffect, useState } from 'react';
import NewsList from '../../components/NewsList';

const Index = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      Taro.request({
        url:
          'https://v.juhe.cn/toutiao/index?type=top&page=' +
          page +
          '&page_size=10&key=e7eb489fc2dd2a193e3c40b1b2f581e6',
        success: (res) => {
          // console.log('data:', res.data.result.data);
          console.log('page:', page);
          setNews(Object.assign(news, res.data.result.data));
          console.log('news:', news);
          setLoading(false);
        },
      });
    } catch (e) {
      Taro.showToast({
        title: '载入远程数据出错',
      });
    }
  }, [page, news]);

  usePullDownRefresh(() => {
    setPage(page + 1);
    console.log('pull down refresh');
  });

  // 监听上拉触底事件
  useReachBottom(() => {
    console.log('reach the bottom of this page');
  });

  // 表示组件首次渲染完毕，准备好与视图交互。
  useReady(() => {
    console.log('This app is ready.');
    setPage(() => page + 1);
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

Index.config = {
  navigationBarTitleText: '首页',
  enablePullDownRefresh: true,
  onReachBottomDistance: 50,
};

export default Index;
