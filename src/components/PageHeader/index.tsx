import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader(props: HeaderProps) {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl"> {title}</h1>
      {subtitle && <p className="text-xl mt-2 mb-1">{subtitle}</p>}
    </div>
  );
}
