<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/tongjiaoui-plus">
    <img src="https://img.shields.io/npm/v/tongjiaoui-plus.svg">
  </a>
  <a href="https://npmcharts.com/compare/tongjiaoui-plus?minimal=true">
    <img src="http://img.shields.io/npm/dm/tongjiaoui-plus.svg">
  </a>
  <br>
</p>

<p align="center">Tongjiao UI - A Vue.js 3.0 UI library</p>

- 💪 Vue 3.0 Composition API
- 🔥 Written in TypeScript

## Status: Beta

This project is still under heavy development. Feel free to join us and make your first pull request.

[![Edit tongjiaoui-plus](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/tongjiaoui-plus-ncxnt?fontsize=14&hidenavigation=1&theme=dark)

<br/>
<p align="center">
  <b>Special thanks to the generous sponsorship by:</b>
</p>
<br/>
<table align="center" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://www.duohui.cn/?utm_source=element&utm_medium=web&utm_campaign=element-index" target="_blank">
          <img width="150px" src="https://user-images.githubusercontent.com/10731096/100414179-11741980-30b4-11eb-9ee3-4d0a30d4e21d.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://bit.dev/?from=element-ui" target="_blank">
          <img width="150px" src="https://user-images.githubusercontent.com/10095631/41342907-e44e7196-6f2f-11e8-92f2-47702dc8f059.png">
        </a>
      </td>
    </tr>
  </tbody>
</table>

---

## Documentation

You can find for more details, API, and other docs on [https://tongjiaoui-plus.org](https://tongjiaoui-plus.org/)

国内[加速镜像站点](https://tongjiaoui-plus.gitee.io/)

Join our [Discord](https://discord.link/TongjiaoUIPlus) to start communicating with everybody.

## Bootstrap project

With command

```bash
$ yarn bootstrap
```

the project will install all dependencies and run `lerna bootstrap` to initialize the project

## Website preview

With command

```bash
$ yarn website-dev
```

the project will launch website for you to preview all existing component

You can also use this command to start a blank page to debug

```bash
$ yarn website-dev:play
//source file: ./website/play/index.vue
```

## Component migration process

1. Convert the item in https://github.com/tongjiaoui-plus/tongjiaoui-plus/projects/1 to an issue
2. Assign yourself to the issue
3. Author your component by generating new component command below
4. Migrate tests and docs
5. Open a new pull request, fill in the component issue link in 1

## Generate new component

With command

```bash
$ yarn gen component-name
```

Note the `component-name` must be in `kebab-case`, combining words by replacing each space with a dash.

## Commit template

With command

```bash
yarn cz
```

Example

```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]
# example feat(button):add type 'button' for form usage #1234
```
