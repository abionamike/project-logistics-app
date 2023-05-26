import React from 'react'
import { Container, IconContainer, IconImage } from './styles'

interface PlaceItemProps {
  name: string,
  address: string,
  iconUrl: string,
  onPress: () => void,
}

const PlaceItem = ({ onPress, iconUrl }: PlaceItemProps) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <IconImage source={{ uri: iconUrl }} />
      </IconContainer>
    </Container>
  )
}

export default PlaceItem