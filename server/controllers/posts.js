module.exports = {
    readPosts: (req, res) => {
        const db = req.app.get('db')
        db.post_db.get_post().then(posts => {
            res.status(200).send(posts)
        })
    },
    createPost: (req, res) => {
        const db = req.app.get('db')
        const {postText} = req.body
        db.post_db.add_post(postText).then(post => {
            res.status(200).send(post)
        })
    },
    editPost: (req, res) => {
        const db = req.app.get('db')
        const {postText} = req.body
        const {userId} = req.session.user
        
    }
}