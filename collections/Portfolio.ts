import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';

export type GolfCart = {
  make: string;
  model: string;
  year: number;
  description: string;
  image: MediaType;
};

export type Bus = {
  make: string;
  model: string;
  year: number;
  description: string;
  image: MediaType;
};

const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  access: {
    read: (): boolean => true,
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        {
          label: 'Golf Cart',
          value: 'golf-cart',
        },
        {
          label: 'Bus',
          value: 'bus',
        },
      ],
      required: true,
    },
    {
      name: 'make',
      label: 'Make',
      type: 'text',
      required: true,
    },
    {
      name: 'model',
      label: 'Model',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      label: 'Year',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Portfolio;
