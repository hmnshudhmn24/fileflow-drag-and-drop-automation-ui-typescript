import React from "react";
import WorkflowEditor from "./components/WorkflowEditor";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📁 FileFlow</h1>
      <WorkflowEditor />
    </div>
  );
}

export default App;