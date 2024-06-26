import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import authimage from "../../../public/images/wchex-auth.png";
export  function RegisterForm() {
  return (
    <div className="w-full lg:grid  lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <Image src={authimage} alt="Image" width={2000} height={2000}/>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <form action="">
          <div className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="fullname">Full name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password"  type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Sign Up with Google
            </Button>
          </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have and account?&nbsp;
            <Link href="/login " className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
