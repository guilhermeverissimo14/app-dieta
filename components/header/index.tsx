import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

interface HeaderProps {
    step: string;
    title: string;
}

export function Header({ step, title }: HeaderProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <View style={styles.row}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Feather name='arrow-left' size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        {step}
                        <Feather name='loader' size={16} color="#000" />
                    </Text>
                </View>

                <Text style={styles.title}>
                    {title}
                </Text>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        marginBottom: 14,

        // A logica desse trecho de codigo e a seguinte se ele estiver no 
        // android ele vai pegar a altura do status bar e somar com 34, senão
        //  ele vai somar 34 porque o SafeArea é um componente 
        // que vai garantir que o conteúdo não fique por baixo da status bar

        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34,
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 34,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: colors.black,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.background
    }

})