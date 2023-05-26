import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const Container = styled.TouchableOpacity({
    flexDirection: 'row',
    alignItems: 'center',
    height: scale(50)
});

export const IconContainer = styled.View(({ theme }) => ({
    height: scale(45),
    width: scale(45),
    borderRadius: scale(45 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.components.placeItem.iconBackground
}));

export const IconImage = styled.Image(({ theme }) => ({
    width: scale(20),
    height: scale(20),
    tintColor: theme.colors.components.placeItem.iconTint
}))