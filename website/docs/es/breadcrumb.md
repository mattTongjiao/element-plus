## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico

:::demo En `tj-breadcrumb`, cada `tj-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el carácter separador. Tj valor por defecto es '/'.

```html
<tj-breadcrumb separator="/">
  <tj-breadcrumb-item :to="{ path: '/' }">homepage</tj-breadcrumb-item>
  <tj-breadcrumb-item><a href="/">promotion management</a></tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion list</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion detail</tj-breadcrumb-item>
</tj-breadcrumb>
```

:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<tj-breadcrumb separator-class="tj-icon-arrow-right">
  <tj-breadcrumb-item :to="{ path: '/' }">homepage</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion management</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion list</tj-breadcrumb-item>
  <tj-breadcrumb-item>promotion detail</tj-breadcrumb-item>
</tj-breadcrumb>
```

:::

### Breadcrumb atributos

| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | carácter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos

| Atributo | Descripción                                                   | Tipo          | Valores aceptados | Por defecto |
| -------- | ------------------------------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router`              | string/object | —                 | —           |
| replace  | si `true`, la navegación no dejara una entrada en la historia | boolean       | —                 | false       |
