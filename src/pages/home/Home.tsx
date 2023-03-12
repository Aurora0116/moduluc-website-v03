import {useRef } from "react";
import { Box } from "@mui/system";
import Header from "../../components/Header";
import BgImage1 from "../../assets/img/home/bg-1.jpg";
import { Typography } from "@mui/material";
import AiriASection from "./components/AiriASection";
import IslandSection from "./components/IslandSection";
import TiledModuluc from "./components/TiledModuluc";
import HomeEndSection from "./components/HomeEndSection";
import { useHomeGsap } from "../../animation/gsap/home";

export default function Home() {

    const homeRef = useRef(null);
    useHomeGsap(homeRef);

    return (
        <Box bgcolor={"#0B1418"} sx={{ minHeight: "100vh" }} position="relative">
            <Header />
            <Box ref={homeRef}>
                <Box
                    sx={{ height: "100vh" }}
                >
                    <Box
                        component={"img"}
                        src={BgImage1}
                        id="main-bg"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "fixed",
                            left: 0,
                            zIndex: 1,
                            pointerEvents: "none"
                        }}
                        alt=""
                    />

                    <Box
                        sx={{
                            position: "relative",
                            // top: "50%",
                            // left: "50%",
                            // transform: "translate(-50%, -50%)",
                            display: "grid",
                            height: "100vh",
                            placeContent: "center",
                            zIndex: 3
                        }}>
                        <Typography
                            component={"h1"}
                            id="text-01"
                            textAlign="center"
                            color={"#fff"}
                            sx={{
                                fontSize: "128px",
                                fontWeight: 700,
                                lineHeight: "0.96",
                                whiteSpace: "nowrap"
                            }}

                        >
                            The immersive<br />
                            experiences<br />
                            of tomorrow.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "100vh",
                        paddingTop: "200px",
                        // overflow: "hidden"
                    }}
                    position={"relative"}
                    zIndex={3}
                >
                    <Typography
                        component={"h2"}
                        textAlign="center"
                        color={"#fff"}
                        id="section-2-title"
                        sx={{
                            fontWeight: 700,
                            fontSize: 96,
                            lineHeight: 1.14,
                            position: "sticky",
                            top: 240,
                            left: "50%",
                            whiteSpace: "nowrap",
                            transform: "translateX(0%)"
                        }}>
                        Galleries of tomorrow. <br />
                        Available today.
                    </Typography>
                    <AiriASection />
                </Box>
                <Box
                    position="relative"
                    bgcolor={"#0B1418"}
                >
                    <IslandSection />
                </Box>
                <Box
                    height={"200vh"}>
                    <Box
                        bgcolor={"#0B1418"}
                        id="section-4"
                        sx={{
                            height: "100vh",
                            display: "grid",
                            position: "relative",
                            placeContent: "center",
                            marginTop: "540px"
                        }}
                    >
                        <Typography
                            component="p"
                            id="section-4-content"
                            sx={{
                                fontSize: 56,
                                fontWeight: 600,
                                color: "#0B1418",
                                maxWidth: 1266,
                                position: "relative",
                                lineHeight: 1.65,
                                textAlign: "center",
                                zIndex: 2,
                                letterSpacing: "-0.06em"
                            }}
                        >
                            Moduluc builds, maintains, and routinely upgrades applications for the creation of photorealistic virtual experiences. Our engineering and design teams have spent decades building 3D assets, tools, and back-end infrastructure in order to enable the creation of delightful immersive environments.
                        </Typography>
                        <Typography
                            component="h1"
                            id="section-5-content"
                            sx={{
                                fontSize: 156,
                                fontWeight: 700,
                                color: "#0B1418",
                                position: "absolute",
                                // left: "50%",
                                width: "100%",
                                bottom: 0,
                                lineHeight: 0.96,
                                textAlign: "center",
                                zIndex: 2,
                                letterSpacing: "-0.06em"
                            }}
                        >
                            Immersive
                        </Typography>
                        <Box
                            id="section-4-bg"
                            bgcolor="#fff"
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </Box>

                    <Box
                        bgcolor={"#0B1418"}
                        id="section-5"
                        sx={{
                            height: "100vh",
                            display: "grid",
                            position: "relative",
                            placeContent: "center",
                            marginTop: "540px"
                        }}
                    >
                        <TiledModuluc />
                        <Box
                            id="section-5-bg"
                            bgcolor="#fff"
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </Box>
                </Box>
                <HomeEndSection />
            </Box>
        </Box>
    )
}