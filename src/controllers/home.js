const HomeController = {}

HomeController.index = (req, res) => {
  res.json({ hello: 'World!' })
}

export default HomeController
