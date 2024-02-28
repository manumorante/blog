# Blog

Blog estático escrito en Markdown.

## Descripción

Tenemos una carpeta `posts` con archivos `file.md` escritos en **Markdown** a la que accedemos y con TypeScript en NextJS y obtenemos el contenido texto y ademas unas variables para cada post.

## Ejemplo de post y sus variables

```
---
title: "Post title"
date: "2023-08-12T19:00:00.000Z"
category: "Main"
---
```

## Manejo con Raycast

Se puede usar la extensión de Raycast [markdown-blog](https://www.raycast.com/pyronaur/markdown-blog) para así ver de un vistazo la carpeta de post `posts` y tener acceso a otra de `drafts`.

Hay una plantilla que se abre al comentar un nuevo drafts en `data/drafts/.template.md`. Más info sobre su uso en la web de la extensión.

## Tecnologías

Partiendo como base de una tamplate de Next pública.

- Nextjs
- TypeScript
- Markdown
- Raycast