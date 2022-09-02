import type { NextApiRequest, NextApiResponse} from 'next';
import { Phrase, prhases } from '../../../services/dataApi';

const handler = (req: NextApiRequest, res:NextApiResponse) => {
  try {

    const { method } = req;

    if(method !== "GET")
      res.status(405).json({ statusCode: 500, message: "Method not allowed"})

    res.status(200).json(getRandomPhrase());
  } catch (error) {
    let message;
    if(error instanceof Error) 
      message = error.message;
    else 
      message = String(error);

    res.status(500).json({ statusCode: 500, message: message})
  }
}

const getRandomPhrase = () => {

  const randomNumber = Math.floor((Math.random() * 10) + 1);

  return prhases.find(prhase => prhase.id == randomNumber);
}

export default handler;
