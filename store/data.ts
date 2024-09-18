import { create } from 'zustand';


export type UserData = {
    name: string;
    weight: string,
    age: string,
    height: string,
    level: string,
    objective: string,
    gender: string
}

type DataState = {
    user: UserData,
    setPageOne: (data: Omit<UserData, "gender" | "objective" | "level">) => void
    setPageTwo: (data: Pick<UserData, "gender" | "objective" | "level">) => void
}

export const useDataStore = create<DataState>((set) => ({
    user: {
        name: "",
        weight: "",
        age: "",
        height: "",
        level: "",
        objective: "",
        gender: ""
    },
    //mantém o que já tem + data que vai mandar só os campos especificos.
    setPageOne: (data) => set((state) => ({ user: { ...state.user, ...data } })),
    //mantém o que já tem + data que vai mandar só os campos especificos.
    setPageTwo: (data) => set((state) => ({ user: { ...state.user, ...data } })),
}))