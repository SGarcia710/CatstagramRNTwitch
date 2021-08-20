import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Ionicons, Entypo } from '@expo/vector-icons';
import { StoriesSlider } from '../components';

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 11px;
`;
const UserName = styled.Text`
  margin: 0 5px;

  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: -0.33px;
  color: #262626;
`;
const MenuIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

const HeroContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  margin-right: 28px;
  margin-bottom: 11px;
`;
const AvatarContainer = styled.View`
  width: 96px;
  height: 96px;
  border-radius: ${96 / 2}px;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 86px;
  height: 86px;
  border-radius: ${86 / 2}px;
`;
const StatContainer = styled.View`
  align-items: center;
`;
const StatCount = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #262626;
`;
const StatName = styled.Text`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.1px;

  color: #262626;
`;

const UserInfo = styled.View`
  margin: 0 16px;
`;
const FullName = styled.Text`
  margin-bottom: 4px;

  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #262626;
`;
const Description = styled.Text`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 17px;
  color: #262626;
`;
const Link = styled.Text`
  font-size: 12px;
  line-height: 17px;
  color: #3d66ee;
  margin-bottom: 15px;
`;

const EditProfileButton = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 100%;

  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 5px 0;
  margin-bottom: 16px;
`;
const EditProfileText = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;

  color: #262626;
`;

const DATA = [
  {
    url: 'https://images.pexels.com/photos/3063910/pexels-photo-3063910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'Friends 😁',
  },
  {
    url: 'https://images.pexels.com/photos/6573247/pexels-photo-6573247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'Sports ⚽',
  },
  {
    url: 'https://images.pexels.com/photos/756024/pexels-photo-756024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userName: 'Traveling ✈️',
  },
];

const Profile = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Container paddingTop={top}>
      <Header>
        <Entypo name="lock" size={14} color="#262626" />
        <UserName>sgarcia</UserName>
        <TouchableOpacity>
          <Ionicons name="chevron-down" size={16} color="#262626" />
        </TouchableOpacity>

        <MenuIcon>
          <Ionicons name="menu-outline" size={24} color="#262626" />
        </MenuIcon>
      </Header>

      <HeroContainer>
        <AvatarContainer
          style={{
            borderWidth: 1.5,
            borderColor: '#C7C7CC',
          }}
        >
          <Avatar
            source={{ uri: 'https://sebastiangarcia.dev/images/avatar.jpg' }}
          />
        </AvatarContainer>

        <StatContainer>
          <StatCount>54</StatCount>
          <StatName>Posts</StatName>
        </StatContainer>
        <StatContainer>
          <StatCount>1623</StatCount>
          <StatName>Followers</StatName>
        </StatContainer>
        <StatContainer>
          <StatCount>802</StatCount>
          <StatName>Following</StatName>
        </StatContainer>
      </HeroContainer>

      <UserInfo>
        <FullName>Sebastian Garcia</FullName>
        <Description numberOfLines={3}>
          Digital goodies designer @pixsellz Everything is designed.
        </Description>
        <TouchableOpacity>
          <Link>sebastiangarcia.dev</Link>
        </TouchableOpacity>
        <EditProfileButton
          style={{
            borderWidth: 1,
            borderColor: 'rgba(60, 60, 67, 0.18)',
          }}
        >
          <EditProfileText>Edit Profile</EditProfileText>
        </EditProfileButton>
        <StoriesSlider data={DATA} areHighlightStories />
      </UserInfo>
    </Container>
  );
};

export default Profile;
