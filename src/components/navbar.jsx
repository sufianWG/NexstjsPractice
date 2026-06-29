import { Button } from "@heroui/react";
import Link from "next/link";

const NavBar = () => {
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
                        <li><Button>Sign Up</Button></li>
                    </ul>
                </header>
            </nav>
        </div>
    );
};

export default NavBar;