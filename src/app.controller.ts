import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { user } from "./users/users.dto";
import { get } from "http";


@Controller("UserController")
    export class UserController{

     constructor (private userservice : UserService){
        
     }

        //Create Users
        @Post("/CreateUser")
        CreateUser(@Body() User : user) : string {
            return this.userservice.CreateUser(User)
        }

        // Delete Users
        @Delete("/DeleteUsers/:id")
        DeleteUsers(@Param("id") UserId : string) : string{
            return this.userservice.DeleteUsers(UserId)
           
        }

        // Update Users
        @Put("/UpdateUsers")
        UpdateUsers(@Body() User : user) : string{
            return this.userservice.UpdateUsers(User)
            
        }

        @Get("/GetAllUsers")
        GetAllUsers() : user[]{
            return this.userservice.GetAllUsers();
        }


}



