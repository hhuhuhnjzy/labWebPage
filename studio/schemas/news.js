export default {
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleZh',
      title: 'Title (Chinese)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descriptionZh',
      title: 'Description (Chinese)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g., "Fall 2025" or "December 2025"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Publish Date (Newest First)',
      name: 'publishedDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'date',
    },
  },
}

