import Categories from "@/components/categories";
import Countries from "@/components/countries";
import News from "@/components/News";
import Notice from "@/components/Notice";

export default function Home() {
  return (
    <div className="max-sm:p-4">
      <hr className="mt-10"/>
      <Notice />
      <hr className="mt-5"/>
      <Categories />
      <hr className="mt-10"/>
      <News />
      <hr className="mt-10"/>
      <Countries />
      <hr className="mt-10"/>
    </div>
  );
}
