import React from "react";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => (
  <h1 className="w-full text-center text-white tracking-wider text-lg mb-6">
    {title}
  </h1>
);

export default PageHeader;
