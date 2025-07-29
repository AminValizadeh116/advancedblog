import UnsuspendCountry from "@/components/unsuspendCountry";
import { Suspense } from "react";

export default function countryNews() {
  return (
    <Suspense fallback={<p>در حال بارگذاری اخبار...</p>}>
      <UnsuspendCountry />
    </Suspense>
  );
}
