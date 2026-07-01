
"use client"
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from '@heroui/react';
import { Check, Eye, EyeSlash } from '@gravity-ui/icons';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const SignUpPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const handleSignUP = async (e) => {
        e.preventDefault();

        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        const { name, email, password } = formValues;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
        }
            // {
            //     onsuccess: () => {
            //         router.push("/model")
            //     }
            // }
        );
        console.log({ data, error });
        if (error) {
            console.log("Sign up error:", error);
            return;
        }
        router.push("/model");
        router.refresh();
    };
    return (
        <div className='w-9/12 mx-auto'>
            <Form className="flex w-96 flex-col gap-4 mx-auto mt-20" onSubmit={handleSignUP} >
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Your Name" />
                    <FieldError />
                </TextField>
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
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    {/* <Input placeholder="Enter your password" /> */}
                    <InputGroup>
                        <InputGroup.Input
                            className="w-full max-w-[280px]"
                            type={isVisible ? "text" : "password"}
                            placeholder='Enter your password'
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
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Sign Up
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;