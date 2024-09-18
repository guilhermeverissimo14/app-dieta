import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Header } from '@/components/header';
import { colors } from '@/constants/Colors';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Create() {
    return (
        <View style={styles.container} >
            <Header
                step='Passo 2'
                title='Finalizando dieta'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: 16,
    },
    label: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 8
    },
    button: {
        backgroundColor: colors.blue,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    buttonText: {
        color: colors.white,
        fontSize: 16
    }
})