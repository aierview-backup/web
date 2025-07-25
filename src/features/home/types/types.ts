export type Technology = {
    id: number;
    icon: string;
    altText: string;
};

export type InterviewType = {
    id: number;
    title: string;
    mainIcon: string;
    altText: string;
    type: string;
    description: string;
    technologies: Technology[];
};
