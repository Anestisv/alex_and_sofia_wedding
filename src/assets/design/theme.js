import { useMediaQuery, createTheme } from "@mui/material";

const theme = createTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1600,
            },
        }}
    )

export const useIsMobile = () => {
    return useMediaQuery(theme.breakpoints.down("sm" ) );
};

