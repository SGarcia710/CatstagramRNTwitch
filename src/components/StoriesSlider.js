import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    url: 'https://images.pexels.com/photos/3991140/pexels-photo-3991140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'sgarcia',
  },
  {
    url: 'https://images.pexels.com/photos/6311487/pexels-photo-6311487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'sanneck',
  },
  {
    url: 'https://images.pexels.com/photos/5572096/pexels-photo-5572096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'ramaatrpa',
  },
  {
    url: 'https://images.pexels.com/photos/3241793/pexels-photo-3241793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'Aleee321',
  },
  {
    url: 'https://images.pexels.com/photos/7210516/pexels-photo-7210516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'thotibest',
  },
  {
    url: 'https://images.pexels.com/photos/8567535/pexels-photo-8567535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'pipe110',
  },
  {
    url: 'https://images.pexels.com/photos/6524730/pexels-photo-6524730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'asrolan98',
  },
  {
    url: 'https://images.pexels.com/photos/9216171/pexels-photo-9216171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'soydevrock',
  },
];
const Container = styled.ScrollView`
  width: 100%;
`;

const UserStory = styled.TouchableOpacity`
  margin-right: ${({ hasMarginRight }) => (hasMarginRight ? '21px' : '10px')};
  margin-left: ${({ hasMarginLeft }) => (hasMarginLeft ? '10px' : '0')};
  align-items: center;
`;

const CircleContainer = styled(LinearGradient)`
  margin-bottom: 5px;
  width: 62px;
  height: 62px;
  border-radius: ${62 / 2}px;

  align-items: center;
  justify-content: center;
`;
const HighlightCircle = styled.View`
  margin-bottom: 5px;
  width: 62px;
  height: 62px;
  border-radius: ${62 / 2}px;

  align-items: center;
  justify-content: center;
`;

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: ${56 / 2}px;
`;

const UserName = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01px;
  color: #262626;
`;

const StoriesSlider = (props) => {
  const _data = props.data ? props.data : DATA;
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {!!props.areHighlightStories && (
        <UserStory hasMarginRight>
          <HighlightCircle
            style={{
              borderWidth: 1,
              borderColor: '#C7C7CC',
            }}
          >
            <Ionicons name="add" size={22} color="black" />
          </HighlightCircle>

          <UserName>New</UserName>
        </UserStory>
      )}
      {React.Children.toArray(
        _data.map((user, index) => (
          <UserStory
            hasMarginRight={index === _data.length - 1 ? false : true}
            hasMarginLeft={
              index === 0 && !props.areHighlightStories ? true : false
            }
          >
            <CircleContainer
              colors={
                props.areHighlightStories
                  ? ['#C7C7CC', '#C7C7CC']
                  : ['#FBAA47', '#D91A46', '#A60F93']
              }
            >
              <Avatar
                style={{
                  borderWidth: 1.5,
                  borderColor: 'white',
                }}
                source={{ uri: user.url }}
              />
            </CircleContainer>
            <UserName>{user.userName}</UserName>
          </UserStory>
        ))
      )}
    </Container>
  );
};

export default StoriesSlider;
