import type { CollectionConfig } from 'payload'

const MyPhotos: CollectionConfig = {
    slug: "photo-categories",
    access: {
        read: () => true,
    },
    labels: {
        singular: 'Fotó Kategória',
        plural: 'Fotó Kategóriák'
    },
    admin: {
        useAsTitle: 'name'
    },
    fields: [
        {
            name: 'name',
            type: 'text', 
            required: true,
            label: 'Kategória neve'
        },
        {
            name: 'coverImage',
            type: 'upload',
            required: true, 
            relationTo: 'media',
            label: 'Borítókép'
        },
        {
            name: 'images',
            type: 'array',
            label: 'Galéria Képek',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                }
            ]
        }
    ]
}

export default MyPhotos;