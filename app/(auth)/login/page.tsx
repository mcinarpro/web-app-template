import { UserAuthForm } from "@/components/auth/user-auth-form";
import Image from "next/image";
import logo from "@/public/logo.png"

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="p-8">
        <div className="mx-auto flex w-[350px] flex-col justify-center space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image src={logo} alt="Logo" />
            <p className="text-sm text-slate-600">Enter your email and password to sign in to your account</p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
