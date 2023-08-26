import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Post Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'Here you can choose the type category your blog is, which will appear on the card and be searchable',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
