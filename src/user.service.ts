import { Injectable } from "@nestjs/common"
import { user } from "./users/users.dto"
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService{
    public User : user[] = []
    
    
    CreateUser(Users : user) : string {
        Users.id = uuidv4()
        this.User.push(Users)
        return "User added"
    }


    DeleteUsers(userId : string) : string{
        this.User = this.User.filter((user)=>{
            return user.id != userId
        })
        return " User deleted"
    }
        
    

    UpdateUsers(Users : user) : string{
        let index = this.User.findIndex((CurrentUser)=>{
            return CurrentUser.id == Users.id
        })
        this.User[index] = Users
        return "User updated"
    }


    GetAllUsers() : user[]{
        return this.User
    }
}



