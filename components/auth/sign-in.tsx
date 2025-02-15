"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { ReactNode } from "react";

interface SignInProps {
    providerName: string;
    buttonText: string;
    children?: ReactNode; 
}

export default function SignIn({ providerName, buttonText, children }: SignInProps) {
    const {data: session} = useSession();

    const handleSignIn = () => {
        signIn(providerName, { redirect: false });
        console.log(JSON.stringify(session))
    };

    return (
        <Button onClick={handleSignIn} className="w-full bg-white text-black hover:text-white flex gap-2">
            {buttonText}
            {children}  
        </Button>
    );
}
