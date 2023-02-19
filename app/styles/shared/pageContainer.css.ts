import { style } from "@vanilla-extract/css";

export const pageContainerStyles = style({
    padding: '32px',

    "@media": {
        "screen and (max-width: 700px)": {
            padding: '16px',
        },
      },
})