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
  try {
    const post = req.body
    const addedPostResult = await addPost(post)
    res.json(addedPostResult[0])
  } catch (err) {
    console.log(err)
  }
})


