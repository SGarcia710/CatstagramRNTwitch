import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import useSWR from 'swr';
import { fetcher } from '../commons/utils';
import { Post } from '../components';
import LottieView from 'lottie-react-native';

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
  align-items: center;
`;

const URL =
  'https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc';

const Home = () => {
  const { data, error } = useSWR(URL, fetcher, {
    initialData: [],
    revalidateOnMount: true,
  });
  const animation = useRef(null);

  const { top } = useSafeAreaInsets();

  return (
    <Container paddingTop={top}>
      {data.length > 0 && (
        <ScrollView>
          {React.Children.toArray(
            data.map((item) => {
              return <Post imageUrl={item.url} />;
            })
          )}
        </ScrollView>
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
