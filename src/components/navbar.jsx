"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const NavBar = () => {
    const router = useRouter();
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();
        if (error) {
            console.log("singout error:", error);
            return;
        }

        router.push("/signin");
        router.refresh();
    }
    return (
        <div>

            {/* With right-aligned content */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div>Logo</div>
                    <ul className="flex items-center gap-5">
                        <li className="flex items-center gap-3">
                            <Link href="/"> Home</Link>
                            <Link href="/model"> Model</Link>
                            <Link href="/server-action"> Server Action</Link>
                        </li>
                        {
                            !isPending && !user && (
                                <>
                                    <li><Button><Link href="/signup"> Signup</Link></Button></li>
                                    <li><Button><Link href="/signin"> Signin</Link></Button></li>
                                </>
                            )
                        }
                        {
                            !isPending && user && (
                                <>
                                    <li className="text-sm font-semibold" >{user.name}</li>
                                    <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
                                </>
                            )
                        }

                        
                    </ul>
                </header>
            </nav>
        </div>
    );
};

export default NavBar;