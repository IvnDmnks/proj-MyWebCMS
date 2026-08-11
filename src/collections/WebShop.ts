import { CollectionConfig } from 'payload';

const WebShop: CollectionConfig = {
    slug: 'webshop',
    admin: {
        description: 'Web Shop Items',
        useAsTitle: 'itemName',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'itemName',
            type: 'text',
            required: true,
            label: 'Item Name',
        },
        {
            name: 'itemDescription',
            type: 'textarea',
            required: true,
            label: 'Item Description',
        },
        {
            name: 'itemPrice',
            type: 'number',
            required: true,
            label: 'Item Price',
        },
        {
            name: 'itemImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
            label: 'Item Image',
        },
        {
            name: 'itemAvailability',
            type: 'select',
            options: [
                {
                    label: 'In Stock',
                    value: 'in_stock',
                },
                {
                    label: 'Out of Stock',
                    value: 'out_of_stock',
                },
            ],
            defaultValue: 'in_stock',
            required: true,
            label: 'Item Availability',
        },
    ],  
};

export default WebShop;