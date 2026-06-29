"use client"
import { createPost } from '@/actions/postAction';
import { getPost } from '@/database/postdb';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const ServerActionPage = () => {
    const posts = getPost();
    // console.log(posts);
    return (
        <div>
            <h1>This is server action page</h1>
            <div className='w-9/12 mx-auto'>
                <Form className="flex w-96 flex-col gap-4 mx-auto" action={createPost}>
                    <TextField
                        isRequired
                        name="title"
                        type="text"
                    // validate={(value) => {
                    //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    //         return "Please enter a valid email address";
                    //     }
                    //     return null;
                    // }}
                    >
                        <Label>Title</Label>
                        <Input placeholder="Write your post title" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="description"
                        type="text"
                    // validate={(value) => {
                    //     if (value.length < 8) {
                    //         return "Password must be at least 8 characters";
                    //     }
                    //     if (!/[A-Z]/.test(value)) {
                    //         return "Password must contain at least one uppercase letter";
                    //     }
                    //     if (!/[0-9]/.test(value)) {
                    //         return "Password must contain at least one number";
                    //     }
                    //     return null;
                    // }}
                    >
                        <Label>Description</Label>
                        <Input placeholder="writey our description" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            Save Change
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
            <div className='w-9/12 mx-auto bg-green-50 mt-5'>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        posts.map(post => <div className='p-8 rounded-xl bg-white shadow' key={post.id}>
                            <h1 className='text-xl font-bold'>{post.title}</h1>
                            <p className='text-base'>{post.description}</p>
                        </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default ServerActionPage;