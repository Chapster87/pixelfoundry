'use client'

import { Button } from '@nextui-org/button';
import { extendVariants } from '@nextui-org/react';

export const XButton = extendVariants(Button, {
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent",
    },
    color: {
      tertiary: "bg-tertiary text-tertiary-foreground"
    },
  },
  compoundVariants: [
    {
      color: "tertiary",
      variant: "solid",
      class: "bg-tertiary text-tertiary-foreground"
    },
    {
      color: "tertiary",
      variant: "faded",
      class: "border-default bg-default-100 text-tertiary"
    },
    {
      color: "tertiary",
      variant: "bordered",
      class: "bg-transparent border-tertiary text-tertiary"
    },
    {
      color: "tertiary",
      variant: "light",
      class: "bg-transparent text-tertiary"
    },
    {
      color: "tertiary",
      variant: "flat",
      class: "bg-tertiary/20 text-tertiary"
    },
    {
      color: "tertiary",
      variant: "ghost",
      class: "bg-transparent border-tertiary text-tertiary hover:!text-tertiary-foreground hover:!bg-tertiary"
    },
    {
      color: "tertiary",
      variant: "shadow",
      class: "shadow-lg shadow-tertiary/40 bg-tertiary text-tertiary-foreground"
    }
  ]
});