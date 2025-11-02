export default function handler(req, res) {

  const currentAuthVersion = 3;

  res.status(200).json({ authVersion: currentAuthVersion });
}
