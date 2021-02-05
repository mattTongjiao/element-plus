## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<tj-badge :value="12" class="item">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge :value="3" class="item">
  <tj-button size="small">replies</tj-button>
</tj-badge>
<tj-badge :value="1" class="item" type="primary">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge :value="2" class="item" type="warning">
  <tj-button size="small">replies</tj-button>
</tj-badge>

<tj-dropdown trigger="click">
  <span class="tj-dropdown-link">
    Click Me<i class="tj-icon-caret-bottom tj-icon--right"></i>
  </span>
  <template #dropdown>
    <tj-dropdown-menu>
      <tj-dropdown-item class="clearfix">
        comments
        <tj-badge class="mark" :value="12" />
      </tj-dropdown-item>
      <tj-dropdown-item class="clearfix">
        replies
        <tj-badge class="mark" :value="3" />
      </tj-dropdown-item>
    </tj-dropdown-menu>
  </template>
</tj-dropdown>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<tj-badge :value="200" :max="99" class="item">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge :value="100" :max="10" class="item">
  <tj-button size="small">replies</tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<tj-badge value="new" class="item">
  <tj-button size="small">comments</tj-button>
</tj-badge>
<tj-badge value="hot" class="item">
  <tj-button size="small">replies</tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<tj-badge is-dot class="item">query</tj-badge>
<tj-badge is-dot class="item">
  <tj-button
    class="share-button"
    icon="tj-icon-share"
    type="primary"
  ></tj-button>
</tj-badge>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::

### Attributes

| Attribute | Description                                                                      | Type           | Accepted Values                             | Default |
| --------- | -------------------------------------------------------------------------------- | -------------- | ------------------------------------------- | ------- |
| value     | display value                                                                    | string, number | —                                           | —       |
| max       | maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number` | number         | —                                           | —       |
| is-dot    | if a little dot is displayed                                                     | boolean        | —                                           | false   |
| hidden    | hidden badge                                                                     | boolean        | —                                           | false   |
| type      | button type                                                                      | string         | primary / success / warning / danger / info | —       |
