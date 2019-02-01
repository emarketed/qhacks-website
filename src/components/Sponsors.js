import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import tdLogo from "../assets/img/sponsors/td.svg";
import qicLogo from "../assets/img/sponsors/qic.svg";
import dclLogo from "../assets/img/sponsors/dcl.svg";
import eceLogo from "../assets/img/sponsors/ece.svg";
import cseLogo from "../assets/img/sponsors/cse.svg";
// import amsLogo from "../assets/img/sponsors/ams.svg";
import iganLogo from "../assets/img/sponsors/igan.svg";
import mmieLogo from "../assets/img/sponsors/mmie.svg";
import snapLogo from "../assets/img/sponsors/snap.svg";
import telusLogo from "../assets/img/sponsors/telus.svg";
import mlhLogo from "../assets/img/sponsors/mlhText.svg";
import githubLogo from "../assets/img/sponsors/github.svg";
import sketchLogo from "../assets/img/sponsors/sketch.svg";
import ritualLogo from "../assets/img/sponsors/ritual.svg";
import loopioLogo from "../assets/img/sponsors/loopio.svg";
import tucowsLogo from "../assets/img/sponsors/tucows.svg";
import stdlibLogo from "../assets/img/sponsors/stdlib.svg";
import mosaicLogo from "../assets/img/sponsors/mosaic.svg";
import apolloLogo from "../assets/img/sponsors/apollo.svg";
import googleLogo from "../assets/img/sponsors/google.svg";
import indicoLogo from "../assets/img/sponsors/indico.svg";
import sodexoLogo from "../assets/img/sponsors/sodexo.svg";
import pccLogo from "../assets/img/sponsors/pcc.png";
import ratehubLogo from "../assets/img/sponsors/ratehub.svg";
import sunLifeLogo from "../assets/img/sponsors/sunlife.svg";
import wolframLogo from "../assets/img/sponsors/wolfram.svg";
import wakeupsLogo from "../assets/img/sponsors/wakeups.svg";
import deloitteLogo from "../assets/img/sponsors/deloitte.svg";
import balsamiqLogo from "../assets/img/sponsors/balsamiq.svg";
import kingstonLogo from "../assets/img/sponsors/kingston.svg";
import bloombergLogo from "../assets/img/sponsors/bloomberg.svg";
import consensysLogo from "../assets/img/sponsors/consensys.svg";
import ycombinator from "../assets/img/sponsors/ycombinator.svg";
import orangeGateLogo from "../assets/img/sponsors/orangeGate.svg";
import scotiabankLogo from "../assets/img/sponsors/scotiabank.svg";
import onePasswordLogo from "../assets/img/sponsors/1password.svg";
import stickermuleLogo from "../assets/img/sponsors/stickermule.svg";
import nationalBankLogo from "../assets/img/sponsors/nationalbank.svg";
import launchAcademyLogo from "../assets/img/sponsors/launchAcademy.svg";
import schoolOfComputingLogo from "../assets/img/sponsors/schoolOfComputing.svg";
import ramenVenturesLogo from "../assets/img/sponsors/ramenVentures.png";
import shopifyLogo from "../assets/img/sponsors/shopify.svg";
import foundersBetaLogo from "../assets/img/sponsors/foundersBeta.png";
import coinsquareLogo from "../assets/img/sponsors/coinsquare.png";
import munvoLogo from "../assets/img/sponsors/munvo.png";
import asusAmsEngSocLogo from "../assets/img/sponsors/asusAmsEngSoc.png";

const Sponsors = () => (
  <section
    id="sponsors"
    css={{
      backgroundColor: "#f8f8f8",
      " img": {
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <ContentWrapper>
      <div
        css={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          paddingTop: "80px"
        }}
      >
        {/* Sponsors */}
        <div>
          <h1>Sponsors</h1>

          {/* Tera */}
          <div
            css={{
              marginTop: "70px",
              marginBottom: "80px",
              "@media(max-width: 460px)": {
                marginBottom: "60px"
              }
            }}
          >
            {/* Tera Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginBottom: "80px",
                "@media(max-width: 460px)": {
                  marginBottom: "40px"
                },
                "@media(max-width: 980px)": {
                  marginBottom: "60px"
                }
              }}
            >
              <SponsorLink url="https://tucows.com">
                <img
                  src={tucowsLogo}
                  css={{
                    width: "500px",
                    "@media(max-width: 980px)": {
                      width: "400px"
                    },
                    "@media(max-width: 680px)": {
                      width: "300px"
                    },
                    "@media(max-width: 460px)": {
                      width: "250px"
                    }
                  }}
                  data-cy="test-sponsor-image"
                  alt="Tucows Logo"
                />
              </SponsorLink>
            </div>

            {/* Tera Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr"
              }}
            >
              <SponsorLink url="https://stdlib.com">
                <img
                  src={stdlibLogo}
                  css={{
                    width: "500px",
                    "@media(max-width: 980px)": {
                      width: "400px"
                    },
                    "@media(max-width: 680px)": {
                      width: "300px"
                    },
                    "@media(max-width: 460px)": {
                      width: "250px"
                    }
                  }}
                  data-cy="test-sponsor-image"
                  alt="Standard Library Logo"
                />
              </SponsorLink>
            </div>
          </div>

          {/* Giga */}
          <div
            css={{
              marginBottom: "80px",
              "@media(max-width: 500px)": {
                marginBottom: "60px"
              }
            }}
          >
            {/* Giga Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "60px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink url="https://sunlife.ca">
                <img
                  css={{
                    width: "400px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "200px"
                    },
                    "@media(max-width: 500px)": {
                      width: "200px"
                    }
                  }}
                  src={sunLifeLogo}
                  alt="Sun Life Financial Logo"
                />
              </SponsorLink>
              <SponsorLink url="http://www.iganpartners.com">
                <img
                  css={{
                    width: "400px",
                    marginTop: "15px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "200px"
                    },
                    "@media(max-width: 500px)": {
                      width: "190px",
                      marginTop: "25px"
                    }
                  }}
                  src={iganLogo}
                  alt="iGan Partners Logo"
                />
              </SponsorLink>
            </div>

            {/* Giga Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 500px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink url="https://distributed.computer">
                <img
                  css={{
                    width: "360px",
                    "@media(max-width: 980px)": {
                      width: "280px"
                    },
                    "@media(max-width: 680px)": {
                      width: "200px"
                    },
                    "@media(max-width: 500px)": {
                      width: "190px"
                    }
                  }}
                  src={dclLogo}
                  alt="Distributed Compute Labs Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.nbc.ca">
                <img
                  css={{
                    width: "450px",
                    "@media(max-width: 980px)": {
                      width: "330px"
                    },
                    "@media(max-width: 680px)": {
                      width: "240px"
                    },
                    "@media(max-width: 500px)": {
                      width: "220px",
                      marginTop: "25px"
                    }
                  }}
                  src={nationalBankLogo}
                  alt="National Bank Logo"
                />
              </SponsorLink>
            </div>

            {/* Giga Row 3 */}

            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginBottom: "60px"
              }}
            >
              <SponsorLink url="https://snap.com">
                <img
                  src={snapLogo}
                  alt="Snap Inc."
                  css={{
                    width: "400px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "200px"
                    },
                    "@media(max-width: 500px)": {
                      width: "190px"
                    }
                  }}
                />
              </SponsorLink>
            </div>
          </div>

          {/* Mega */}
          <div
            css={{
              marginBottom: "85px",
              "@media(max-width: 610px)": {
                marginBottom: "75px"
              }
            }}
          >
            {/* Mega Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "50px",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://consensys.net">
                <img
                  src={consensysLogo}
                  css={{
                    width: "300px",
                    "@media(max-width: 910px)": {
                      width: "220px"
                    },
                    "@media(max-width: 610px)": {
                      width: "180px",
                      marginBottom: "20px"
                    }
                  }}
                  alt="Consensys Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://td.ca">
                <img
                  src={tdLogo}
                  css={{
                    width: "100px",
                    "@media(max-width: 910px)": {
                      width: "70px"
                    },
                    "@media(max-width: 610px)": {
                      width: "60px",
                      marginBottom: "20px"
                    }
                  }}
                  alt="TD Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://ratehub.ca">
                <img
                  src={ratehubLogo}
                  css={{
                    width: "275px",
                    "@media(max-width: 910px)": {
                      width: "200px"
                    },
                    "@media(max-width: 610px)": {
                      width: "160px"
                    }
                  }}
                  alt="Ratehub Logo"
                />
              </SponsorLink>
            </div>

            {/* Mega Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "50px",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://scotiabank.ca">
                <img
                  src={scotiabankLogo}
                  css={{
                    width: "300px",
                    "@media(max-width: 910px)": {
                      width: "220px"
                    },
                    "@media(max-width: 610px)": {
                      width: "170px",
                      marginBottom: "20px"
                    }
                  }}
                  alt="Scotiabank Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://loopio.com">
                <img
                  src={loopioLogo}
                  css={{
                    width: "170px",
                    "@media(max-width: 910px)": {
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px",
                      marginBottom: "20px"
                    }
                  }}
                  alt="Loopio Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.telus.com/en">
                <img
                  src={telusLogo}
                  css={{
                    width: "250px",
                    "@media(max-width: 910px)": {
                      width: "170px"
                    },
                    "@media(max-width: 610px)": {
                      width: "140px"
                    }
                  }}
                  alt="Telus Logo"
                />
              </SponsorLink>
            </div>

            {/* Mega Row 3 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                width: "60%",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "50px",
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://www2.deloitte.com/ca/en.html">
                <img
                  src={deloitteLogo}
                  css={{
                    width: "200px",
                    "@media(max-width: 910px)": {
                      width: "130px"
                    },
                    "@media(max-width: 610px)": {
                      width: "110px",
                      marginBottom: "20px"
                    }
                  }}
                  alt="Deloitte Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.cse-cst.gc.ca/en">
                <img
                  src={cseLogo}
                  css={{
                    width: "230px",
                    "@media(max-width: 910px)": {
                      width: "160px"
                    },
                    "@media(max-width: 610px)": {
                      width: "120px"
                    }
                  }}
                  alt="Communications Security Establishment Logo"
                />
              </SponsorLink>
            </div>
          </div>

          {/* Startup */}
          <div
            css={{
              ">div.fourCol": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 920px)": {
                  gridTemplateColumns: "1fr 1fr",
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10px"
                },
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  width: "90%",
                  marginBottom: "0px"
                }
              }
            }}
          >
            {/* Startup Row 1 */}
            <div className="fourCol">
              <SponsorLink url="https://balsamiq.com">
                <img
                  src={balsamiqLogo}
                  css={{
                    width: "150px",
                    "@media(max-width: 920px)": {
                      width: "120px",
                      marginBottom: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginBottom: "10px"
                    }
                  }}
                  alt="Balsamiq Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://careers.google.com">
                <img
                  src={googleLogo}
                  css={{
                    width: "150px",
                    "@media(max-width: 920px)": {
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginBottom: "10px",
                      marginTop: "10px"
                    }
                  }}
                  alt="Google Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://ritual.co">
                <img
                  src={ritualLogo}
                  css={{
                    width: "150px",
                    marginTop: "5px",
                    "@media(max-width: 920px)": {
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginBottom: "10px"
                    }
                  }}
                  alt="Ritual Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://sketchapp.com">
                <img
                  src={sketchLogo}
                  css={{
                    width: "200px",
                    marginTop: "0px",
                    "@media(max-width: 920px)": {
                      width: "140px",
                      marginBottom: "20px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "15px"
                    }
                  }}
                  alt="Sketch Logo"
                />
              </SponsorLink>
            </div>

            {/* Startup Row 2 */}
            <div className="fourCol">
              <SponsorLink url="https://coinsquare.com">
                <img
                  src={coinsquareLogo}
                  css={{
                    width: "200px",
                    marginTop: "10px",
                    "@media(max-width: 920px)": {
                      width: "140px",
                      marginTop: "30px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "20px"
                    }
                  }}
                  alt="Coinsquare Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.mosaicmfg.com">
                <img
                  src={mosaicLogo}
                  css={{
                    width: "150px",
                    marginTop: "10px",
                    "@media(max-width: 920px)": {
                      width: "130px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "10px"
                    }
                  }}
                  alt="Mosaic Manufacturing Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://wake-ups.com">
                <img
                  src={wakeupsLogo}
                  css={{
                    width: "100px",
                    marginTop: "-10px",
                    "@media(max-width: 920px)": {
                      width: "80px",
                      marginBottom: "10px",
                      marginTop: "15px"
                    },
                    "@media(max-width: 610px)": {
                      width: "60px"
                    }
                  }}
                  alt="Wakeups Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://1password.com">
                <img
                  src={onePasswordLogo}
                  css={{
                    width: "170px",
                    marginTop: "20px",
                    "@media(max-width: 920px)": {
                      width: "140px",
                      marginTop: "28px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "15px"
                    }
                  }}
                  alt="One Password Logo"
                />
              </SponsorLink>
            </div>
            {/* Startup Row 3 */}
            <div className="fourCol">
              <SponsorLink url="https://www.apollographql.com">
                <img
                  src={apolloLogo}
                  css={{
                    width: "140px",
                    "@media(max-width: 920px)": {
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "10px"
                    }
                  }}
                  alt="Apollo Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.ycombinator.com">
                <img
                  src={ycombinator}
                  css={{
                    width: "180px",
                    marginTop: "-15px",
                    "@media(max-width: 920px)": {
                      width: "130px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "0"
                    }
                  }}
                  alt="Y Combinator Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.shopify.com">
                <img
                  src={shopifyLogo}
                  css={{
                    width: "160px",
                    marginTop: "5px",
                    "@media(max-width: 920px)": {
                      width: "130px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "0"
                    }
                  }}
                  alt="Shopify Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://indico.io">
                <img
                  src={indicoLogo}
                  css={{
                    width: "120px",
                    marginTop: "10px",
                    "@media(max-width: 920px)": {
                      width: "90px",
                      marginTop: "10px"
                    },
                    "@media(max-width: 610px)": {
                      width: "60px"
                    }
                  }}
                  alt="Indico Logo"
                />
              </SponsorLink>
            </div>
            {/* Startup Row 4 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 920px)": {
                  gridTemplateColumns: "1fr",
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10px"
                },
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  width: "90%",
                  marginBottom: "0px"
                }
              }}
            >
              <SponsorLink url="https://munvo.com">
                <img
                  src={munvoLogo}
                  css={{
                    width: "150px",
                    marginTop: "-20px",
                    "@media(max-width: 920px)": {
                      marginTop: 0,
                      width: "120px"
                    },
                    "@media(max-width: 610px)": {
                      width: "100px"
                    }
                  }}
                  alt="Munvo Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://ramen.vc">
                <img
                  src={ramenVenturesLogo}
                  css={{
                    width: "90px",
                    marginTop: "-20px",
                    "@media(max-width: 920px)": {
                      width: "80px",
                      marginTop: "15px"
                    },
                    "@media(max-width: 610px)": {
                      marginTop: "20px",
                      width: "60px"
                    }
                  }}
                  alt="Ramen Ventures Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.launchacademy.ca">
                <img
                  src={launchAcademyLogo}
                  css={{
                    width: "180px",
                    marginTop: "10px",
                    "@media(max-width: 920px)": {
                      width: "140px",
                      marginTop: "20px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px"
                    }
                  }}
                  alt="Launch Academy Logo"
                />
              </SponsorLink>
            </div>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "40px",
                "@media(max-width: 920px)": {
                  gridTemplateColumns: "1fr",
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10px"
                },
                "@media(max-width: 610px)": {
                  gridTemplateColumns: "1fr",
                  width: "90%",
                  marginBottom: "0px"
                }
              }}
            >
              <SponsorLink url="https://www.orangegate.ca">
                <img
                  src={orangeGateLogo}
                  css={{
                    width: "200px",
                    marginTop: "10px",
                    "@media(max-width: 920px)": {
                      width: "140px",
                      marginTop: "20px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "20px"
                    }
                  }}
                  alt="Orange Gate Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://www.foundersbeta.com">
                <img
                  src={foundersBetaLogo}
                  css={{
                    width: "200px",
                    "@media(max-width: 920px)": {
                      marginTop: "15px"
                    },
                    "@media(max-width: 610px)": {
                      marginTop: "15px",
                      width: "90px"
                    }
                  }}
                  alt="FoundersBeta Logo"
                />
              </SponsorLink>
              <SponsorLink url="https://wolfram.com/language">
                <img
                  src={wolframLogo}
                  css={{
                    width: "150px",
                    "@media(max-width: 920px)": {
                      width: "120px",
                      marginTop: "10px"
                    },
                    "@media(max-width: 610px)": {
                      width: "90px",
                      marginTop: "20px"
                    }
                  }}
                  alt="Wolfram Logo"
                />
              </SponsorLink>
            </div>
          </div>
        </div>

        {/* Partners */}

        <div
          css={{
            paddingTop: "70px",
            paddingBottom: "70px"
          }}
        >
          <h1 css={{ paddingBottom: "40px" }}>Our Partners</h1>
          <p
            css={{
              fontWeight: "bold",
              color: "#c81c2e",
              paddingBottom: "24px",
              ">a": {
                color: "#c81c2e",
                textDecoration: "underline",
                ":hover": { textDecoration: "none" }
              }
            }}
          >
            Interested in partnering? Contact us at{" "}
            <a
              data-cy="partners-email-prompt"
              href="mailto:partnership@qhacks.io"
              css={{
                fontSize: "16px",
                fontWeight: "bold"
              }}
            >
              partnership@qhacks.io
            </a>
          </p>
          <ActionButton
            backgroundColor="#f8f8f8"
            foregroundColor="#c81c2e"
            type="rounded"
            link="https://qhacks.nyc3.cdn.digitaloceanspaces.com/documents/QHacksPartnershipPackage.pdf"
          >
            Partnership Package
          </ActionButton>
        </div>

        {/* School */}
        <div
          css={{
            marginBottom: "100px"
          }}
        >
          {/* School Row 1 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "25px"
            }}
          >
            <SponsorLink url="https://www.ece.queensu.ca">
              <img
                src={eceLogo}
                css={{
                  width: "200px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="ECE Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 2 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="http://www.cs.queensu.ca">
              <img
                src={schoolOfComputingLogo}
                alt="Queen's School of Computing"
                css={{
                  marginTop: "20px",
                  width: "400px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
              />
            </SponsorLink>
            {/*asusAmsEngSocLogo*/}
            <SponsorLink url="https://www.queensu.ca/">
              <img
                src={asusAmsEngSocLogo}
                alt="AMS, ASUS, and EngSoc"
                css={{
                  width: "280px",
                  marginTop: "20px",
                  "@media(max-width: 980px)": {
                    width: "200px"
                  },
                  "@media(max-width: 680px)": {
                    width: "150px"
                  },
                  "@media(max-width: 570px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
              />
            </SponsorLink>
          </div>

          {/* School Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://smith.queensu.ca/grad_studies/mei">
              <img
                src={mmieLogo}
                css={{
                  width: "400px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
                alt="MMIE Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://queensu.ca/innovationcentre">
              <img
                src={qicLogo}
                css={{
                  width: "400px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "310px"
                  },
                  "@media(max-width: 680px)": {
                    width: "250px"
                  },
                  "@media(max-width: 460px)": {
                    width: "230px"
                  }
                }}
                alt="QIC Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 4 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://dining.queensu.ca">
              <img
                src={sodexoLogo}
                css={{
                  width: "350px",
                  "@media(max-width: 980px)": {
                    width: "290px"
                  },
                  "@media(max-width: 680px)": {
                    width: "230px"
                  },
                  "@media(max-width: 460px)": {
                    width: "210px"
                  }
                }}
                alt="Sodexo and Coca-Cola Logo"
              />
            </SponsorLink>
            <SponsorLink url="http://thepcc.net">
              <img
                src={pccLogo}
                css={{
                  width: "230px",
                  "@media(max-width: 980px)": {
                    width: "190px"
                  },
                  "@media(max-width: 680px)": {
                    width: "130px"
                  },
                  "@media(max-width: 570px)": {
                    width: "110px",
                    marginTop: "15px"
                  }
                }}
                alt="P&CC Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 5 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://www.cityofkingston.ca/city-hall/projects-construction/mayors-innovation-challenge">
              <img
                src={kingstonLogo}
                css={{
                  width: "180px",
                  "@media(max-width: 980px)": {
                    width: "150px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "100px"
                  }
                }}
                alt="City of Kingston Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 6 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "40px",
              "@media(max-width: 570px)": {
                gridTemplateColumns: "1fr",
                marginBottom: "20px"
              }
            }}
          >
            <SponsorLink url="https://www.bloomberg.com/canada">
              <img
                src={bloombergLogo}
                css={{
                  width: "200px",
                  marginTop: "30px",
                  "@media(max-width: 980px)": {
                    width: "180px"
                  },
                  "@media(max-width: 680px)": {
                    width: "160px",
                    marginBottom: "10px"
                  },
                  "@media(max-width: 460px)": {
                    width: "130px"
                  }
                }}
                alt="Bloomberg Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://www.stickermule.com/ca">
              <img
                src={stickermuleLogo}
                css={{
                  width: "150px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="Stickermule Logo"
              />
            </SponsorLink>
            <SponsorLink url="https://education.github.com/pack">
              <img
                src={githubLogo}
                css={{
                  width: "150px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "140px"
                  },
                  "@media(max-width: 680px)": {
                    width: "120px"
                  },
                  "@media(max-width: 460px)": {
                    width: "90px"
                  }
                }}
                alt="GitHub Logo"
              />
            </SponsorLink>
          </div>

          {/* School Row 6 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr"
            }}
          >
            <SponsorLink url="https://mlh.io">
              <img
                src={mlhLogo}
                css={{
                  width: "150px",
                  marginTop: "25px",
                  "@media(max-width: 980px)": {
                    width: "130px"
                  },
                  "@media(max-width: 680px)": {
                    width: "100px"
                  },
                  "@media(max-width: 460px)": {
                    width: "80px"
                  }
                }}
                alt="MLH Logo"
              />
            </SponsorLink>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
