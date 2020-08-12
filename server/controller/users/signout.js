module.exports = {
  post:(req,res) => {
    res.clearCookie('token');
    res.redirect('/');
    res.end();
  }
}