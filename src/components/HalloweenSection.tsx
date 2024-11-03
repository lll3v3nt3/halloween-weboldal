import { Card } from "@/components/ui/card";

export function HalloweenSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white text-gray-800 mb-20">
      <div className="container mx-auto px-6 space-y-10">
        <h2 className="text-3xl font-bold text-center text-gray-900">Halloween</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Card className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Az ünnep eredete</h3>
            <p className="text-gray-600">
              A Halloween egy ősi kelta eredetű ünnep, amelyet október 31-én, Mindenszentek előestéjén tartanak. Elsősorban az angolszász országokban népszerű, de az utóbbi években Magyarországon is egyre elterjedtebb. Az ünnep kelta hagyományokból alakult ki, és az 1840-es években került Észak-Amerikába az ír bevándorlók révén.
            </p>
          </Card>

          <Card className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Szimbólumok</h3>
            <p className="text-gray-600">
              A töklámpás (Jack-o&apos;-lantern) az ünnep egyik legismertebb jelképe, amelyet faragott tökből készítenek. Emellett a szellemek, boszorkányok és különféle ijesztő dekorációk is az ünnep szerves részét képezik.
            </p>
          </Card>

          <Card className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Szokások</h3>
            <p className="text-gray-600">
              Halloween alkalmával sokan öltöznek jelmezekbe, és elindulnak édességgyűjtő körútra, az úgynevezett &quot;csokit vagy csalunk&quot; hagyomány szerint. Ezen kívül ijesztő dekorációkat készítenek, és különféle bulikat, eseményeket szerveznek.
            </p>
          </Card>

          <Card className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Magyarországi helyzet</h3>
            <p className="text-gray-600">
              Bár a Halloween nem hagyományos magyar ünnep, az utóbbi években egyre népszerűbbé vált, különösen a fiatalok körében. A jelmezes bulik és a tökfaragás is egyre elterjedtebbé válik Magyarországon.
            </p>
          </Card>

          <Card className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4 md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800">Kapcsolódó ünnepek</h3>
            <p className="text-gray-600">
              Halloween mellett fontos megemlíteni a Mindenszentek napját (november 1.) és a Halottak napját (november 2.), amikor sokan meglátogatják szeretteik sírját, és gyertyát gyújtanak emlékükre.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
