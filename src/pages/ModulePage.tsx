import React from 'react';
import { ResourceCard } from '../components/ResourceCard';
import { useParams } from 'react-router-dom';

const ModulePage: React.FC = () => {
    const { moduleId } = useParams<{ moduleId: string }>();

    // Sample data for resources related to the module
    const resources = [
        {
            id: 1,
            title: 'Introduction to Algorithms',
            description: 'A comprehensive guide to algorithms.',
            link: '/resources/algorithms'
        },
        {
            id: 2,
            title: 'Data Structures',
            description: 'Learn about various data structures.',
            link: '/resources/data-structures'
        },
        {
            id: 3,
            title: 'Operating Systems',
            description: 'Understanding the fundamentals of operating systems.',
            link: '/resources/operating-systems'
        }
    ];

    return (
        <div>
            <h1>Module: {moduleId}</h1>
            <div>
                {resources.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
};

export default ModulePage;