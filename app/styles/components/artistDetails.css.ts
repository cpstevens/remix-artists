import { style } from "@vanilla-extract/css";

export const artistDetailsContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "8px",
});

export const artistDetailsContentStyles = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "16px",

  "@media": {
    "screen and (max-width: 700px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
});

export const artistDetailsInformationStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "16px",
});

export const artistDetailsStatsStyles = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "24px",
});

export const genreListStyles = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "8px",
  paddingTop: "8px",
});

export const genreBadgeStyles = style({
  backgroundColor: "#f1b06c",
  color: "black",
  fontWeight: 700,
  borderRadius: "8px",
  border: "1px solid black",
  boxShadow: "2px 2px 2px gray",
  padding: "4px",
});
