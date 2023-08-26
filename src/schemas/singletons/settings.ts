import { CheckmarkIcon, CogIcon, Icon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'pageLinks',
      title: 'Page Links',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            { type: 'home' },
            { type: 'gallery' },
            { type: 'about' },
            { type: 'blog' },
          ],
        },
      ],
    }),
    defineField({
      name: 'externalLinks',
      title: 'External Links',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: CheckmarkIcon,
          fields: [
            {
              name: "image",
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              }
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      };
    },
  },
});
