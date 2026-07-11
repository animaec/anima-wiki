# Ánima Wiki

Wiki comunitaria de Ánima Espacio Cultural, generada con [Retype](https://retype.com/).

## Estructura

```
.
├── docs/
│   ├── index.md              # Home
│   ├── la-comunidad/         # Quiénes somos, cómo funciona
│   ├── participar/           # Modalidades, tarifas, proponer proyecto
│   └── informacion/          # Convivencia, comunicación, FAQ, contacto
├── retype.yml                # Configuración del sitio (branding, nav)
└── package.json
```

Cada carpeta agrupa páginas relacionadas y tiene un `index.yml` con su label y orden en el menú. Cada página markdown define `title`, `description` y `order` en su frontmatter.

## Comandos

| Comando          | Acción                                     |
| :--------------- | :------------------------------------------ |
| `npm install`     | Instala dependencias                        |
| `npm run dev`     | Corre el servidor local en `localhost:5000`  |
| `npm run build`   | Genera el sitio estático en `./dist/`        |

## Más info

[Documentación de Retype](https://retype.com/)
