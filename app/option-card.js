import Image from "next/image";
import Link from "next/link";

export default function OptionCard({ portrait, tilt }) {
  return (
    <li className={tilt}>
      <Link
        href={`/${portrait.id}`}
        className="block rounded-2xl bg-white p-3 pb-4 shadow-[6px_6px_0_0_#1B2140] outline-2 outline-[#1B2140] transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#C62F45]"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#C62F45]">
          {portrait.cartoon ? (
            <Image
              src={portrait.cartoon}
              alt={`Cartoon portrait of ${portrait.name}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-sm font-semibold text-white/80">
              {portrait.note}
            </div>
          )}
        </div>
        <span className="mt-3 block px-1 text-xl font-bold">{portrait.name}</span>
      </Link>
    </li>
  );
}
