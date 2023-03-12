import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import { useAiriAGsap } from "../../animation/gsap/airia";
import DownloadGroup from "../../components/DownloadGroup";
import Header from "../../components/Header";
import BgSection2 from "../../assets/img/airia/bg-1.jpg";

export default function AiriA() {
    const airiaRef = useRef(null);
    useAiriAGsap(airiaRef);
    return (
        <Box ref={airiaRef}>
            <Header />
            <Box
                sx={{
                    height: "100vh",
                    display: "grid",
                    placeContent: "center",
                    position: "relative",
                    zIndex: 1,
                }}
                id="section-1"
            >
                <Box
                    id="section-1-bg"
                    sx={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        background: "#0B1418",
                        pointerEvents: "none"
                    }}

                />
                <Box
                    sx={{
                        mt: 40,
                        mb: 10
                    }}
                    id="airia-section-1-title"
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: 96,
                            lineHeight: 1,
                            fontWeight: 700,
                            color: "#fff",
                            textAlign: "center"
                        }}
                    >
                        Another way to<br />
                        enjoy your art.
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: "28px",
                            lineHeight: 0.84,
                            fontWeight: 600,
                            color: "#FFFFFFBF",
                            textAlign: "center",
                            mt: 4.5
                        }}
                    >
                        Welcome to the AiriA experience.
                    </Typography>
                </Box>
                <DownloadGroup id="sectin-1-download-group" />
            </Box>
            {/* section 2 */}
            <Box
                id="section-2"
                sx={{
                    height: "100vh",
                    width: "100%",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    display: "grid",
                    placeContent: "center"
                }}
            >
                <Box
                    component="img"
                    src={BgSection2}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 1
                    }}
                    alt=""
                />
                <Box
                    sx={{
                        position: "relative",
                        // width: 0,
                        zIndex: 2
                    }}
                >
                    <Typography
                        component="h2"
                        id="section-2-title-1"
                        sx={{
                            fontSize: 84,
                            letterSpacing: "-0.06em",
                            color: "#FFFFFF73",
                            lineHeight: 1.14,
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            transform: "translateX(-150px)"
                        }}
                    >
                        Built by artists,
                    </Typography>
                    <Typography
                        component="h2"
                        id="section-2-title-2"
                        sx={{
                            fontSize: 84,
                            letterSpacing: "-0.06em",
                            color: "#fff",
                            lineHeight: 1.14,
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            transform: "translateX(300px)"
                        }}
                    >
                        for artists.
                    </Typography>
                </Box>
            </Box>
            <Box height="100vh"></Box>
        </Box>
    )
}