import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.slug !== 'string') {
    return res.status(401).json({ message: 'invalid slug' })
  }
  // Clears the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData()
  res.writeHead(307, { Location: `/blog/${req.query.slug}` })
  res.end()
}
