# Rollup
> Rollup 是一个 JavaScript 模块打包器

## 一些有用的插件

### 处理外部模块
[rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve)

### 转译commonjs模块到ES6
[rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs)

### 引入Babel
[rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
[babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
[babel-plugin-external-helpers](https://github.com/babel/babel/tree/master/packages/babel-plugin-external-helpers)

> options

|name|desc|type|default|
|---|---|---|---|
|babelrc|是否启用默认的配置|Boolean|true|


### 引入eslint
[rollup-plugin-eslint](https://github.com/TrySound/rollup-plugin-eslint)
[eslint](https://github.com/eslint/eslint)
[babel-eslint](https://github.com/babel/babel-eslint)

### 压缩/混淆代码
[rollup-plugin-babel-minify](https://github.com/Comandeer/rollup-plugin-babel-minify)

> options

|name|desc|type|default|
|---|---|---|---|
|comments|是否把注释打包|Boolean|true|
|sourceMap|是否把sourceMap打包|Boolean|true|


## 运行脚本查看结果

```bash
npm run build
```

- 会在dist目录生成2个文件

```bash
npm run gulp
```

- 会在dist目录生成2个带gulp的文件，与上面结果相同，是两种不同的打包方式