import { notFound } from "next/navigation";
import { portraits } from "../data";

export function generateStaticParams() {
  return portraits.map((portrait) => ({ slug: portrait.id }));
}

async function findPortrait(params) {
  const { slug } = await params;
  return portraits.find((portrait) => portrait.id === slug);
}

export async function generateMetadata({ params }) {
  const portrait = await findPortrait(params);
  return { title: portrait ? portrait.name : "Not found" };
}

export default async function PortraitPage({ params }) {
  const portrait = await findPortrait(params);
  if (!portrait) notFound();

  return <main />;
}
