import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadGroup from "../../../components/DownloadGroup";
import { CornerUpIcon, DiscordIcon, TwitterIcon } from "../../../components/SvgIcons";

export default function HomeEndSection() {
    return (
        <Box
            sx={{
                height: "100vh",
                background: "#060D10",
                position: "relative",
                display: "grid",
                placeContent: "center"
            }}>
            <Box>
                <Typography
                    component="h2"
                    textAlign="center"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: "-0.06em",
                        fontSize: 72,
                        color: "#fff",
                        lineHeight: 1,
                        mb: 8
                    }}
                >
                    Let's create future together.
                </Typography>
                <DownloadGroup />
            </Box>
            <Box
                position="absolute"
                sx={{
                    bottom: 0,
                    width: "100%",
                    background: "#0B1418",
                    paddingTop: "38px",
                    px: "26px",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: "30px",
                        lineHeight: 1,
                        letterSpacing: "-0.06em",
                        color: "#fff",
                        mb: 1,
                    }}
                >
                    Partner with Moduluc
                </Typography>
                <Button
                    sx={{
                        p: 0
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            color: "#fff",
                            textTransform: "none",
                            fontSize: "24px",
                            mr: "10px",
                            fontWeight: 600
                        }}
                    >
                        Get in touch
                    </Typography>
                    <CornerUpIcon />
                </Button>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        py: "26px"
                    }}
                >
                    <Typography
                        component="p"
                        sx={{
                            color: "#AAB1B5D9",
                            fontSize: "16px",
                            fontWeight: 400,
                            letterSpacing: "0.02em"
                        }}
                    >
                        Copyright c 2023 Moduluc Corporation. All rights reserved.
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <Link to="/privaty-polity" style={{
                            textDecoration: "none"
                        }}>
                            <Button
                                sx={{
                                    textTransform: "none",
                                    color: "#AAB1B5D9",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    letterSpacing: "0.02em",
                                    p: 0,
                                    mr: "22px"
                                }}
                            >
                                Privacy Policy
                            </Button>
                        </Link>
                        <Link to="/terms" style={{
                            textDecoration: "none"
                        }}>
                            <Button
                                sx={{
                                    textTransform: "none",
                                    color: "#AAB1B5D9",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    letterSpacing: "0.02em",
                                    p: 0,
                                    mr: "22px"
                                }}
                            >
                                Terms of Use
                            </Button>
                        </Link>
                        <Link
                            to="https://twitter.com/Moduluc"
                            style={{
                                width: "30px",
                                height: "30px",
                                display: "grid",
                                placeContent: "center",
                                marginRight: 16
                            }}
                        >
                            <TwitterIcon />
                        </Link>
                        <Link
                            to="https://discord.gg/N92mSHkJRU"
                            style={{
                                width: "30px",
                                height: "30px",
                                display: "grid",
                                placeContent: "center"
                            }}
                        >
                            <DiscordIcon />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}