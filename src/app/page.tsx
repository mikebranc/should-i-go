import Image from "next/image";

import CollegeCostCalculator from "./components/CollegeCostCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CollegeCostCalculator />
    </main>
  );
}
