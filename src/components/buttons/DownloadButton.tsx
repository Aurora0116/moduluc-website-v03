import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CornerDownIcon, CornerUpIcon, WindowIcon } from "../SvgIcons";

import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const LinkButton = styled(Button)<ButtonProps>(({ theme }) => ({
    display: "grid",
    placeContent: "center",
    minWidth: 0,
    minHight: 0,
    padding: 24,
    borderRadius: 12,
    boxShadow: "none",
    "&:hover": {
        cursor: "pointer",
        boxShadow: "none",
        background: "transparent",
    },
    "&:active": {
        boxShadow: "none",
        background: "transparent",
    },
}));

export default function DownloadButon(props: {
    download: string,
    explore: string,
    id?: string
}) {
    return (
        <Box display="flex" paddingBottom={"36px"} id={props.id ? props.id : ""}>
            <Box display="flex">
                <Link to={props.download} style={{ textDecoration: "none" }}>
                    <LinkButton sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <WindowIcon />
                        <Typography
                            component="span"
                            sx={{
                                ml: "18px",
                                color: "#fff",
                                fontSize: "24px",
                                fontWeight: 600,
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            Download for Windows
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                ml: "10px"
                            }}
                        >
                            <CornerDownIcon />
                        </Typography>
                    </LinkButton>
                </Link>
            </Box>
            <Box display="flex" sx={{ ml: 1 }}>
                <Link to={props.explore} style={{ textDecoration: "none" }}>
                    <LinkButton sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography
                            component="span"
                            sx={{
                                ml: "18px",
                                color: "#fff",
                                fontSize: "24px",
                                fontWeight: 600,
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            Explore
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                ml: "10px"
                            }}
                        >
                            <CornerUpIcon />
                        </Typography>
                    </LinkButton>
                </Link>
            </Box>
        </Box>
    )
}