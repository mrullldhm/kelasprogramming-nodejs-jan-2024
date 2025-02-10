export const getHealth = (req, res) => {
  res.status(200).json({ message: "Hello World!" });
}

export const postHealth = (req, res) => {
  const body = req.body;
  res.status(200).json(body);
}
