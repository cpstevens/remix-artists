import { style } from '@vanilla-extract/css';

export const rootStyle = style({
    backgroundColor: '#cd0100',
    boxShadow: '2px 2px 2px gray',
    color: '#f7dac3',
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
    color: '#f7dac3',
    fontWeight: 700,
    fontSize: 'x-large',
    textDecoration: 'none',
    ":visited": {
        color: '#f7dac3',
    },
})

export const navItemStyle = style({
    color: '#f7dac3',
    fontWeight: 700,
    fontSize: 'large',
    textDecoration: 'none',
    ":visited": {
        color: '#f7dac3',
    },
})