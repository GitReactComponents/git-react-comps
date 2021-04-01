module.exports = {
    readAllPosts: async (req, res) => {
        const db = req.app.get('db')
        const {component_id} = req.params
        const posts = await db.post_db.get_post_by_id(component_id)
        res.status(200).send(posts)
    },
    createPost: (req, res) => {
        const db = req.app.get('db')
        const {postText} = req.body
        const {userId, username} = req.session.user
        // const {component_id} = req.params
        db.post_db.add_post(postText, userId, username).then(post => {
            res.status(200).send(post)
        })
    },
    // editPost: (req, res) => {
    //     const db = req.app.get('db')
    //     const {postText, postId} = req.body
    //     const {userId} = req.session.user
    //     db.post_db.edit_post(postId, userId, postText).then(post => {
    //         res.status(200).send(post)
    //     })
    // }, 
    deletePost: (req, res) => {
        const db = req.app.get('db')
        const {postId} = req.body
        const {userId} = req.session.user
        db.post_db.delete_post(postId, userId).then(_ => {
            res.sendStatus(200)
        })
    }
}
