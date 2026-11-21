import Link from "next/link";

type DashboardType = {
  user: string;
};

const DashboardHeader = ({ user }: DashboardType) => {
  return (
    <>
      <section className="w-full min-h-[220px] sm:min-h-[260px] bg-[var(--latest-section)] text-zinc-100 flex flex-col justify-center items-center px-4 py-10">
        <div className="text-foreground text-center space-y-2 max-w-3xl">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold">
            User Dashboard
          </h2>

          <p className="text-[clamp(0.9rem,2vw,1.2rem)]">Hello {user}! 👋</p>

          <p className="text-[clamp(0.85rem,2vw,1.2rem)]">
            Welcome to your personal space on DEVLOG.
          </p>

          <p className="text-sm sm:text-base">
            Explore new ideas, discover articles and manage your account.
          </p>
          <p className="text-sm sm:text-base">
            Would you like to visite your
            <Link
              href="/"
              className="underline text-[var(--ring)] font-bold px-1"
            >
              {" "}
              Main page
            </Link>
            for learning all things?
          </p>
        </div>
      </section>
    </>
  );
};

export default DashboardHeader;
