import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="bg-gray-900">
    <section className="container mx-auto bg-gray-900 flex flex-col justify-center items-start pt-0 md:pt-8">
      {children}
    </section>
  </main>
);

export default Layout;
