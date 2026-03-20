import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(Button, "https://www.figma.com/design/1KwGa2GwNraywm2ukpfGHe/Sisal-Betting-App-DS--Test-for-AI-?node-id=5245-3802&m=dev", {
  props: {
    label: figma.string("Label"),
    variant: figma.enum("Type", {
      Default: "default",
      Ghost: "ghost",
      Checkout: "checkout",
      Delete: "delete",
      Secondary: "secondary",
      "Cash Out": "cash-out",
      "Cash Out cashed": "cash-out-cashed",
      "Cash Out acceptance": "cash-out-acceptance",
      Alt: "alt",
      Floating: "floating",
      Settings: "settings",
    }),
    disabled: figma.enum("Status", {
      Enabled: false,
      Disabled: true,
    }),
    iconLeft: figma.boolean("Icon left"),
    iconRight: figma.boolean("Icon right"),
  },
  example: ({ label, variant, disabled, iconLeft, iconRight }) => (
    <Button
      label={label}
      variant={variant}
      disabled={disabled}
      iconLeft={iconLeft}
      iconRight={iconRight}
    />
  ),
});
