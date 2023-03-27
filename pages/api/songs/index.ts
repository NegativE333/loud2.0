import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method!=='GET'){
        return res.status(405).end();
    }

    try{
        await serverAuth(req);

        const songs = await prismadb.song.findMany();

        return res.status(200).json(songs);
    }
    catch(error){
        console.log(error);
        return res.status(400).end();
    }
}