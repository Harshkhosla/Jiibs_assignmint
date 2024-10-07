import Sidebar from "./component/Sidebar";
import Table from "./component/Table";

export default function Home() {
  return (
    <Sidebar>
      <h1 className="text-3xl font-bold mb-4">People</h1>
      <Table />
    </Sidebar>
  );
}
