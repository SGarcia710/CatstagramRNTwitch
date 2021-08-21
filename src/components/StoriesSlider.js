import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import { decideSize } from '../commons/utils';
import { useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

export const STORIES_DATA = [
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
  {
    url: 'https://images.pexels.com/photos/8671839/pexels-photo-8671839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'edwarddica',
  },
];

const Container = styled.ScrollView`
  width: 100%;
  padding-top: ${decideSize(9)}px;
  padding-bottom: ${decideSize(8)}px;
`;

const UserStory = styled.TouchableOpacity`
  margin-right: ${({ hasMarginRight }) => (hasMarginRight ? '21px' : '10px')};
  margin-left: ${({ hasMarginLeft }) => (hasMarginLeft ? '10px' : '0')};
  align-items: center;
`;

const CircleContainer = styled(LinearGradient)`
  margin-bottom: ${decideSize(5)}px;
  width: ${decideSize(62)}px;
  height: ${decideSize(62)}px;
  border-radius: ${decideSize(62) / 2}px;

  align-items: center;
  justify-content: center;
`;
const HighlightCircle = styled.View`
  margin-bottom: ${decideSize(5)}px;
  width: ${decideSize(62)}px;
  height: ${decideSize(62)}px;
  border-radius: ${decideSize(62) / 2}px;

  align-items: center;
  justify-content: center;
`;

const Avatar = styled.Image`
  width: ${decideSize(56)}px;
  height: ${decideSize(56)}px;
  border-radius: ${decideSize(56) / 2}px;
`;

const UserName = styled.Text`
  font-size: ${decideSize(12)}px;
  line-height: ${decideSize(14)}px;
  text-align: center;
  letter-spacing: -${decideSize(0.01)}px;
  color: #262626;
`;

const StoriesSlider = (props) => {
  const { colors } = useTheme();
  const colorSchema = useColorScheme();
  const _data = props.data ? props.data : STORIES_DATA;
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
            <Ionicons name="add" size={decideSize(22)} color={colors.text} />
          </HighlightCircle>

          <UserName
            style={{
              color: colors.text,
            }}
          >
            New
          </UserName>
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
                  borderColor: colorSchema === 'dark' ? 'black' : 'white',
                }}
                source={{ uri: user.url }}
              />
            </CircleContainer>
            <UserName
              style={{
                color: colors.text,
              }}
            >
              {user.userName}
            </UserName>
          </UserStory>
        ))
      )}
    </Container>
  );
};

export default StoriesSlider;
