
export interface Comment {
    id: number;
    content: string;
}

export interface CommentProps {
    comment: Comment;
    deleteComment: (id: number) => void;
}