import FrontPageCarousel from "@/components/frontPage/carousel";
import ScrollableList from "@/components/frontPage/scrollable-list";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FrontPageCarousel />
      < ScrollableList category="" />
    </div>
  )
}