## Link

Texto con hipervinculo

### Básico

Texto con hipervinculo básico
:::demo

```html
<div>
  <tj-link href="https://element.eleme.io" target="_blank">default</tj-link>
  <tj-link type="primary">primary</tj-link>
  <tj-link type="success">success</tj-link>
  <tj-link type="warning">warning</tj-link>
  <tj-link type="danger">danger</tj-link>
  <tj-link type="info">info</tj-link>
</div>
```

:::

### Deshabilitar

Deshabilita el hipervinculo
:::demo

```html
<div>
  <tj-link disabled>default</tj-link>
  <tj-link type="primary" disabled>primary</tj-link>
  <tj-link type="success" disabled>success</tj-link>
  <tj-link type="warning" disabled>warning</tj-link>
  <tj-link type="danger" disabled>danger</tj-link>
  <tj-link type="info" disabled>info</tj-link>
</div>
```

:::

### Subrayado

Subrayado del hipervinculo
:::demo

```html
<div>
  <tj-link :underline="false">Without Underline</tj-link>
  <tj-link>With Underline</tj-link>
</div>
```

:::

### Icono

Hipervinculo con icono
:::demo

```html
<div>
  <tj-link icon="tj-icon-edit">Edit</tj-link>
  <tj-link>Check<i class="tj-icon-view tj-icon--right"></i> </tj-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervinculo estara subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervinculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
