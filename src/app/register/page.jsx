"use client"

import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import {Check, Eye, EyeSlash} from "@gravity-ui/icons";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name, url, email, password)

        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: url,
            callbackURL: "/",
        });

        console.log({data, error})

        if(error) {
            toast.error(error.message)
        }

        if(data) {
            toast.success("Signup Successful")
        }

    }


    return (
        <div className="mx-auto">
            <Form
               className="flex w-96 flex-col gap-4"
               render={(props) => <form {...props} data-custom="foo" />}
               onSubmit={onSubmit}
             >
                {/* name */}
                <TextField
                   isRequired
                   name="name"
                   validate={(value) => {
                     if (value.length < 3) {
                       return "Name must be at least 3 characters";
                     }
                     return null;
                   }}
                 >
                   <Label>Name</Label>
                   <Input name="name" placeholder="Enter Your Name" />
                   <FieldError />
                </TextField>

                {/* photo url */}
                <TextField
                   isRequired
                   name="photoUrl"
                   validate={(value) => {
                     if (!value.startsWith("http")) {
                        return "Please enter a valid URL";
                    }
                     return null;
                   }}
                 >
                   <Label>Photo URL</Label>
                   <Input name="photoUrl" placeholder="Type here photo url" />
                   <FieldError />
                </TextField>

                {/* email */}
               <TextField
                 isRequired
                 name="email"
                 type="email"
                 validate={(value) => {
                   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                     return "Please enter a valid email address";
                   }
                   return null;
                 }}
               >
                 <Label>Email</Label>
                 <Input name="email" placeholder="Enter Your Email" />
                 <FieldError />
               </TextField>
               {/* password */}
                <TextField className="w-full" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                      <InputGroup.Input
                        className=""
                        type={isVisible ? "text" : "password"}
                        name="password"
                        placeholder="Enter Your Password"
                      />
                      <InputGroup.Suffix className="pr-0">
                        <Button
                          isIconOnly
                          aria-label={isVisible ? "Hide password" : "Show password"}
                          size="sm"
                          variant="ghost"
                          onPress={() => setIsVisible(!isVisible)}
                        >
                          {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                        </Button>
                      </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
               <div className="flex gap-2">
                 <Button type="submit">
                   <Check />
                   Submit
                 </Button>
                 <Button type="reset" variant="secondary">
                   Reset
                 </Button>
               </div>
             </Form>
        </div>
    );
};

export default RegisterPage;