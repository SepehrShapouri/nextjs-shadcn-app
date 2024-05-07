import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Divider from "./Divider";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function RootFooter() {
  return (
    <>
      <Divider />
      <footer className="w-screen h-[300px] flex flex-col items-center justify-center gap-2 p-[2rem] md:p-0">
        <div className="max-w-[500px] flex flex-col justify-center items-center gap-[1rem]">
          <span className="text-center flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-bold">Stay Connected</h1>
            <p>
              Subscribe to our newsletter to recieve WritingChex updates and
              follow us on social media
            </p>
          </span>
          <div className=" w-full flex gap-2 justify-center">
            <Input
              placeHolder="Your email address here"
              className="max-w-[300px]"
            />
            <Button>Subscribe</Button>
          </div>
          <div className="flex gap-[2rem] items-center">
            <Link href="#">
              <LinkedInLogoIcon className="h-[2.2rem] w-[2.2rem]" />
            </Link>
            <Link href="#">
              <InstagramLogoIcon className="h-[2.2rem] w-[2.2rem]" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
