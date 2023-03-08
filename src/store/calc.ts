import {create} from 'zustand';

interface SwitcherState {
    switcher: string;
    firstVariable: number;
    secondVariable: number;
    operand: string;
    result: number;
    displayed: number;
    setSwitcher: (value: string) => void;
    setFirstVariable: (value: number) => void;
    setSecondVariable: (value: number) => void;
    setOperand: (value: string) => void;
    setResult: (value: number) => void;
    setDisplayed: (value: number) => void;
}

const useStore = create<SwitcherState>((set) => ({
    switcher: 'Constructor',
    firstVariable: 0,
    secondVariable: 0,
    operand: '',
    result: 0,
    displayed: 0,
    setSwitcher: (value) => set(() => ({switcher: value})),
    setFirstVariable: (value) => set(() => ({firstVariable: value})),
    setSecondVariable: (value) => set(() => ({secondVariable: value})),
    setOperand: (value) => set(() => ({operand: value})),
    setResult: (value) => set(() => ({result: value})),
    setDisplayed: (value) => set(() => ({displayed: value}))
}));

export default useStore;