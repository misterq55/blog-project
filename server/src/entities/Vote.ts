import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import BaseEntity from "./Entity";
import { User } from "./User"
import Post from "./Post"
import Comment from "./Comment";

@Entity("votes")
export default class vote extends BaseEntity {
    @Column()
    value: number;

    @ManyToOne(() => User)
    @JoinColumn({name: "username", referencedColumnName: "username"})
    user: User

    @Column()
    username: string;

    @Column({nullable: true})
    postId: number;
    
    @ManyToOne(() => Post)
    post: Post;

    @Column({nullable: true})
    commentId: number;

    @ManyToOne(() => Comment)
    comment: Comment
}