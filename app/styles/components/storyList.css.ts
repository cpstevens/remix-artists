import { style } from "@vanilla-extract/css";

export const storyListContainerStyles = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

export const storyListItemContainer = style({
    border: '1px solid black',
    padding: '12px',
    borderRadius: '8px',
    width: '50%'
});

export const storyListItemContents = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: '8px',
});

export const storyListItemImage = style({
    height: '50px',
})

export const storyListItemInformation = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
})

export const storyListItemHeader = style({
    fontWeight: 700,
    fontSize: 'large',
})