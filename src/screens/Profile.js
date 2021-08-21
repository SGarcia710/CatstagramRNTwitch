import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';

import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { StoriesSlider } from '../components';
import { STORIES_DATA } from '../components/StoriesSlider';
import { decideSize } from '../commons/utils';
import { useColorScheme } from 'react-native-appearance';

const { width, height } = Dimensions.get('screen');

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

const Container = styled.View`
  padding-top: ${(props) => props.paddingTop}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: ${decideSize(11)}px;
`;
const UserName = styled.Text`
  margin: 0 ${decideSize(5)}px;

  font-size: ${decideSize(16)}px;
  line-height: ${decideSize(21)}px;
  font-weight: bold;
  letter-spacing: -${decideSize(0.33)}px;
  color: #262626;
`;
const MenuIcon = styled.TouchableOpacity`
  position: absolute;
  right: ${decideSize(16)}px;
`;

const HeroContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  margin-right: ${decideSize(28)}px;
  margin-bottom: ${decideSize(11)}px;
`;
const AvatarContainer = styled.View`
  width: ${decideSize(96)}px;
  height: ${decideSize(96)}px;
  border-radius: ${decideSize(96) / 2}px;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.Image`
  width: ${decideSize(86)}px;
  height: ${decideSize(86)}px;
  border-radius: ${decideSize(86) / 2}px;
`;
const StatContainer = styled.View`
  align-items: center;
`;
const StatCount = styled.Text`
  font-weight: bold;
  font-size: ${decideSize(16)}px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #262626;
`;
const StatName = styled.Text`
  font-size: 13px;
  line-height: ${decideSize(16)}px;
  letter-spacing: -${decideSize(0.1)}px;

  color: #262626;
`;

const UserInfo = styled.View`
  margin: 0 ${decideSize(16)}px;
  margin-bottom: ${decideSize(15)}px;
`;
const FullName = styled.Text`
  margin-bottom: ${decideSize(4)}px;

  font-weight: bold;
  font-size: ${decideSize(12)}px;
  line-height: ${decideSize(14)}px;

  color: #262626;
`;
const Description = styled.Text`
  margin-bottom: ${decideSize(4)}px;
  font-size: ${decideSize(12)}px;
  line-height: ${decideSize(17)}px;
  color: #262626;
`;
const Link = styled.Text`
  font-size: ${decideSize(12)}px;
  line-height: ${decideSize(17)}px;
  color: #3d66ee;
  margin-bottom: ${decideSize(15)}px;
`;

const EditProfileButton = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 100%;

  justify-content: center;
  align-items: center;
  border-radius: ${decideSize(6)}px;
  padding: ${decideSize(5)}px 0;
  margin-bottom: ${decideSize(16)}px;
`;
const EditProfileText = styled.Text`
  font-weight: bold;
  font-size: ${decideSize(13)}px;
  line-height: ${decideSize(18)}px;
  letter-spacing: -${decideSize(0.1)}px;

  color: #262626;
`;

const Tabs = styled.View`
  flex-direction: row;
`;

const Tab = styled.TouchableOpacity`
  width: ${width / 2}px;
  height: ${decideSize(44)}px;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const MiniImage = styled.Image`
  width: ${width / 3}px;
  height: ${width / 3}px;
`;

const Profile = () => {
  const { top } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(0);
  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <Container paddingTop={top}>
      <ScrollView>
        <Header>
          <Entypo name="lock" size={14} color={colors.text} />
          <UserName
            style={{
              color: colors.text,
            }}
          >
            sgarcia
          </UserName>
          <TouchableOpacity>
            <Ionicons name="chevron-down" size={16} color={colors.text} />
          </TouchableOpacity>

          <MenuIcon>
            <Ionicons name="menu-outline" size={24} color={colors.text} />
          </MenuIcon>
        </Header>

        <HeroContainer>
          <AvatarContainer
            style={{
              borderWidth: decideSize(1.5),
              borderColor: '#C7C7CC',
            }}
          >
            <Avatar
              source={{ uri: 'https://sebastiangarcia.dev/images/avatar.jpg' }}
            />
          </AvatarContainer>

          <StatContainer>
            <StatCount
              style={{
                color: colors.text,
              }}
            >
              54
            </StatCount>
            <StatName
              style={{
                color: colors.text,
              }}
            >
              Posts
            </StatName>
          </StatContainer>
          <StatContainer>
            <StatCount
              style={{
                color: colors.text,
              }}
            >
              1623
            </StatCount>
            <StatName
              style={{
                color: colors.text,
              }}
            >
              Followers
            </StatName>
          </StatContainer>
          <StatContainer>
            <StatCount
              style={{
                color: colors.text,
              }}
            >
              802
            </StatCount>
            <StatName
              style={{
                color: colors.text,
              }}
            >
              Following
            </StatName>
          </StatContainer>
        </HeroContainer>

        <UserInfo>
          <FullName
            style={{
              color: colors.text,
            }}
          >
            Sebastian Garcia
          </FullName>
          <Description
            style={{
              color: colors.text,
            }}
            numberOfLines={3}
          >
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

        <Tabs>
          <Tab
            style={{
              borderBottomWidth: selectedTab === 0,
              borderBottomColor: colors.text,
            }}
            onPress={() => setSelectedTab(0)}
          >
            <MaterialIcons
              name="grid-on"
              size={decideSize(24)}
              color={
                selectedTab === 0
                  ? colors.text
                  : colorScheme === 'dark'
                  ? 'rgba(255,255,255,0.4)'
                  : 'rgba(0,0,0,0.4)'
              }
            />
          </Tab>

          <Tab
            style={{
              borderBottomWidth: selectedTab === 1,
              borderBottomColor: colors.text,
            }}
            onPress={() => setSelectedTab(1)}
          >
            <Image
              style={{
                tintColor:
                  selectedTab === 1
                    ? colorScheme === 'dark'
                      ? 'white'
                      : undefined
                    : colorScheme === 'dark'
                    ? 'rgba(255,255,255,0.4)'
                    : 'rgba(0,0,0,0.4)',
              }}
              source={require('../../assets/icons/UserTags.png')}
            />
          </Tab>
        </Tabs>
        <Grid>
          {React.Children.toArray(
            STORIES_DATA.map((story) => (
              <MiniImage source={{ uri: story.url }} />
            ))
          )}
        </Grid>
      </ScrollView>
    </Container>
  );
};

export default Profile;
