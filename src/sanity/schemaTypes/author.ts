import { defineType, defineField, defineArrayMember } from 'sanity';

export const author = defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Author Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        defineArrayMember({ type: 'url' }),
      ],
    }),
  ],
});
