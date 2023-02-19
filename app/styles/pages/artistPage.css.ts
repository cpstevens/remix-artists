import { style } from '@vanilla-extract/css';

export const artistPageContent = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: '32px',

    '@media': {
        'screen and (max-width: 1430px)': {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
        }
    }
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
    maxWidth: '85%',
    width: '750px',
});

export const artistDetailsSubSectionHeader = style({
    fontSize: 'x-large',
    paddingBottom: '12px',
})
