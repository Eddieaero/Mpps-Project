// import React from "react";
import { Wallet } from "@phosphor-icons/react"
import { Rows } from "@phosphor-icons/react"
import { Article } from "@phosphor-icons/react"
import { Seal } from "@phosphor-icons/react"
import { RadioButton } from "@phosphor-icons/react"


export const SideBarData = [

    {
        title: "Dashboard",
        path: "/dashboard",
        // img: dashicon,
        icon: <Rows size={32} weight="bold"  />,
        cName: "nav-text"
    },

    {
        title: "Application",
        path: "/application",
        // img: appicon,
        icon: <Article size={32} weight="bold"  />,
        cName: "nav-text"
    },

    {
        title: "Verify",
        path: "/verify",
        // img: verifyicon,
        icon: <Seal size={32} weight="bold"  />,
        cName: "nav-text"
    },

    {
        title: "Checkpoint",
        path: "/checkpoint",
        // img: checkicon,
        icon: <RadioButton size={32} weight="bold"  />,
        cName: "nav-text"
    },

    {
        title: "Payment",
        path: "/payment",
        // img: payicon,
        icon: <Wallet size={32}  weight="bold"   />,
        cName: "nav-text"
    }
]