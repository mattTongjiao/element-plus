## Card

Muestra información dentro de un contenedor `card`

### Uso Básico

`Card` incluye titulo, contenido y operaciones.

:::demo Card se compone de cabecera y cuerpo. La cabecera es opcional y la colocación de su contenido depende de un slot con nombre.

```html
<tj-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>Card name</span>
      <tj-button class="button" type="text">Operation button</tj-button>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</tj-card>

<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### Card simple

La parte de la cabecera puede omitirse.

:::demo

```html
<tj-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</tj-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### Con imágenes

Muestre un contenido más rico añadiendo algunas configuraciones.

:::demo Tj atributo `body-style` define el estilo CSS del `body` personalizado. Este ejemplo también utiliza `tj-col` para el layout.

```html
<tj-row>
  <tj-col
    :span="8"
    v-for="(o, index) in 2"
    :key="o"
    :offset="index > 0 ? 2 : 0"
  >
    <tj-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <tj-button type="text" class="button">Operating</tj-button>
        </div>
      </div>
    </tj-card>
  </tj-col>
</tj-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
      }
    },
  }
</script>
```

:::

### Shadow

Puede definir cuándo mostrar las sombras.

:::demo Tj atributo de sombra determina cuándo se muestran las sombras. Puede ser `always`, `hover` o `never`.

```html
<tj-row :gutter="12">
  <tj-col :span="8">
    <tj-card shadow="always">
      Always
    </tj-card>
  </tj-col>
  <tj-col :span="8">
    <tj-card shadow="hover">
      Hover
    </tj-card>
  </tj-col>
  <tj-col :span="8">
    <tj-card shadow="never">
      Never
    </tj-card>
  </tj-col>
</tj-row>
```

:::

### Atributos

| Atributo   | Descripción                                                  | Tipo   | Valores aceptados      | Por defecto         |
| ---------- | ------------------------------------------------------------ | ------ | ---------------------- | ------------------- |
| header     | Titulo del card. También acepta DOM pasado por `slot#header` | string | —                      | —                   |
| body-style | Estilo CSS del cuerpo                                        | object | —                      | { padding: '20px' } |
| shadow     | cuando mostrar la sombra del Card                            | string | always / hover / never | always              |
