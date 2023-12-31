import { Request, Response } from "express";
import UserModel from "../models/users/users";
import { createUser, deleteUser, findAndUpdate, findUser } from "../services/users.service";

const homeDetail = async (req: Request, res: Response) => {
  try {
    const user= UserModel.myNewStaticFn();
    //--Add--
    // const user = await createUser({
    //   name: "Manas",
    //   dept: "xyz"
    // });

    //--update--
    // const user = await findAndUpdate({name:"Manas"},{dept:"vew"},{new:true});

    //---Find---
    // const user = await findUser({_id:"6591476d478ecbf2f751e61e"})

    //--Delete---
    // const user = await deleteUser({_id:"6591476d478ecbf2f751e61e"});
    console.log("user", user);

    let ob = {
      x: 12,
      y: 30,
    };
    let data = sumData(ob);

    res.json({
      message: "Home Page New",
      data: data,
      userData: user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

interface params {
  x: number;
  y: number;
}

type sumCheck = (x: params) => number;

const sumData: sumCheck = (obj: params) => {
  return obj.x + obj.y;
};

export { homeDetail };
