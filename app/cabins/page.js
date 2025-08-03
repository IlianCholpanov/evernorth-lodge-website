import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, nestled in the heart of the Scandinavian
        Mountains. Imagine waking up to breathtaking mountain views, spending
        your days exploring the surrounding dark forests, or simply unwinding in
        your private hot tub beneath a sky full of stars. Embrace the beauty of
        nature in your own little home away from home. The perfect escape for a
        peaceful, calming vacation. Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
