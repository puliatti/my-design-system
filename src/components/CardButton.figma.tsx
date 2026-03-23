import figma from "@figma/code-connect";
import { CardButton } from "./CardButton";

figma.connect(CardButton, "https://www.figma.com/design/1KwGa2GwNraywm2ukpfGHe/Sisal-Betting-App-DS--Test-for-AI-?node-id=5906-47110&m=dev", {
  props: {
    label: figma.string("Label"),
    type: figma.enum("Type", {
      Speciali: "speciali",
      Recent: "recent",
    }),
    badgeNew: figma.boolean("Badge new"),
  },
  example: ({ label, type, badgeNew }) => (
    <CardButton
      label={label}
      type={type}
      badgeNew={badgeNew}
    />
  ),
});
