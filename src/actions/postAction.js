"use server";

import { addPost } from "@/database/postdb";
import { revalidatePath } from "next/cache";

export const createPost = async (formData) => {
    const title = formData.get("title");
    const description = formData.get("description");

    addPost({
        id: Date.now(),
        title,
        description
    })
    revalidatePath("/server-action");
}

