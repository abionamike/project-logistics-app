const pallete = {
    white: "#FFF",
    black: "#000",
    grey: "rgba(34, 34, 34, 0.8)",
    lightGrey: "rgba(100, 100, 100, 0.35)",
    lightergrey: "rgba(100, 100, 100, 0.1)",
    blue: "#4A80F5"
}

export const colors = {
    typography: {
        body: pallete.grey,
        textDisabled: pallete.lightGrey,
        common: pallete.black,
    },
    common: {
        background: pallete.white,
        shadowDefault: pallete.black,
    },
    components: {
        mapSearchBar: {
            squareColor: pallete.black
        },
        destinationInput: {
            disabledBackground: pallete.lightergrey,
            activeBackground: pallete.lightGrey
        },
        destinationModal: {
            decoratorCircle: pallete.lightGrey,
            decoratorSquare: pallete.black
        },
        divider: {
            backgroundColor: pallete.lightGrey
        },
        placeItem: {
            iconBackground: pallete.blue,
            iconTint: pallete.white
        }
    },
    screens: {
        mapScreen: {
            directionsStroke: pallete.blue
        }
    }
}

export type Colors = typeof colors;