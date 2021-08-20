import React, { useRef, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useSWRInfinite } from 'swr';
import { fetcher } from '../commons/utils';
import { Header, Post, StoriesSlider } from '../components';
import LottieView from 'lottie-react-native';

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
  align-items: center;
`;

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `https://api.thecatapi.com/v1/images/search?limit=10&page=${pageIndex}&order=Desc`;
};

const Home = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialData: [],
    revalidateOnMount: true,
  });

  const animation = useRef(null);

  const { top } = useSafeAreaInsets();

  const fetchMore = () => {
    setSize(size + 1);
  };

  return (
    <Container paddingTop={top}>
      {data.length > 0 && (
        <FlatList
          contentContainerStyle={{
            width: Dimensions.get('screen').width,
          }}
          ListHeaderComponent={
            <>
              <Header />

              <StoriesSlider />
            </>
          }
          data={data}
          keyExtractor={(item) => `Post__${item.id}`}
          renderItem={({ item }) => {
            return React.Children.toArray(
              item.map((cat) => <Post imageUrl={cat.url} />)
            );
          }}
          onEndReached={fetchMore}
          onEndReachedThreshold={0.9}
        />
      )}

      {data.length === 0 && (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 300,
            height: 300,
            backgroundColor: '#eee',
          }}
          source={require('../../assets/cat-loading.json')}
        />
      )}
    </Container>
  );
};

export default Home;
