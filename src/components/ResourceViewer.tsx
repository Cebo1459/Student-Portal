import React from 'react';

interface Resource {
    title: string;
    description: string;
    link: string;
}

interface ResourceViewerProps {
    resource: Resource;
}

const ResourceViewer: React.FC<ResourceViewerProps> = ({ resource }) => {
    return (
        <div className="resource-viewer">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                View Resource
            </a>
        </div>
    );
};

export default ResourceViewer;