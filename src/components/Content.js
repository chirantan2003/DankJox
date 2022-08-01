import FaceContent from "./FactsContent";
import JokeContent from "./JokeContent";

export default function Content({ menuItem }) {
  console.log(menuItem, "this is menuItem");

  return <>{menuItem ? <JokeContent /> : <FaceContent />}</>;
}
