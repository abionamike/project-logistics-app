import Spacer from "@/components/common/Spacer"
import DestinationInput from "../DestinationInput"
import { Container, DecoratorCircle, DecoratorContainer, DecoratorLine, DecoratorSquare, HorizontalContainer, InputContainer } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { scale } from 'react-native-size-matters'
import Divider from "@/components/common/Divider"

interface FlatListHeaderProps {
    destinationValue: string;
    onDestinationTextChange: (text: string) => void;
}

const FlatListHeader = ({ destinationValue, onDestinationTextChange }: FlatListHeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <>
            <Container>
                <Spacer height={insets.top + scale(60)} />
                <HorizontalContainer>
                    <DecoratorContainer>
                        <DecoratorCircle />
                        <DecoratorLine />
                        <DecoratorSquare />
                    </DecoratorContainer>
                    <Spacer width={scale(10)} />
                    <InputContainer>
                        <DestinationInput disabled placeholder="Current Location" />
                        <Spacer height={scale(10)} />
                        <DestinationInput 
                            value={destinationValue}  
                            onChangeText={onDestinationTextChange}
                        />
                    </InputContainer>
                </HorizontalContainer>
                <Spacer height={scale(15)} />
                <Divider />
            </Container>
            <Spacer height={scale(15)} />
        </>
    )
}

export default FlatListHeader