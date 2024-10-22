export interface Author {
    avatar_url: string;
    name: string;
    role: string;
}

export interface Content {
    type: 'paragraph' | 'link';
    content: string;
}
export interface PostProps {
    id?: number
    author: Author;
    publishedAt: Date;
    content: Content[];
}