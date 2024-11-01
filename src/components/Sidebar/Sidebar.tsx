import React from "react";
import "./Sidebar.css";

export default function Sidebar({
  children,
  headerText,
}: {
  children: React.ReactNode;
  headerText: string;
}) {
  return (
    <div id="sidebar">
      <h1>{headerText}</h1>
      {children}
    </div>
  );
}
