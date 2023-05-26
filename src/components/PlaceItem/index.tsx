import React from 'react'
import { Container, IconContainer, IconImage, TextContainer } from './styles'
import CustomText from '../common/CustomText'
import Spacer from '../common/Spacer'
import { scale } from 'react-native-size-matters'
import Divider from '../common/Divider'

interface PlaceItemProps {
  name: string,
  address: string,
  iconUrl: string,
  onPress: () => void,
}

const PlaceItem = ({ onPress, iconUrl, name, address }: PlaceItemProps) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <IconImage source={{ uri: iconUrl }} />
      </IconContainer>
      <Spacer width={scale(10)} />
      <TextContainer>
        <CustomText variant='title'>{name}</CustomText>
        <Spacer height={scale(3)} />
        <CustomText variant='caption'>{address}</CustomText>
        <Spacer height={scale(5)} />
        <Divider />
      </TextContainer>
    </Container>
  )
}

export default PlaceItem