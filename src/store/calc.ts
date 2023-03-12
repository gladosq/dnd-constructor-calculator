import {create} from 'zustand';

interface SwitcherState {
    switcher: string;
    operand: string;
    result: number;
    displayed: number | string;
    isDisplayActive: boolean;
    setSwitcher: (value: string) => void;
    setOperand: (value: string) => void;
    setResult: (value: number) => void;
    setDisplayed: (value: number | string) => void;
    setIsDisplayActive: (value: boolean) => void;
}

const useStore = create<SwitcherState>((set) => ({
    switcher: 'Constructor',
    firstVariable: 0,
    secondVariable: 0,
    operand: '',
    result: 0,
    displayed: 0,
    isDisplayActive: true,
    setSwitcher: (value) => set(() => {
        if (value === 'Constructor') {
            return {
                displayed: 0,
                result: 0,
                operand: '',
                switcher: value
            }
        }

        return {switcher: value}
    }),
    setOperand: (value) => set(() => ({operand: value})),
    setResult: (value) => set(() => ({result: value})),
    setDisplayed: (value) => set(() => ({displayed: value})),
    setIsDisplayActive: (value) => set(() => ({isDisplayActive: value}))
}));

export default useStore;