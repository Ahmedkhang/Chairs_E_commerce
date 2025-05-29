import { defineField, Rule } from '@sanity/types'

import { validation } from 'sanity';
const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: "id",
        type: "string",
        title: "Product ID",
      },
      {
        name: 'name',
        type: 'string',
        title: 'product',
      },
      
      {
        name:'slug',
        type:'slug',
        title:'slug',
        options:{
          source:'Food Name',
          maxLength:80,
        },
        validation:(Rule:Rule) =>Rule.required()  
      },
      
    defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Office', value: 'office' },
            { title: 'Dining', value: 'dining' },
            { title: 'Lounge', value: 'lounge' },
            { title: 'Gaming', value: 'gaming' },
            { title: 'Arm Chair', value: 'Arm Chair' },
            { title: 'Wing Chair', value: 'Wing Chair' },
            { title: 'Sofa', value: 'Sofa' },
            // { title: 'Arm Chair', value: 'Arm Chair' },
            // { title: 'Arm Chair', value: 'Arm Chair' },
          ],
        },
        validation: (Rule) => Rule.required(),
      }),
      {
        name: 'price',
        type: 'number',
        title: 'Current Price',
      },
      {
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Price before discount (if any)',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the food item',
      },
      defineField({
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule) => Rule.min(0).max(5),
      }),
      {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
      {
        name:"inventory",
        title:"Inventory",
        type:"number"
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
      },
    ],

  };
  export default product


//   import { defineField, defineType } from 'sanity';

// export default defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'images',
//       title: 'Images',
//       type: 'array',
//       of: [{ type: 'image' }],
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: 'stock',
//       title: 'Stock',
//       type: 'number',
//       validation: (Rule) => Rule.required().min(0),
//     }),
    
//   ],
// });
