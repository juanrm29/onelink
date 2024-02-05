'use client';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";


export default function LoginWithGoogle() {
    
    return (
        <button 
        onClick={() => signIn('google')}
        className="flex items-center justify-center w-full gap-3 py-4 text-center bg-white shadow">
            <FontAwesomeIcon icon={faGoogle} className="h-6" />
            <span>Sign In with Google</span>  
        </button>
    );
}