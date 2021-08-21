import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AuxRow } from '../commons/components/AuxStyles';
import { decideSize } from '../commons/utils';
import { useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding: 0 16px;
  padding-bottom: ${decideSize(6)}px;
`;

const Action = styled.TouchableOpacity`
  margin-right: ${({ hasMargin }) => (hasMargin ? `${decideSize(17)}px` : 0)};
`;

const Logo = styled.Image``;

const Header = () => {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <Container>
      <Action>
        <Ionicons
          name="camera-outline"
          size={decideSize(24)}
          color={colors.text}
        />
      </Action>

      <Logo
        style={{
          tintColor: colorScheme === 'dark' ? 'white' : undefined,
        }}
        source={require('../../assets/images/logo.png')}
      />

      <AuxRow>
        <Action hasMargin>
          <MaterialIcons
            name="live-tv"
            size={decideSize(24)}
            color={colors.text}
          />
        </Action>
        <Action>
          <Ionicons
            name="paper-plane-outline"
            size={decideSize(24)}
            color={colors.text}
          />
        </Action>
      </AuxRow>
    </Container>
  );
};

export default Header;
