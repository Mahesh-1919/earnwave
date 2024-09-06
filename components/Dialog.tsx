import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BsXDiamondFill } from "react-icons/bs";
import { Separator } from "./ui/separator";
import { BsGoogle } from "react-icons/bs";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-white text-black hover:bg-black/10 shadow-md">
          Sign up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-white pt-8 px-0 ">
        <DialogHeader>
          <DialogTitle className="text-black text-center mb-2">
            <BsXDiamondFill className="text-xl text-sky-950 mx-auto mb-4" />
            Create your account
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 w-60 mx-auto">
          <Button className="rounded-full bg-sky-950 text-white p-4 h-10 ">
            <BsGoogle className="mr-2" />
            Continue with Google
          </Button>
          <Separator className="my-2" />
          <Input
            type="email"
            placeholder="Your email"
            className="rounded-full h-10 pl-4"
          />
          <Input
            type="password"
            placeholder="Create a password"
            className="rounded-full h-10 pl-4"
          />
          <Button className="rounded-full bg-sky-950/10 text-black p-4 h-10 mt-3 hover:bg-white">
            Continue with email
          </Button>
          <p className="text-center text-sm text-gray-500 underline ">
            Already have an account?
          </p>
        </div>
        <p className="text-xs text-gray-500 font-thin p-2 tracking-tight text-center mt-4">
          By signing up you agree to the{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </p>
      </DialogContent>
    </Dialog>
  );
}
