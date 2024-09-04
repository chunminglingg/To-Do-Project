"use server"

import User from "@/lib/modals/user.modal"
import {connect} from "@/lib/connectionToDb"

export async function createUser(user: any) {
    try {
        await connect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (err) {
        console.log(err);
        
    }
}