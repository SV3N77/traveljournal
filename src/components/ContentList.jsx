import ContentCards from "./ContentCards";
import TravelData from "../TravelData";
export default function ContentList() {
  return (
    <div className="flex flex-col gap-6 pt-6 container mx-auto">
      {TravelData.map((items) => (
        <ContentCards {...items} />
      ))}
    </div>
  );
}
