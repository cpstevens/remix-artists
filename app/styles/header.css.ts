import { style } from '@vanilla-extract/css';

export const rootStyle = style({
    backgroundColor: 'cornflowerblue',
    boxShadow: '2px 2px 2px gray',
    color: 'black',
    width: '100%',
    padding: '16px',
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10%'
});

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