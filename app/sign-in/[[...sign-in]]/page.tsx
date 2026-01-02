import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" h-full grid place-items-center">
      <SignIn
        appearance={{
          elements: {
            footerAction: "hidden",
          },
        }}
      />
    </div>
  );
}
