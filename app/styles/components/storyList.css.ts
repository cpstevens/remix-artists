import { style } from "@vanilla-extract/css";

export const storyListContainerStyles = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: '12px',
  width: '750px',
  maxWidth: '100%'
});

export const storyListItemContainer = style({
    border: '1px solid black',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f7e5c3',
    width: '100%',
});

export const storyListItemContents = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '8px',
});

export const storyListItemImage = style({
    height: '50px',
})

export const storyListItemInformation = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    overflowWrap: 'break-word',
    width: '75%',
})

export const storyListItemHeader = style({
    fontWeight: 700,
    fontSize: 'large',
    overflowWrap: 'break-word',
    width: '100%'
})

export const storyListLinkStyles = style({
    color: '#cd0100',
    overflowWrap: 'break-word',
})