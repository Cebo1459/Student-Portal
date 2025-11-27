import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ResourceCard from '../components/ResourceCard';

const Dashboard: React.FC = () => {
    const resources = [
        { title: 'Introduction to Algorithms', description: 'A comprehensive guide to algorithms.', link: '#' },
        { title: 'Clean Code', description: 'A Handbook of Agile Software Craftsmanship.', link: '#' },
        { title: 'Design Patterns', description: 'Elements of Reusable Object-Oriented Software.', link: '#' },
        // Add more resources as needed
    ];

    return (
        <div>
            <Header />
            <Navigation />
            <h1>Welcome to the Study Resources Portal</h1>
            <h2>Available Resources</h2>
            <div className="resource-list">
                {resources.map((resource, index) => (
                    <ResourceCard key={index} title={resource.title} description={resource.description} link={resource.link} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;