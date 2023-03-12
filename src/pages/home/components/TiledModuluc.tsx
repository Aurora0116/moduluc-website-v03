import { Box } from "@mui/material";

export default function TiledModuluc() {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 10
            }}
            id="tiled-moduluc"
        >
            <Box bgcolor={"#fff"} height="100vh" position="absolute" width="100%" left={0} top={0}
                sx={{
                    borderTop: "4px solid red",
                    borderBottom: "4px solid red"
                }}
                id="moduluc-animation"
            ></Box>
            <Box
                position={"fixed"}
                id="moduluc-tile-group"
                sx={{
                    width: 0,
                    height: 0,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%)",
                }}
            >
                {Array.from({ length: 16 }, (_, i) => (
                    <Box
                        position={"absolute"}
                        id={`moduluc-tile-${i + 1}`}
                        key={i}
                        sx={{
                            width: 32,
                            height: 32,
                            position: "absolute",
                            left: (i % 4) * 40 - 76,
                            top: Math.floor(i / 4) * 40 - 76,
                            borderRadius: "2px",
                            backgroundColor: "#0B1418",
                            color: "#fff"
                        }}
                    ></Box>
                ))}
                {array_1.map((item, i) => (
                    <Box
                        position={"absolute"}
                        id={`moduluc-tile-${i + 17}`}
                        key={i}
                        sx={{
                            width: 32,
                            height: 32,
                            position: "absolute",
                            left: item.x,
                            top: item.y,
                            borderRadius: "2px",
                            backgroundColor: "#0B1418",
                            color: "#fff"
                        }}
                    ></Box>
                ))}
            </Box>
        </Box >
    )
}

const array = [
    {
        x: -76,
        y: -76
    },
    {
        x: -36,
        y: -76
    },
    {
        x: 4,
        y: -76
    },
    {
        x: 44,
        y: -76
    },
    {
        x: -76,
        y: -36
    },
    {
        x: -36,
        y: -36
    },
    {
        x: 4,
        y: -36
    },
    {
        x: 44,
        y: -36
    },
    {
        x: -76,
        y: 4
    },
    {
        x: -36,
        y: 4
    },
    {
        x: 4,
        y: 4
    },
    {
        x: 44,
        y: 4
    },
    {
        x: -76,
        y: 44
    },
    {
        x: -36,
        y: 44
    },
    {
        x: 4,
        y: 44
    },
    {
        x: 44,
        y: 44
    },
    {
        x: -106,
        y: -106,
    },
    {
        x: 84,
        y: -106,
    },
    {
        x: -106,
        y: 84,
    },
    {
        x: 84,
        y: 84,
    }
]

const array_1 = [
    {
        x: -116,
        y: -116,
    },
    {
        x: 84,
        y: -116,
    },
    {
        x: -116,
        y: 84,
    },
    {
        x: 84,
        y: 84,
    }
]