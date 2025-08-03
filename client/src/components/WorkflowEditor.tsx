import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const WorkflowEditor = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow nodes={[]} edges={[]} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowEditor;