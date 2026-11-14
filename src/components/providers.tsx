"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type ProvidersType = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProvidersType) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Provider;
