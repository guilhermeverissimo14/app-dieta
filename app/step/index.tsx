import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Header } from '@/components/header';
import { Input } from '@/components/input';
import { colors } from '@/constants/Colors';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
    name: z.string().min(1, { message: 'O nome é obrigatório' }),
    weight: z.string().min(1, { message: 'O peso é obrigatório' }),
    age: z.string().min(1, { message: 'A idade é obrigatória' }),
    height: z.string().min(1, { message: 'A altura é obrigatória' }),

})

type FormData = z.infer<typeof schema>;

export default function Step() {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })


    return (
        <View style={styles.container}>

            <Header
                step='passo 1'
                title='Vamos começar'
            />

            <ScrollView style={styles.content}>

                <Text style={styles.label}>Nome:</Text>
                <Input
                    name='name'
                    control={control}
                    placeholder='Digite seu nome...'
                    error={errors.name?.message}
                    keyboardType='default'
                />

                <Text style={styles.label}>Seu peso atual:</Text>
                <Input
                    name='weight'
                    control={control}
                    placeholder='Ex: 75'
                    error={errors.weight?.message}
                    keyboardType='numeric'
                />

                <Text style={styles.label}>Seu altura atual:</Text>
                <Input
                    name='height'
                    control={control}
                    placeholder='Ex: 1.90'
                    error={errors.height?.message}
                    keyboardType='numeric'
                />

                <Text style={styles.label}>Seu idade atual:</Text>
                <Input
                    name='age'
                    control={control}
                    placeholder='Ex: 23'
                    error={errors.age?.message}
                    keyboardType='numeric'
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Avaçar</Text>
                </TouchableOpacity>

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
    },
    label: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8
    },
    button: {
        backgroundColor: colors.blue,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
});