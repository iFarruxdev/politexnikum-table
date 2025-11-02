export default function handler(req, res) {

  const currentAuthVersion = 4;

  res.status(200).json({ authVersion: currentAuthVersion });
}
