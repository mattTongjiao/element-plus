## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<tj-row>
  <tj-button>Default</tj-button>
  <tj-button type="primary">Primary</tj-button>
  <tj-button type="success">Success</tj-button>
  <tj-button type="info">Info</tj-button>
  <tj-button type="warning">Warning</tj-button>
  <tj-button type="danger">Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain>Plain</tj-button>
  <tj-button type="primary" plain>Primary</tj-button>
  <tj-button type="success" plain>Success</tj-button>
  <tj-button type="info" plain>Info</tj-button>
  <tj-button type="warning" plain>Warning</tj-button>
  <tj-button type="danger" plain>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button round>Round</tj-button>
  <tj-button type="primary" round>Primary</tj-button>
  <tj-button type="success" round>Success</tj-button>
  <tj-button type="info" round>Info</tj-button>
  <tj-button type="warning" round>Warning</tj-button>
  <tj-button type="danger" round>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button icon="tj-icon-search" circle></tj-button>
  <tj-button type="primary" icon="tj-icon-edit" circle></tj-button>
  <tj-button type="success" icon="tj-icon-check" circle></tj-button>
  <tj-button type="info" icon="tj-icon-message" circle></tj-button>
  <tj-button type="warning" icon="tj-icon-star-off" circle></tj-button>
  <tj-button type="danger" icon="tj-icon-delete" circle></tj-button>
</tj-row>
```

:::

### Botón deshabilitado

Tj atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<tj-row>
  <tj-button disabled>Default</tj-button>
  <tj-button type="primary" disabled>Primary</tj-button>
  <tj-button type="success" disabled>Success</tj-button>
  <tj-button type="info" disabled>Info</tj-button>
  <tj-button type="warning" disabled>Warning</tj-button>
  <tj-button type="danger" disabled>Danger</tj-button>
</tj-row>

<tj-row>
  <tj-button plain disabled>Plain</tj-button>
  <tj-button type="primary" plain disabled>Primary</tj-button>
  <tj-button type="success" plain disabled>Success</tj-button>
  <tj-button type="info" plain disabled>Info</tj-button>
  <tj-button type="warning" plain disabled>Warning</tj-button>
  <tj-button type="danger" plain disabled>Danger</tj-button>
</tj-row>
```

:::

### Botón de texto

Botones sin borde ni fondo.

:::demo

```html
<tj-button type="text">Text Button</tj-button>
<tj-button type="text" disabled>Text Button</tj-button>
```

:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<tj-button type="primary" icon="tj-icon-edit"></tj-button>
<tj-button type="primary" icon="tj-icon-share"></tj-button>
<tj-button type="primary" icon="tj-icon-delete"></tj-button>
<tj-button type="primary" icon="tj-icon-search">Search</tj-button>
<tj-button type="primary"
  >Upload<i class="tj-icon-upload tj-icon-right"></i
></tj-button>
```

:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<tj-button-group>` para agrupar sus botones.

```html
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-arrow-left">Previous Page</tj-button>
  <tj-button type="primary"
    >Next Page<i class="tj-icon-arrow-right tj-icon-right"></i
  ></tj-button>
</tj-button-group>
<tj-button-group>
  <tj-button type="primary" icon="tj-icon-edit"></tj-button>
  <tj-button type="primary" icon="tj-icon-share"></tj-button>
  <tj-button type="primary" icon="tj-icon-delete"></tj-button>
</tj-button-group>
```

:::

### Botón de descarga

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<tj-button type="primary" :loading="true">Loading</tj-button>
```

:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<tj-row>
  <tj-button>Default</tj-button>
  <tj-button size="medium">Medium</tj-button>
  <tj-button size="small">Small</tj-button>
  <tj-button size="mini">Mini</tj-button>
</tj-row>
<tj-row>
  <tj-button round>Default</tj-button>
  <tj-button size="medium" round>Medium</tj-button>
  <tj-button size="small" round>Small</tj-button>
  <tj-button size="mini" round>Mini</tj-button>
</tj-row>
```

:::

### Atributos

| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |
