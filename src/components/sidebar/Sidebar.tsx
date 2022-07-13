import { useParams } from "react-router-dom";
import { languages } from "../../data";
import { SidebarSection } from "./elements/SidebarSection";
import { runtimes, databases, ui_libs, devops_items } from "../../data/index";

function Sidebar() {
  const { id } = useParams();

  let items = Array<any>();
  switch (id) {
    case "backend" || "languages" || "backend-frameworks":
      items = languages;
      break;
    case "data" || "database" || "database-orms":
      items = databases;
      break;
    case "devops" || "devops-platforms":
      items = devops_items;
      break;
    case "frontend" || "ui-frameworks" || "ui-development":
      items = ui_libs;
      break;
    default:
      items = [...languages, ...runtimes, ...databases, ...ui_libs];
      break;
  }

  return (
    <nav className="flex flex-col items-center">
      <SidebarSection items={items} />
    </nav>
  );
}

export default Sidebar;
