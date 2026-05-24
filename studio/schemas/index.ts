import { defineType, defineField } from 'sanity'

// Schema for Products (Notebooks and Stickers)
export const product = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Anotador', value: 'notebook' },
          { title: 'Sticker', value: 'sticker' },
          { title: 'Pack', value: 'pack' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (€)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'compareAtPrice',
      title: 'Precio anterior (€)',
      type: 'number',
      description: 'Deja vacío si no hay descuento',
    }),
    defineField({
      name: 'stock',
      title: 'Stock disponible',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Destacado en homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'customizable',
      title: '¿Se puede personalizar?',
      type: 'boolean',
      initialValue: false,
      description: 'Si está marcado, el cliente puede añadir texto personalizado',
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },
    prepare(selection) {
      const { title, media, price } = selection
      return {
        title,
        subtitle: `€${price}`,
        media,
      }
    },
  },
})

// Schema for Blog Posts
export const post = defineType({
  name: 'post',
  title: 'Entrada de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, author, media } = selection
      return {
        title,
        subtitle: author ? `por ${author}` : 'Sin autor',
        media,
      }
    },
  },
})

// Block content type for blog posts
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Contenido enriquecido',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Cita', value: 'blockquote' },
      ],
      lists: [{ title: 'Lista', value: 'bullet' }],
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
})
