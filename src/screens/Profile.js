import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`;

const Profile = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Container paddingTop={top}>
      <Text>Profile</Text>
    </Container>
  );
};

export default Profile;
