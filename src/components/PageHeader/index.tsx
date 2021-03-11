import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader(props: HeaderProps) {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col space-y-4 md:items-center md:text-center">
      <h1> {title}</h1>
      {subtitle && <p className="text-2xl">{subtitle}</p>}
    </div>
  );
}
