export default {
  name: 'publications',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Paper Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'Conference or Journal name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'string',
      description: 'e.g., "December 2025"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    },
    {
      name: 'pdfUrl',
      title: 'PDF Link',
      type: 'url',
    },
    {
      name: 'codeUrl',
      title: 'Code Link',
      type: 'url',
    },
    {
      name: 'slidesUrl',
      title: 'Slides Link',
      type: 'url',
    },
    {
      name: 'demoUrl',
      title: 'Demo Link',
      type: 'url',
    },
    {
      name: 'blogUrl',
      title: 'Blog Link',
      type: 'url',
    },
  ],
  orderings: [
    {
      title: 'Publication Date (Newest First)',
      name: 'dateDesc',
      by: [{field: 'year', direction: 'desc'}, {field: 'date', direction: 'desc'}],
    },
  ],
}

