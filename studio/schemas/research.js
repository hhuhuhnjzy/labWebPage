export default {
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    {
      name: 'title',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Algorithm (算法)', value: 'algorithm'},
          {title: 'Framework (框架)', value: 'framework'},
          {title: 'Application (应用)', value: 'application'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'participants',
      title: 'Participants',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of team members involved in this research',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Thumbnail image for the research project',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags like ICLR2025, NeurIPS2024, etc.',
    },
    {
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
    },
    {
      name: 'descriptionZh',
      title: 'Description (Chinese)',
      type: 'text',
    },
    {
      name: 'projectUrl',
      title: 'Project Website URL',
      type: 'url',
      description: 'Link to the project\'s own website',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{field: 'category', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {title, category, media} = selection
      const categoryLabels = {
        algorithm: '🔬 Algorithm',
        framework: '🏗️ Framework',
        application: '📱 Application',
      }
      return {
        title: title,
        subtitle: categoryLabels[category] || category,
        media: media,
      }
    },
  },
}


