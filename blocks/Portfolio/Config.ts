import { Block } from 'payload/types';
import PortfolioType from '../../collections/Portfolio';

export const PortfolioItems: Block = {
  slug: 'portfolio-items',
  labels: {
    singular: 'Portfolio-Item',
    plural: 'Portfolio-Items',
  },
  fields: [
    {
      name: 'vehicle',
      label: 'Vehicle',
      type: 'relationship',
      relationTo: 'portfolio',
      required: true,
    },
  ],
};
