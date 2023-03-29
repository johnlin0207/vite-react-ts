import { defineConfig, ConfigEnv, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [
      react(),
      viteMockServe({
        mockPath: './src/mock',
        prodEnabled: true, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        localEnabled: command === 'serve', // 开发打包开关
      }),
    ],
    // 配置项目别名
    resolve: {
      alias: {
        '@': _resolve('src'),
      },
    },
  };
});
