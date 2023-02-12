import { style } from "@vanilla-extract/css";

export const artistListRootStyle = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
});

export const artistListEntryContainer = style({
  padding: "8px",
});

export const artistListEntryContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  gap: '8px'
});

export const artistNameStyles = style({
    fontSize: 'large',
    fontWeight: '700',
})
