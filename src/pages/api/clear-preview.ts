import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Clears the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData()
  res.writeHead(307, { Location: `/blog` })
  res.end()
}
