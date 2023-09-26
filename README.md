启动项目

// 启动开发环境
npm run dev

// 构建
npm run build

// 启动生产环境
npm run start

// 格式化所有文件
npm run prettier

// 检查格式
npm run lint

// 提交代码检查所有格式
npm run prepare

目前支持哪些功能？

1.  自定义入口文件，支持自定义页面结构
2.  提供完整的app入口封装
3.  封装状态管理，默认提供全局管理样式、语言、用户功能
4.  封装网络接口，提供重连、mock模拟功能以及美化请求进度条
5.  配置sass，默认提供重置样式、默认样式、主题
6.  提供一些基础utils以供使用
7.  配置基础eslint规则校验
8.  配置基础prettier格式校验
9.  配置基础stylelint样式校验
10. 提交代码自动检测代码格式
11. 提供开发、生产环境入口文件
12. 配置next基本配置文件

第三方包：
// dependencies
react-redux             状态管理库
@reduxjs/toolkit        状态管理工具
axios                   网络请求工具
axios-retry             网络重连
js-cookie               cookie管理
mockjs                  模拟接口
nprogress               进度条


// devDependencies
@svgr/webpack           svg图片作为组件引入
@typescript-eslint/eslint-plugin
                        用于TS的ESLint规则
@typescript-eslint/parser
                        用于TS的ESLint规则的解析器
eslint                  代码规则
eslint-plugin-prettier  用于prettier的ESLint规则
eslint-plugin-react     用于React的ESLint规则
eslint-plugin-react-hooks
                        用于React Hooks的ESLint规则
prettier                代码格式
stylelint               样式格式
stylelint-config-standard
                        样式标准
postcss-sass            postcss的sass解析器
pretty-quick            提交代码规范
husky                   调用git hook
sass                    css处理器
