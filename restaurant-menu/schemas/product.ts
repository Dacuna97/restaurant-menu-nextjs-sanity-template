export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'string',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        maxLength: 200, // will be ignored if slugify is set
        source: (doc: any, context: any) => doc.title.en,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'string',
        },
      ],
    },
    {
      name: 'allergens',
      title: 'Allergens',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'string',
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: `title.es`,
    },
  },
}
