import React, { useEffect ,useRef} from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import * as style from "./index.module.css"
import AndroidButton from "../assets/AndroidDownl;oad"
import IOSButton from "../assets/IOSlogo"
import Layout from "../components/Layout"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { isScrolledIntoView } from "../components/isScrolled"
export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [AOS])
 useEffect(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
  }
 },)
  // useEffect(() => {
  //   let x = document.getElementById("test-div")
  //   document.addEventListener("scroll", function (e) {
  //     console.log(e)
  //     let isVisible = isScrolledIntoView(x)
  //     console.log("is visible", isVisible)
  //   })

  //   return () => {
  //     document.removeEventListener("scroll", function () {
  //       console.log("removed")
  //     })
  //   }
  // }, [])

  const reviewRef = useRef();
  const improveRef = useRef();
  const learnRef = useRef();
  const communityRef = useRef();
  const personalRef = useRef();
  const coachingRef = useRef();
  useEffect(() => {
    gsap.to(personalRef.current , {
      scrollTrigger:{
        start:"top center",
        scrub:true,
        end: "bottom"
      },
      x:600,
    }

  )
  gsap.to(coachingRef.current , {
    scrollTrigger:{
      start:"top center",
      scrub:true,
      end: "bottom"
    },
    x:-500,
  }

)
    gsap.to(reviewRef.current , {
        scrollTrigger:{
          start:"top center",
          scrub:true,
          end: "bottom 20%"
        },
        x:600,
      }

    )
    gsap.to(improveRef.current , {
      scrollTrigger:{
        start:"top center",
        scrub:true,
        end: "bottom"
      },
      x:-600,
    }

  )
  gsap.to(learnRef.current , {
    scrollTrigger:{
      start:"top center",
      scrub:true,
      end: "bottom 20%"
    },
    x:600,
  }

)
gsap.to(communityRef.current , {
  scrollTrigger:{
    start:"top center",
    scrub:true,
    end: "bottom"
  },
  x:-600,
}

)
  })

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.contentHolder}>
          <section className={style.headContent}>
            <img
              src={"/sage-logo.png"}
              className={style.logo}
              alt="sage-logo.png"
              data-aos="zoom-in"
            />
            <div>
              {" "}
              <p className={style.sologon}>
                <span>
                  <span data-aos="fade-up" data-aos-offset="100">
                    Sage is an app
                  </span>
                </span>
                <span>
                  <span data-aos="fade-up" data-aos-offset="100">
                    that helps you improve at
                  </span>
                </span>
                <span>
                  <span data-aos="fade-up" data-aos-offset="100">
                    League of Legends
                  </span>
                </span>
              </p>
              <p style={{ fontFamily: "Inter" }}>
                Available on IOS and Android
              </p>
              <button className={style.donwloadButton}>DOWNLOAD</button>
            </div>

            <div className={style.downloadLink}>
              <a href="#">
                <IOSButton />
              </a>
              <a href="#">
                <AndroidButton />
              </a>
            </div>
          </section>
          <div className={style.headSlider}>
            <img
              src={"/sage-1.png"}
              className={style.headimage}
              alt="sage-1.png"
            />
            <div
              id="test-div"
              className={style.slideImg}
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            />
            <div className={style.personal} ref={personalRef}/>
              <div className={style.coaching} ref ={coachingRef}/>
          </div>
          <div className={style.heading2}>
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              — HOW IT WORKS
            </h1>
          </div>
          <section className={style.contentHolder2}>
            <div className={style.slideImg}/>
            <div className={style.review} ref={reviewRef}>

            </div>
            <div className={style.datacontainer}>
              <div className={style.alignment}>
                <div className={style.textdiv}>
                  <h2>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        01.
                      </span>
                    </span>
                  </h2>
                  <h1>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        MATCH
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        REVIEWS BY
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        PROFESSIONAL
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        PLAYERS
                      </span>
                    </span>
                  </h1>
                  <p>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        Choose which of your matches to
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        submit to our network of
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        professional League of Legends players
                      </span>
                    </span>
                  </p>
                </div>
                <img
                  src={"/sage-2.png"}
                  className={style.images}
                  alt="sage-2.png"
                />
              </div>
            </div>
          </section>
          <section className={style.contentHolder2}>
            <div className={style.slideImg}/>
              <div className={style.improve} ref={improveRef}></div>
            <div className={style.datacontainer}>
              <div className={style.alignment}>
                <div className={style.textdiv}>
                  <h2>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        02.
                      </span>
                    </span>
                  </h2>
                  <h1>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        get
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        personal
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        feedback
                      </span>
                    </span>
                  </h1>
                  <p>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        One of our coaches will compile
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        video
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        feedback on your match, providing
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        insights on how you can imporve
                      </span>
                    </span>
                  </p>
                </div>
                <img
                  src={"/sage-3.png"}
                  className={style.images}
                  alt="sage-3.png"
                />
              </div>
            </div>
          </section>
          <section className={style.contentHolder2}>
            <div className={style.slideImg}/>
              <div className={style.learn} ref={learnRef}></div>
            <div className={style.datacontainer}>
              <div className={style.alignment}>
                <div className={style.textdiv}>
                  <h2>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        03.
                      </span>
                    </span>
                  </h2>
                  <h1>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        explore
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        {" "}
                        and
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        learn
                      </span>
                    </span>
                  </h1>
                  <p>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        Search other player's reviews
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        and learn about different champions
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        roles, combos, and more
                      </span>
                    </span>
                  </p>
                </div>
                <img
                  src={"/sage-4.png"}
                  className={style.images}
                  alt="sage-4.png"
                />
              </div>
            </div>
          </section>
          <section className={style.contentHolder2}>
            <div
              className={style.slideImg}
             
            />
              <div className={style.community} ref={communityRef}></div>
            <div className={style.datacontainer}>
              <div className={style.alignment}>
                <div className={style.textdiv}>
                  <h2>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        04.
                      </span>
                    </span>
                  </h2>
                  <h1>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        help
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        {" "}
                        other
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        players
                      </span>
                    </span>
                  </h1>
                  <p>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        Join a community of League of Legends
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        players that want to improve
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        Comment on other player's reviews,
                      </span>
                    </span>
                    <span>
                      <span data-aos="fade-up" data-aos-offset="100">
                        offer advice, earn karma
                      </span>
                    </span>
                  </p>
                </div>
                <img
                  src={"/sage-5.png"}
                  className={style.images}
                  alt="sage-5.png"
                />
              </div>
            </div>
          </section>
          </div>
        </div>
    </Layout>
  )
}
