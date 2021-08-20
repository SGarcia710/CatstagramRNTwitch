import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useState } from 'react';
import { AuxBoldText, AuxRow } from '../commons/components/AuxStyles';

const { width, height } = Dimensions.get('screen');

const Container = styled.View``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 11px 10px;
  align-items: center;
`;

const AuthorAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: ${32 / 2}px;
  margin-right: 10px;
`;
const HeaderInfo = styled.View``;
const AuthorName = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 1px;
`;
const PostLocation = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
`;
const PostImage = styled.Image`
  width: ${width}px;
  height: 375px;
`;

const PostActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 8px 0;
`;
const Action = styled.TouchableOpacity`
  margin-right: ${({ hasMargin }) => (hasMargin ? '17px' : 0)};
`;

const HorizontalMargin = styled.View`
  padding-left: 14px;
  padding-right: 14px;
`;

const Likes = styled.View`
  flex-direction: row;

  align-items: center;
  margin-bottom: 5px;
`;
const LikeImage = styled.Image`
  width: 17px;
  height: 17px;
  border-radius: ${17 / 2}px;
  margin-right: 6.5px;
`;
const LikeText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.07px;
`;

const Description = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
  margin-bottom: 8px;
`;

const Age = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.05px;

  color: rgba(0, 0, 0, 0.4);
`;

const Post = (props) => {
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <Header>
        <AuxRow>
          <AuthorAvatar
            source={{ uri: 'https://sebastiangarcia.dev/images/avatar.jpg' }}
          />
          <HeaderInfo>
            <AuthorName>sgarcia</AuthorName>
            <PostLocation>Tokyo, Japan</PostLocation>
          </HeaderInfo>
        </AuxRow>
        <TouchableOpacity
          onPress={() => {
            console.log('Hola, me presionaste');
          }}
        >
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </Header>

      <PostImage source={{ uri: props.imageUrl }} />

      <HorizontalMargin>
        <PostActions>
          <AuxRow>
            <Action
              onPress={() => {
                setLiked(!liked);
              }}
              hasMargin
            >
              <Ionicons
                name={`ios-heart-${liked ? 'sharp' : 'outline'}`}
                size={26}
                color={liked ? 'red' : 'black'}
              />
            </Action>
            <Action hasMargin>
              <FontAwesome name="comment-o" size={24} color="black" />
            </Action>
            <Action>
              <Ionicons name="paper-plane-outline" size={24} color="black" />
            </Action>
          </AuxRow>

          <Action>
            <FontAwesome name="bookmark-o" size={24} color="black" />
          </Action>
        </PostActions>

        <Likes>
          <LikeImage
            source={{ uri: 'https://sebastiangarcia.dev/images/avatar.jpg' }}
          />
          <LikeText>
            Liked by <AuxBoldText>craig_love</AuxBoldText> and{' '}
            <AuxBoldText> 44,686 others</AuxBoldText>
          </LikeText>
        </Likes>

        <Description numberOfLines={3}>
          <AuthorName>sgarcia</AuthorName> The game in Japan was amazing and I
          want to share some photos
        </Description>

        <Age>2h ago</Age>
      </HorizontalMargin>
    </Container>
  );
};

export default Post;
