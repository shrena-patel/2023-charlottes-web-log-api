import express from 'express'
import { addPost, getAllPosts } from '../db/db'

const router = express.Router()

export default router

router.get('/', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.json(posts)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  const post = req.body
  console.log(post, 'post')
  const addedPostResult = await addPost(post)
  console.log(addedPostResult)
  res.json(addedPostResult[0])
})


