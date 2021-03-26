module.exports = {
    readAllPosts: (req, res) => {
        const db = req.app.get('db')
        db.post_db.get_post().then(posts => {
            res.status(200).send(posts)
        })
    },
    createPost: (req, res) => {
        const db = req.app.get('db')
        const {postText} = req.body
        const {userId, userName} = req.session.user
        db.post_db.add_post(postText, userId, userName).then(post => {
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
