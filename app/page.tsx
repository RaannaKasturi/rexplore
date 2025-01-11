import FrontPageCarousel from "@/components/frontPage/carousel";
import FrontPageHero from "@/components/frontPage/hero";
import ScrollableList from "@/components/frontPage/scrollable-list";

export default function Home() {
  return (
    <div className="flex flex-col space-y-3">
      < FrontPageHero />
      <FrontPageCarousel />
      < ScrollableList category="Science" />
      <hr />
      < ScrollableList category="Technology" />
      <hr />
      < ScrollableList category="Computer Science" />
      <hr />
      < ScrollableList category="Mathematics" />
      <hr />
      < ScrollableList category="Health" />
      <hr />
      < ScrollableList category="Environment" />
      <hr />
      < ScrollableList category="Physics" />
      <hr />
      < ScrollableList category="Chemistry" />
      <hr />
      < ScrollableList category="Earth" />
      <hr />
      < ScrollableList category="Economics" />
      <hr />
      < ScrollableList category="Quantitative Finance" />
      <hr />
    </div>
  )
}