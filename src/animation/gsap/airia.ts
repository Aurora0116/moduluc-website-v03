import { useLayoutEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAiriAGsap = (ref: React.RefObject<HTMLElement>) => {
    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            if (self.selector) {
                gsap.fromTo(["#airia-section-1-title"], {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                });
                gsap.fromTo(["#sectin-1-download-group"], {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 2.5,
                });

                gsap.to("#section-1-bg",
                    {
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-section-1-title",
                            start: "top top",
                            end: "bottom 100",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo([
                    "#airia-section-1-title",
                    "#sectin-1-download-group"
                ],
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-section-1-title",
                            start: "top top",
                            end: "bottom 5%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-2-title-1",
                    {
                        marginLeft: -1500
                    },
                    {
                        marginLeft: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-section-1-title",
                            start: "bottom 3%",
                            end: "bottom -10%",
                            scrub: true,
                        },
                    }
                );
                gsap.fromTo("#section-2-title-2",
                    {
                        marginLeft: 2500
                    },
                    {
                        marginLeft: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: "#airia-section-1-title",
                            start: "bottom 3%",
                            end: "bottom -10%",
                            scrub: true,
                        },
                    }
                );
            }

        }, ref); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
};
