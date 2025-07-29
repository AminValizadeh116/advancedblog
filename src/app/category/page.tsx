import UnsuspenedCategory from "@/components/unsuspenedCategory";
import { Suspense } from "react";


export default function CategoryNews() {
  return (
    <Suspense fallback={<p>در حال بارگذاری اخبار...</p>}>
      <UnsuspenedCategory />
    </Suspense>
  );
}
