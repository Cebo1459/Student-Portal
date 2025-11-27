// src/utils/helpers.ts

export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const filterResourcesByType = (resources: any[], type: string): any[] => {
    return resources.filter(resource => resource.type === type);
};

export const sortResourcesByTitle = (resources: any[]): any[] => {
    return resources.sort((a, b) => a.title.localeCompare(b.title));
};