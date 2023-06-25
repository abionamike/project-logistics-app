import styled from "@emotion/native";
import Animated from "react-native-reanimated";
import { scale } from "react-native-size-matters";

export const Container = styled(Animated.View)(({ theme }) => ({
    height: scale(120),
    backgroundColor: theme.colors.common.background,
    width: '100%',
    alignItems: 'center'
}));

export const HorizontalContainer = styled.View({
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    paddingHorizontal: scale(20)
});

export const IconsContainer = styled.View(({ theme }) => ({
    width: scale(65),
    height: scale(38),
    borderRadius: scale(65 / 2),
    backgroundColor: theme.colors.components.rideBottomSheet.footerRightIconBackground,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    flexDirection: 'row'
}));

export const LeftIconContainer = styled.View(({ theme }) => ({
    width: scale(38),
    height: scale(38),
    borderRadius: scale(38 / 2),
    backgroundColor: theme.colors.components.rideBottomSheet.footerLeftIconBackground,
    alignItems: 'center',
    justifyContent: 'center',
    left: scale(-8)
}));

export const TextContainer = styled.View({
    flex: 1
});