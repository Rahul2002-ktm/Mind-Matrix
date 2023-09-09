"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("a0a978fe-bc26-42b1-88ec-f044e495ae2d");
    }, []);

    return null;
};