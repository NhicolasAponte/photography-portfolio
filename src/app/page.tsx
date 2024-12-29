import HomepageCarousel from "@/components/homepage/homepage-carousel";

export default function HomePage() {
  const items: string[] = ["1", "2", "3"];

  return (
    <main>
      <HomepageCarousel items={items} />
    </main>
  );
}
