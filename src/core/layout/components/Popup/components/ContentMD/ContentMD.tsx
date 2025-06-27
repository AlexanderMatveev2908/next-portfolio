/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { isStr } from "@/core/lib/dataStructure";
import { PopStateType } from "@/features/Popup/slice";
import { useEffect, useRef, useState, type FC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-dark.css";

type PropsType = {
  popState: PopStateType;
};

const ContentMD: FC<PropsType> = ({ popState }) => {
  const [contentMD, setContentMD] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const handleContent = async () => {
      if (!popState.isPop || !isStr(popState.content?.fileMD)) return;
      try {
        const res = await fetch(`/markdown/${popState.content?.fileMD}`);
        const data = await res.text();

        if (isStr(data) && !data.startsWith("<!DOCTYPE html>"))
          setContentMD(data);
        else
          throw new Error(
            "A wild slime appeared! Server take 50% off damage ⚔️"
          );

        if (!containerRef.current) return;
        containerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (err: Error | any) {
        console.log(err);
        setErr(err?.message ?? "");
      }
    };

    handleContent();
  }, [popState.isPop, popState.content?.fileMD]);

  return (
    <div className="w-full flex justify-center min-h-0 max-h-full overflow-y-auto scroll_app">
      {/* <span className="txt__md text-gray-300">
              {popState.content?.txt}
            </span> */}

      {isStr(err) ? (
        <div className="w-full flex justify-center px-5">
          <span className="txt__md font-semibold  text-red-600">{err}</span>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="text-[var(--whitesmoke)] scroll_app overflow-x-auto px-3 pr-5 prose dark:prose-invert"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ _, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <Prism
                    style={dracula}
                    language={match[1]}
                    PreTag="pre"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </Prism>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {contentMD}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ContentMD;
