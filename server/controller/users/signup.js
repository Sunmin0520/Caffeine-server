const { user } = require('../../models');

module.exports = {
  post: (req,res) => {
    const { username, email, password } = req.body;

    user
    .findOrCreate({ 
      where: { email: email },
      defaults: {
        username: username,
        password: password
      }
    })
    .then(async([user, created]) => {
      if(!created){
        res.status(409).json({ result: "email already exists" });
      } 
        const data = await user.get({ plain: true });
        res.status(201).json(data) 
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}