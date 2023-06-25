import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const StylesPressable = styled.Pressable(({ theme }) => ({
    height: scale(50),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.components.actionButton.backgrounColor
}))