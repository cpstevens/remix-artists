import { style } from '@vanilla-extract/css';

export const rootStyle = style({
    backgroundColor: 'cornflowerblue',
    boxShadow: '2px 2px 2px gray',
    color: 'black',
    width: '100%',
    padding: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const navLinksStyle = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '64px'
})

export const siteLogo = style({
    color: 'black',
    fontWeight: 700,
    fontSize: 'x-large',
    textDecoration: 'none',
    ":visited": {
        color: 'black',
    },
})

export const navItemStyle = style({
    color: 'black',
    fontWeight: 700,
    fontSize: 'large',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    ":visited": {
        color: 'black',
    },
})