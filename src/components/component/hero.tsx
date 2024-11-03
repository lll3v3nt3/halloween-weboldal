import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto space-y-10 xl:space-y-16 text-center animate-fade-in-up">
        <div className="grid gap-4 px-10 md:grid-cols-1 md:gap-8 items-center">
          <div className="mx-auto max-w-[700px]">
            <h1 className="mt-8 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animate-fade-in">
              Fedezd fel a Halloween hátborzongató világát!
            </h1>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in delay-150">
            Csatlakozz hozzánk, és merülj el a Halloween hagyományaiban, szimbólumaiban és rémtörténeteiben. Ismerd meg ennek az ősi ünnepnek az eredetét, fedezd fel a népszerű szokásokat, és meríts ihletet saját Halloween ünnepedhez. A faragott töklámpásoktól a kísérteties összejövetelekig mindenki talál valami érdekeset!
            </p>
          </div>
          <div className="flex justify-center mt-6 animate-fade-in delay-300">
            <Link
              href="/jatek"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-transform transform hover:scale-105 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Játék indítása
            </Link>
          </div>
        </div>
        <img
          src="/images/halloween.jpg"
          width="1270"
          height="300"
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover animate-slide-in delay-500"
        />
      </div>
    </section>
  );
}
