import { theme } from "@/src/theme/theme";
import styled from "@emotion/native";
import { scale } from 'react-native-size-matters';

export const BodyText = styled.Text(({ theme }) => ({
    fontSize: scale(14),
    color: theme.colors.typography.body
}));

export const TitleText = styled.Text(({ theme }) => ({
    fontSize: scale(15),
    fontWeight: '700',
    color: theme.colors.typography.common
}));

export const CaptionText = styled.Text(({ theme }) => ({
    fontSize: scale(13),
    color: theme.colors.typography.body
}))