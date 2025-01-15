export interface CreatePostDTO{
    title:string;
    content:string;
    tags:string[];
    published:boolean
}

export interface PostResponseDTO {
    _id: string;
    title: string;
    content: string;
    tags: string[];
    published: boolean;
    createdAt: string;
    updatedAt: string;
}