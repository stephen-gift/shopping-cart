"use client";
import { SCCart, SCMainLayout } from "@/components";
import React from "react";

type Props = {};

const SCCartPageContainer = (props: Props) => {
  return (
    <>
      <SCMainLayout>
        <SCCart />
      </SCMainLayout>
    </>
  );
};

export default SCCartPageContainer;
