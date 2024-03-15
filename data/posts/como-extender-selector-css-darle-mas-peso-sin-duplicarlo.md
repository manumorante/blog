---
title: "Como extender un selector CSS y darle más peso 'sin duplicarlo'"
summary: "Los invitados que no se dejan colorear"
date: "2024-03-15"
cover: "/extend-important.jpg"
---

Cuando un componente externo no se puede personalizar con estilos, es común tener que crear un nuevo CSS con `!important` para poder aplicar modificadores como `primary` o `secondary`. Sin embargo, esto puede resultar en tener dos versiones del mismo selector en producción.

## Problema

Al instalar un componente externo en nuestra web, sus estilos muy específicos no pueden ser modificados. Esto nos obliga a escribir un nuevo CSS con `!important` para poder aplicar modificadores.

## Solución

Gracias a `@extend`, no es necesario mantener un selector duplicado para aplicar cambios. Podemos añadir más especificidad utilizando `body`.

```css
.a-button {
  display: block;
  background: white;
  color: black;
}
```

## Selector duplicado

```
body .a-button-important {
  @extend .a-button;
}
```

### Notas

- **Especificidad:** forma en la que los navegadores determinan qué valores de una propiedad CSS son más relevantes para un elemento.
