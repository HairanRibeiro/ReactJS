import React from 'react';
import { ViewBase, Text, View, StyleSheet,Animated,TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({data, handLeft}){

function LeftActions(progress, dragX){

    const scale = dragX.interpolate({
        inputRange: [0.100],
        outputRange:[0,1],
        extrapoLate: 'clamp'
    })
    
    return(
        <View style={styles.leftAction}>
            <Animated.Text style={[styles.actionText,{ transform: [{ scale }] }]}>Concluir</Animated.Text>
        </View>
    );
}

function RightActions(progress, dragX){

    const scale = dragX.interpolate({
        inputRange: [0.100],
        outputRange:[0,1],
        extrapoLate: 'clamp'
    })
    
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.leftAction}>
            <Animated.Text style={[styles.actionText,{ transform: [{ scale }] }]}>Concluir</Animated.Text>
        </View>
        </TouchableOpacity>
    );
}

    return(
        <Swipeable
        renderLeftActions={LeftActions}
        onSwipeableLeftOpen={hendleLeft}
        renderRightActions={(progress, dragX)=> <RightActions progress={progress} dragX={dragX} onPress={handleRight} />}
        >
            <View style={styles.container}>
                <Text style={styles.text}> {data.tarefa} </Text>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 40,
    },
    text:{
        fontSize: 17,
        color: '#222'
    },
    leftAction:{
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex:1,
    },
    actionText:{
        fontSize: 17,
        color: '#FFF',
        padding: 20
    }
});