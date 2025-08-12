import Header from "../components/Header";
import Footer from "../components/Footer";
import AgentSidebar from "../components/AgentSidebar";
import { Outlet } from "react-router-dom";

function AgentLayout() {
  return (
    <div>
      <Header />
      <main>
        <AgentSidebar footer={<Footer />}>
          <Outlet />
        </AgentSidebar>
      </main>
    </div>
  );
}

export default AgentLayout;
