import { Image, Text, View } from '@tarojs/components';
import { Router } from 'tarojs-router-next';

const NewsList = ({ news, loading }) => {
  const handleClick = (id) => {
    console.log('id:', id);
    // tarojs-router 自动拼接，可传任意类型任意大小的数据
    Router.navigate(
      { url: '/pages/news_detail/news_detail' },
      { params: { id: id } }
    );
  };

  // news && console.log(news);
  return (
    <View>
      {loading ? (
        <View>loading...</View>
      ) : (
        news.map((n) => {
          return (
            <View key={n.uniquekey} className='m-4 text-neutral-700'>
              <View onClick={() => handleClick(n.uniquekey)}>
                <Text>{n.title}</Text>
                {n.thumbnail_pic_s && (
                  <View className='text-center mt-1'>
                    <Image src={n.thumbnail_pic_s} />
                  </View>
                )}
              </View>
              <View className='text-xs text-neutral-500 flex justify-between'>
                <Text>{n.author_name}</Text>
                <Text>{n.date}</Text>
              </View>
            </View>
          );
        })
      )}
    </View>
  );
};

export default NewsList;
