"use client";

import { Button } from "@/components/ui/button";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";
import { useRef } from "react";
import type { Editor as TinyMceEditor } from "tinymce";

const TinyMCEEditor = () => {
  const editorRef = useRef<TinyMceEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="no-api-key"
        tinymceScriptSrc="/js/tinymce/tinymce.min.js"
        licenseKey="gpl"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>You can create a posts from dashboard.</p>"
        init={{
          height: 700,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help" +
            "sizeselect  | fontselect | fontsize",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          font_size_formats:
            "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
          content_css: "dark",
          skin: "oxide-dark",
        }}
      />
      <button onClick={log}>Log editor content</button>
      <div className="w-full flex justify-around">
        <Link href={"/admin"}>
          <Button
            variant={"outline"}
            className="w-[30%] h-[2.9rem] cursor-pointer"
          >
            Cancel
          </Button>
        </Link>

        <Button
          variant={"outline"}
          className="w-[30%] h-[2.9rem] cursor-pointer"
        >
          Create a Posts
        </Button>
      </div>
    </>
  );
};

export default TinyMCEEditor;
