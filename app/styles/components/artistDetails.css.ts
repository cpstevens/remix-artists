import { style } from "@vanilla-extract/css";

export const artistDetailsContainerStyles = style({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '8px',
});

export const artistDetailsContentStyles = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
});

export const artistDetailsInformationStyles = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flexStart',
})