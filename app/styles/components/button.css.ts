import { style, styleVariants } from "@vanilla-extract/css";

export const buttonStyles = styleVariants({
    linkButton: {
        backgroundColor: '#f7dac3',
        padding: '8px',
        borderRadius: '8px',
        margin: 0
    }
});

export const buttonTextStyles = style({
    color: '#2a2a2a',
    fontWeight: 700,
    textDecoration: 'none',
    ":visited": {
        color: '#2a2a2a',
    }
})