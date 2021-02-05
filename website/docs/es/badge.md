## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

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

### Valor máximo

Se puede personalizar el valor máximo.

:::demo Tj valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

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

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

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

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

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

### Atributos

| Atributo | Descripción                                                                              | Tipo           | Valores aceptados                           | Por defecto |
| -------- | ---------------------------------------------------------------------------------------- | -------------- | ------------------------------------------- | ----------- |
| value    | valor a mostrar                                                                          | string, number | —                                           | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                                           | —           |
| is-dot   | si se debe mostrar un pequeño punto                                                      | boolean        | —                                           | false       |
| hidden   | oculta el badge                                                                          | boolean        | —                                           | false       |
| type     | tipo de botón                                                                            | string         | primary / success / warning / danger / info | —           |
