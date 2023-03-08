import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/styles/variables.scss';`,
            },
        },
    },
    plugins: [react()],
})
