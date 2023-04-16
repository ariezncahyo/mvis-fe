import { useMatches } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export const Breadcrumbs = () => {
  const matches = useMatches();

  return (
    <div className="my-4">
      <AiFillHome className="cursor-pointer"/>
    </div>
  )
}
