export default {
  name: 'people',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Principal Investigator', value: 'Principal Investigator'},
          {title: 'PhD Student', value: 'PhD Student'},
          {title: 'Master Student', value: 'Master Student'},
          {title: 'Undergraduate', value: 'Undergraduate'},
          {title: 'Postdoc', value: 'Postdoc'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Faculty', value: 'faculty'},
          {title: 'Students', value: 'students'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bioEn',
      title: 'Bio (English)',
      type: 'text',
    },
    {
      name: 'bioZh',
      title: 'Bio (Chinese)',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
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
  ],
}

