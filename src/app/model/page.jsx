import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const ModelPage = async() => {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    const response = await fetch("http://localhost:8000/models",{
        // cache: "no-store"
        next: {revalidate: 10}
    });
    const models = await response.json();

    const session = await auth.api.getSession({
        headers: await headers()
    })
    
    // console.log(session);
    const user = session?.user
    if(!user){
        redirect("/signin");
        return <p>Please sign in to access the models</p>
    }

    // console.log(models);
    return (
        <div>
            <h1>Models:</h1>
            <div className='grid grid-cols-3 gap-3'>
                 {
                    models.map(model => <div className='p-8 rounded-xl shadow space-y-3' key={model.id}>
                        <div className='relative h-56 w-full'>
                        <Image src={model.image} alt={model.title} fill sizes="(max-width: 768px) 100vw, 33vw" loading='eager' className='object-contain'></Image>
                        </div>
                        <h1 className='text-xl font-bold'>{model.title}</h1>
                        <p>{model.description}</p>
                        <p className='font-bold'>Price : {model.price}</p>
                    </div> )
                 }   
            </div>
        </div>
    );
};

export default ModelPage;