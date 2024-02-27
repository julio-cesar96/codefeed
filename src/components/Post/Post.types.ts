export interface Author {
    avatar_url: string;
    name: string;
    role: string;
}

export interface Content {
    title: string;
    paragraphs: string[];
}
export interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content;
}