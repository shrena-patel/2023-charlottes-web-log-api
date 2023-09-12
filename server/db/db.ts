import { Post } from '../../models/post.ts';
import connection from './connection.ts'

export function getAllPosts(db = connection): Promise<Post[]> {
  return db('posts').select()
}

export function addPost(post: {title: string, text: string}, db = connection): Promise<Post[]> {
  return db('posts')
    .insert({...post, date_created: Date.now() })
    .returning('*')
}
