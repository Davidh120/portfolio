import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    write: true,
    onEnd: () => {
      fs.writeFile('./dist/CNAME', 'www.davidherediadev.com', (err) => {
        if (err) throw err;
        console.log('CNAME file has been created.');
      });
    },
  },
});
