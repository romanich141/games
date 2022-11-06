import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <div>Page not found</div>
      <Link to="/">Back to main</Link>
    </div>
  )
}