import React from 'react'
import { Button, View } from 'react-native'

const ButtonComponent = () => {
    return (
        <View>
            <Button title='Button' onPress={() => console.log("button")} />
        </View>
    )
}

export default ButtonComponent