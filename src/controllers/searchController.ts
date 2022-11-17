import { Request , Response } from 'express';
import { Pet } from '../models/pets';
import { createMenuObject } from '../helpers/createMenuObjects';




export const search = (req: Request, res: Response) =>{

   
    res.render('pages/page',{
        menu: createMenuObject(''),
        
    })
}