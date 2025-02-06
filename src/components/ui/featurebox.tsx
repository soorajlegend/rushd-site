"use client";
import * as React from "react";
import "@/components/styles/featurebox.model.css";

interface FeatureBoxProps {
  Icon: React.ComponentType<any>;
  title: string;
  description: string[];
  notList?: boolean;
}

export function FeatureBox({
  Icon,
  title,
  description,
  notList,
}: FeatureBoxProps) {
  return (
    <div className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col items-center mb-4">
      <div className="relative rounded-full h-20 w-20 bg-gray-200 dark:bg-gray-700 flex items-center justify-center threed-circle-icon my-4">
        {/* Replace 'icon' with your icon component or image */}
        <Icon className="icon text-primary dark:text-gray-300" />
      </div>
      <h2 className="text-lg font-semibold mt-4 mb-2 text-center">{title}</h2>
      {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}> */}
      <ul className="m-0 max-w-[30ch] text-sm opacity-50 list-disc">
        {!notList ? (
          description.map((item) => (
            // Each item is rendered inside a <span> tag
            <>
              <li>{item}</li>
            </>
          ))
        ) : (
          <p className="text-center">{description[0]}</p>
        )}
      </ul>
    </div>
  );
}
