/**
 * @format
 * @type {import('next').NextConfig}
 */
const path = require('path');

/**
 * 描述
 * --自定义构建出口
 * --打包关闭sourcemap
 * --打包关闭eslint（选）
 * --打包关闭TS（选）
 * --配置sass
 * --svg作为组件引入
 * @date 2023-09-06
 */
const nextConfig = {
    distDir: 'build',
    productionBrowserSourceMaps: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.svg$/,
            loader: '@svgr/webpack',
        });
        return config;
    },
};

module.exports = nextConfig;
