import { auth } from "@clerk/nextjs/server";

const Page = async () => {
  const { userId } = await auth();

  return (
    <main className="wrapper flex min-h-screen items-center pt-32">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {userId ? "Signed in" : "Signed out"}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Bookfied is ready for Clerk authentication.
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          Use the navigation actions to create your first test user, then come
          back here and refresh to confirm the active session.
        </p>
      </section>
    </main>
  );
};

export default Page;
