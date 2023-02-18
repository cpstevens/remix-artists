import { style, styleVariants } from "@vanilla-extract/css";

export const buttonStyles = styleVariants({
    linkButton: {
        backgroundColor: '#1Db954',
        padding: '8px',
        borderRadius: '8px',
        margin: 0
    }
});

export const buttonTextStyles = style({
    color: 'black',
    fontWeight: 700,
    textDecoration: 'none',
    ":visited": {
        color: 'black'
    }
})