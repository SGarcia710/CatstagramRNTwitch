import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { AuxRow } from '../commons/components/AuxStyles';

const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding: 0 16px;
  padding-bottom: 6px;
`;

const Action = styled.TouchableOpacity`
  margin-right: ${({ hasMargin }) => (hasMargin ? '17px' : 0)};
`;

const Logo = styled.Image``;

const Header = () => {
  return (
    <Container>
      <Action>
        <Ionicons name="camera-outline" size={24} color="black" />
      </Action>

      <Logo source={require('../../assets/images/logo.png')} />

      <AuxRow>
        <Action hasMargin>
          <MaterialIcons name="live-tv" size={24} color="black" />
        </Action>
        <Action>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </Action>
      </AuxRow>
    </Container>
  );
};

export default Header;
