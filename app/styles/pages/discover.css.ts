import { style } from "@vanilla-extract/css";

export const discoverContainerStyles = style({
    width: '100vw'
});

export const discoverInputContainerStyles = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '32px',
});

export const discoverInputLabelStyles = style({
    fontWeight: 700,
    fontSize: 'large',
});

export const discoverInputStyles = style({
    padding: '8px',
    borderRadius: '16px'
});

