import { useLayoutEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHomeGsap = (ref: React.RefObject<HTMLElement>) => {
    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            if (self.selector) {
                gsap.fromTo("#text-01", {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                });
                gsap.fromTo("#text-01",
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                        x: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#text-01",
                            start: "top top",
                            end: "bottom 0%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#main-bg",
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#text-01",
                            start: "top top",
                            end: "bottom 0%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo(["#section-2-img-box", "section-2-bg"],
                    {
                        width: 1200,
                        height: 647,
                    },
                    {
                        width: 1400,
                        height: "calc(100vh - 220px)",
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-2-title",
                            start: "top top",
                            end: "bottom 0%",
                            scrub: true,
                        },
                    }
                );
                gsap.to("#section-2-title",
                    {
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-2-img-box",
                            start: "top 80%",
                            end: "top 20%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-2-img-box",
                    {
                        width: 1400,
                    },
                    {
                        width: 1200,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-download",
                            start: "bottom 50%",
                            end: "top",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo(["#section-2-img", "#section-2-content"],
                    {
                        opacity: 1
                    },
                    {
                        width: 1200,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-download",
                            start: "bottom 50%",
                            end: "top",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-2-bg",
                    {
                        opacity: 1
                    },
                    {
                        width: 1200,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-download",
                            start: "bottom 20%",
                            end: "bottom",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-2-img",
                    {
                        marginTop: -300
                    },
                    {
                        marginTop: -100,
                        duration: 5,
                        // height: "calc(100vh - 220px)",
                        scrollTrigger: {
                            trigger: "#section-2-title",
                            start: "top top",
                            end: "bottom 0%",
                            scrub: true,
                        },
                    }
                );

                gsap.fromTo(["#section-3-img", "#section-3-content"],
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-3-img",
                            start: "top 60%",
                            end: "top 40%",
                            scrub: true,
                        },
                    }
                );

                gsap.fromTo("#section-3-img-box",
                    {
                        width: 1200,
                        height: 647,
                    },
                    {
                        width: 1400,
                        height: "calc(100vh - 220px)",
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-3-img-box",
                            start: "top 60%",
                            end: "top 40%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-3-img",
                    {
                        marginTop: -100
                    },
                    {
                        marginTop: -320,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-3-img-box",
                            start: "top 60%",
                            end: "top 40%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-3",
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: "#section-3-img-box",
                            start: "bottom 20%",
                            end: "bottom 0%",
                            scrub: true,
                        },
                    }
                )
                gsap.fromTo("#section-4-bg",
                    {
                        position: "absolute"
                    },
                    {
                        position: "fixed",
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-3-img-box",
                            start: "bottom 18%",
                            // end: "top 20%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-4",
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-4",
                            start: "top 18%",
                            end: "top",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-content",
                    {
                        y: 300,
                    },
                    {
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-4",
                            start: "top 12%",
                            end: "top",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-4-content",
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-4",
                            start: "top 5%",
                            end: "top",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-4-content",
                    {
                        opacity: 1,
                        y: 0,
                    },
                    {
                        opacity: 0,
                        y: -500,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-4-content",
                            start: "top 5%",
                            end: "top",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-5-content",
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.6
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-4-content",
                            start: "top",
                            end: "top -10%",
                            scrub: true,
                        },
                    }
                );

                gsap.fromTo("#section-5-content",
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 0%",
                            end: "top 20%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-4-bg",
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#section-3-img-box",
                            start: "top 45%",
                            end: "top 20%",
                            scrub: true,
                        },
                    }
                );
                gsap.from("#moduluc-tile-1",
                    {
                        backgroundColor: "#40535C",
                        left: -1000,
                        top: -800,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 4.8%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-2",
                    {
                        backgroundColor: "#40535C",
                        left: -800,
                        top: -1000,
                        filter: "blur(5px)",
                        scale: 60,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-3",
                    {
                        backgroundColor: "#40535C",
                        left: 500,
                        top: -600,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-4",
                    {
                        backgroundColor: "#40535C",
                        left: 1000,
                        top: -900,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-5",
                    {
                        backgroundColor: "#40535C",
                        left: -200,
                        top: -200,
                        filter: "blur(5px)",
                        scale: 25,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5.5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-6",
                    {
                        backgroundColor: "#40535C",
                        left: -2500,
                        top: -2000,
                        filter: "blur(5px)",
                        scale: 50,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-7",
                    {
                        backgroundColor: "#40535C",
                        left: 900,
                        top: -1800,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-8",
                    {
                        backgroundColor: "#40535C",
                        left: 2850,
                        top: -200,
                        filter: "blur(5px)",
                        scale: 40,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-9",
                    {
                        backgroundColor: "#40535C",
                        left: -1000,
                        top: 800,
                        filter: "blur(5px)",
                        scale: 30,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-10",
                    {
                        backgroundColor: "#40535C",
                        left: -800,
                        top: 1000,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-11",
                    {
                        backgroundColor: "#40535C",
                        left: 500,
                        top: 600,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-12",
                    {
                        backgroundColor: "#40535C",
                        left: 1000,
                        top: 900,
                        filter: "blur(5px)",
                        scale: 30,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-13",
                    {
                        backgroundColor: "#40535C",
                        left: -500,
                        top: 200,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-14",
                    {
                        backgroundColor: "#40535C",
                        left: -2500,
                        top: 2000,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-15",
                    {
                        backgroundColor: "#40535C",
                        left: 900,
                        top: 1800,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-16",
                    {
                        backgroundColor: "#40535C",
                        left: 2550,
                        top: 1200,
                        filter: "blur(5px)",
                        scale: 15,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-17",
                    {
                        backgroundColor: "#40535C",
                        left: -1500,
                        top: -2000,
                        filter: "blur(3px)",
                        scale: 50,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-18",
                    {
                        backgroundColor: "#40535C",
                        left: 2500,
                        top: -2000,
                        filter: "blur(5px)",
                        scale: 30,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-19",
                    {
                        backgroundColor: "#40535C",
                        left: -900,
                        top: 1800,
                        filter: "blur(5px)",
                        scale: 50,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#moduluc-tile-20",
                    {
                        backgroundColor: "#40535C",
                        left: 2550,
                        top: 1200,
                        filter: "blur(5px)",
                        scale: 60,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )
                gsap.from("#tiled-moduluc",
                    {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 45%",
                            end: "top 5%",
                            scrub: true,
                        },
                    }
                )

                gsap.to([
                    "#moduluc-tile-1",
                    "#moduluc-tile-2",
                    "#moduluc-tile-3",
                    "#moduluc-tile-4",
                    "#moduluc-tile-5",
                    "#moduluc-tile-6",
                    "#moduluc-tile-7",
                    "#moduluc-tile-8",
                    "#moduluc-tile-9",
                    "#moduluc-tile-10",
                    "#moduluc-tile-11",
                    "#moduluc-tile-12",
                    "#moduluc-tile-13",
                    "#moduluc-tile-14",
                    "#moduluc-tile-15",
                    "#moduluc-tile-16",
                    "#moduluc-tile-17",
                    "#moduluc-tile-18",
                    "#moduluc-tile-19",
                    "#moduluc-tile-20",
                ],
                    {
                        backgroundColor: "#FF015B",
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top 1%",
                            end: "top -5%",
                            scrub: true,
                        },
                    }
                )
                gsap.to(["#section-5-bg", "#section-4-bg"],
                    {
                        backgroundColor: "#060D10",
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top -3%",
                            end: "top -10%",
                            scrub: true,
                        },
                    }
                )
                gsap.to("#moduluc-tile-group",
                    {
                        filter: "blur(0.5px) drop-shadow(0px 0px 250px rgba(255, 1, 91, 0.7)) drop-shadow(0px 0px 20px rgba(255, 1, 91, 0.65)) drop-shadow(0px 0px 4px rgba(255, 1, 91, 0.75))",
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top -3%",
                            end: "top -10%",
                            scrub: true,
                        },
                    }
                )
                gsap.to("#moduluc-tile-group",
                    {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: "#section-5-content",
                            start: "top -30%",
                            end: "top -50%",
                            scrub: true,
                        },
                    }
                )
            }

        }, ref); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
};
