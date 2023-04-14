import { CollectionConfig } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

export const Page: CollectionConfig = {
    slug: 'posts',
    admin: {
      useAsTitle: 'title',
    },
    access: {
      read: (): boolean => true, // Everyone can read Posts
    },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "text",
            required: true
          },
          {
            name: "author",
            label: "Author",
            type: "text",
            required: true
          },
          {
            name: "date",
            label: "Date",
            type: "date",
            required: true
          },
          {
            name: "content",
            label: "Content",
            type: "richText",
            required: true
          },
          {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
          },
          {
            name: "tags",
            label: "Tags",
            type: "tags",
            required: false
            admin: {
                position: 'sidebar',
          },    
          {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
            hooks: {
              beforeValidate: [
                formatSlug('title'),
            ],
        },
      },
    ],
  };

  export default Posts;