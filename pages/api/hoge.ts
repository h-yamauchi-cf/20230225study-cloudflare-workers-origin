// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { resolve } from 'path'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await new Promise((resolve) => setTimeout(() => resolve(true), 5000))
  console.log('called!!!')
  res.status(200).json({ name: 'hoge' })
}
