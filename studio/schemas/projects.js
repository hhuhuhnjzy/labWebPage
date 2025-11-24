export default {
  name: 'projects',
  title: 'Research Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
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
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'Ongoing'},
          {title: 'Planning', value: 'Planning'},
          {title: 'Completed', value: 'Completed'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'collaborators',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
    },
    {
      name: 'paperUrl',
      title: 'Paper URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}

