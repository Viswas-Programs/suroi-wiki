import FlexTable from "@/components/tables/FlexTable";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import Image from "next/image";
import Link from "@/components/links/Link";
import { getSuroiImageLink } from "@/lib/util/suroi";
import PageCard from "@/components/cards/PageCard";

export default function WeaponsPage() {
  return (
    <main className="col-span-8 text-white">
      <div className="prose prose-invert">
        <h1>Weapons</h1>
        <p>
          There are currently {Guns.length} guns in the game, and{" "}
          {Melees.length} melee weapons in the game.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {Guns.map((gun) => (
          // eslint-disable-next-line react/jsx-key
          <PageCard
            title={gun.name}
            image={getSuroiImageLink(gun)}
            url={"/weapons/guns/" + gun.idString}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {Melees.map((melee) => (
          // eslint-disable-next-line react/jsx-key
          <PageCard
            title={melee.name}
            image={getSuroiImageLink(melee)}
            url={"/weapons/melee/" + melee.idString}
          />
        ))}
      </div>
    </main>
  );
}
