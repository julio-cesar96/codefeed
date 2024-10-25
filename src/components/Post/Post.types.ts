export interface Author {
    avatar_url: string;
    name: string;
    role: string;
}

export interface Content {
    id: number
    type: 'paragraph' | 'link';
    content: string;
}
export interface PostProps {
    id: number
    author: Author;
    publishedAt: Date;
    content: Content[];
}