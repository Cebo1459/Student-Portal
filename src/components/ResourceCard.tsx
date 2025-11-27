import React from 'react';

interface ResourceCardProps {
    title: string;
    description: string;
    link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link }) => {
    return (
        <div className="resource-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Resource</a>
        </div>
    );
};

export default ResourceCard;