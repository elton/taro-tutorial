import { Image, Text, View } from '@tarojs/components';

const NewsList = ({ news, loading }) => {
  // news && console.log(news);
  return (
    <View>
      {loading ? (
        <View>loading...</View>
      ) : (
        news.map((n) => {
          return (
            <View key={n.uniquekey} className='m-4 text-neutral-700'>
              <View>
                <Text>{n.title}</Text>
                <View className='text-center mt-1'>
                  <Image src={n.thumbnail_pic_s} />
                </View>
              </View>
              <View className='text-xs text-neutral-500'>
                <Text>{n.author_name}</Text>
                <Text className='ml-2'>{n.date}</Text>
              </View>
            </View>
          );
        })
      )}
    </View>
  );
};

export default NewsList;
