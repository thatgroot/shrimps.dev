import { SidebarSection } from "./elements/SidebarSection";
import { useParams } from "react-router-dom";
import {
  backend_frameworks,
  database_orms,
  devops_platforms,
  ui_frameworks,
} from "../../data/index";

function RightSidebar() {
  const { id } = useParams();

  let items = Array<any>();

  switch (id) {
    case "backend":
      items = backend_frameworks;
      break;
    case "data" || "database" || "database-orms":
      items = database_orms;
      break;
    case "devops" || "devops-platforms":
      items = devops_platforms;
      break;
    case "frontend" || "ui-frameworks" || "ui-development":
      items = ui_frameworks;
      break;
    default:
      items = [
        ...backend_frameworks,
        ...database_orms,
        ...devops_platforms,
        ...ui_frameworks,
      ];
      break;
  }

  return (
    <nav className="flex flex-col items-center">
      <SidebarSection items={items} />
    </nav>
  );
}

export default RightSidebar;
