import { style } from '@vanilla-extract/css';

export const artistPageContent = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '32px',
    width: '100%'
});

export const artistDetails = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
});

export const artistStories = style({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
});

export const artistDetailsSubSectionHeader = style({
    fontSize: 'x-large',
    marginBottom: '12px',
})
