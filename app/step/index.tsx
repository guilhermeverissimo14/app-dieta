import { Header } from '@/components/header';
import { colors } from '@/constants/Colors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Step() {
    return (
        <View style={styles.container}>

            <Header
                step='passo 1'
                title='Vamos começar'
            />

            <ScrollView style={styles.content}>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
    }
});