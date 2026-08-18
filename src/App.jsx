import { Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";

import Home from "./pages/Home";
import NeedsAttention from "./pages/NeedsAttention";
import EmergingRisks from "./pages/EmergingRisks";
import ExecutionHealth from "./pages/ExecutionHealth";
import WeeklyBrief from "./pages/WeeklyBrief";
import NeedsAttentionDetail from "./pages/NeedsAttentionDetail";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />

        <Route
          path="needs-attention"
          element={<NeedsAttention />}
        />
        <Route
  path="needs-attention/:id"
  element={<NeedsAttentionDetail />}
/>

        <Route
          path="emerging-risks"
          element={<EmergingRisks />}
        />

        <Route
          path="execution-health"
          element={<ExecutionHealth />}
        />

        <Route
          path="weekly-brief"
          element={<WeeklyBrief />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  );
}

export default App;