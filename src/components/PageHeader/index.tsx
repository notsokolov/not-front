import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader(props: HeaderProps) {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col space-y-2 ">
      <h1> {title}</h1>
      {subtitle && <p className="text-2xl leading-10">{subtitle}</p>}
    </div>
  );
}
