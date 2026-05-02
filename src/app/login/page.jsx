
"use client"

import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import {Check, Eye, EyeSlash} from "@gravity-ui/icons";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";


const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({data, error})
    }

    const handleGoogleSignIn = async () => {
            await authClient.signIn.social({
            provider: "google",
          });
    }


    return (
        <div className="mx-auto shadow-2xl p-4 rounded-lg my-8">
            <h2 className="text-center text-xl font-semibold mb-3">Sign In</h2>
            <Form
               className="flex w-96 flex-col gap-4"
               render={(props) => <form {...props} data-custom="foo" />}
               onSubmit={onSubmit}
             >

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
                <TextField className="w-full rounded-full" name="password">
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
             <p className="mt-2">
               Don't have an Account? <Link href={"/register"} className="text-blue-500">Register</Link>
             </p>
             <p className="text-center my-3">Or</p>
             <Button onClick={handleGoogleSignIn} variant="outline" className="w-full"><FaGoogle /> Sign In Google</Button>
        </div>
    );
};

export default LoginPage;