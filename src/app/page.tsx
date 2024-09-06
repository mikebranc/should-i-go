import Image from "next/image";

import CollegeCostCalculator from "./components/CollegeCostCalculator";
const TWITTER_LINK = "https://x.com/mike_branc"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-16 pb-12">
      <CollegeCostCalculator />
      <p className="mt-4">Created by <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" style={{textDecoration: 'underline', color: 'blue'}}>Michael Branconier</a></p>
    </main>
  );
}
