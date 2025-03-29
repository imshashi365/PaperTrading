import { SignIn } from "@clerk/clerk-react";
import logo from "../assets/MindTradeLogo.png";


export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="w-full max-w-md px-6 py-8">
        <div className="mb-8 text-center">
          <img src={logo} alt="Logo" className="mx-auto h-12 w-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">Welcome to MindTrade</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access your dashboard
          </p>
        </div>
        
        <div className="bg-zinc-800 rounded-lg shadow-xl overflow-hidden">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
                footerActionLink: 
                  "text-blue-600 hover:text-blue-700",
                card: "shadow-none",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
