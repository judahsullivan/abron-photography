import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client',
  type: 'document',
  title: 'Client',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'coverimage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: "Here is where you can choose to place a description of the photoshoot",
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'image',
      type: 'array',
      title: 'Client Images',
      of: [{ type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})
