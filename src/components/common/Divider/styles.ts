import styled from "@emotion/native";
import { StyleSheet } from "react-native";

export const StyleDivider = styled.View(({ theme }) => ({
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: theme.colors.components.divider.backgroundColor
}))