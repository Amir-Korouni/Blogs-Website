"use client";

import dynamic from "next/dynamic";

const TinyMCEEditor = dynamic(() => import("./TinyMCEEditor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
export default function EditorClient() {
  return <TinyMCEEditor />;
}
