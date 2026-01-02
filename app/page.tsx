import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className=" h-full grid place-items-center">
      <div className=" flex flex-col gap-4 text-center">
        <span className=" items-center justify-center text-2xl font-bold flex gap-4">
          LexaDoc
          <UserButton />
        </span>
        <span className=" text-muted-foreground w-125">
          Experience PDF interaction, leveraging OpenAI, Pinecone, and Vercel AI
          to extract questions from PDFs and provide intelligent answers.
        </span>
        {isAuth ? (
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-4 items-center justify-center">
              <Link className="self-center" href={`/chats`}>
                <Button className="w-fit flex gap-2 items-center justify-center font-bold">
                  Chats
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <Link className="self-center" href={"/sign-in"}>
            <Button className="w-fit flex gap-2 items-center justify-center font-bold">
              Login
              <LogIn />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
