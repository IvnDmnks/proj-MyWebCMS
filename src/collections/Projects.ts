import {CollectionConfig} from 'payload';

const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        description: 'Projects I have worked on',
        useAsTitle: 'ProjTitle',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'ProjTitle',
            type: 'text',
            required: true,
            label: 'Project Title',
        },
        {
            name: 'descriptionHU',
            type: 'textarea',
            required: true,
            label: 'Project Description HU',
        },
        {
            name: 'descriptionEN',
            type: 'textarea',
            required: true,
            label: 'Project Description EN'
        },
        {
            name: 'ProjLink',
            type: 'text',
            required: false,
            label: 'Github Repository Link',
        },
        {
            name: 'Availability',
            type: 'select',
            options: [
                {
                    label: 'Under Development',
                    value: 'under_development',
                },
                {
                    label: 'Production Ready',
                    value: 'production_ready',
                },
            ],
            defaultValue: 'under_development',
            required: true,
            label: 'Project Availability',
        },
    ],
}

export default Projects;