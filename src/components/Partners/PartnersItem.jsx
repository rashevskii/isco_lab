import { PartnerBage1 } from "./PartnersBages/PartnerBage1";
import { PartnerBage2 } from "./PartnersBages/PartnerBage2";
import { PartnerBage3 } from "./PartnersBages/PartnerBage3";
import { PartnerBage4 } from "./PartnersBages/PartnerBage4";
import partnerLogo from "../../assets/images/partner-logo.png";
import fb from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";

export const PartnersItem = () => {
  return (
    <div className="partnersItem">
      <PartnerBage1
        title={"Pepsi"}
        text={
          "А ещё интерактивные прототипы, вне зависимости от их уровня, должны быть представлены в исключительно положительном свете."
        }
        logo={partnerLogo}
        links={[
          { href: "/", path: fb },
          { href: "/", path: insta },
          { href: "/", path: youtube },
        ]}
      />
      <PartnerBage2
        title={"Pepsi"}
        text={
          "А ещё интерактивные прототипы, вне зависимости от их уровня, должны быть представлены в исключительно положительном свете."
        }
        logo={partnerLogo}
        links={[
          { href: "/", path: fb },
          { href: "/", path: insta },
          { href: "/", path: youtube },
        ]}
      />
      <PartnerBage3
        title={"Pepsi"}
        text={
          "А ещё интерактивные прототипы, вне зависимости от их уровня, должны быть представлены в исключительно положительном свете."
        }
        logo={partnerLogo}
        links={[
          { href: "/", path: fb },
          { href: "/", path: insta },
          { href: "/", path: youtube },
        ]}
      />
      <PartnerBage4
        title={"Pepsi"}
        text={
          "А ещё интерактивные прототипы, вне зависимости от их уровня, должны быть представлены в исключительно положительном свете."
        }
        logo={partnerLogo}
        links={[
          { href: "/", path: fb },
          { href: "/", path: insta },
          { href: "/", path: youtube },
        ]}
      />
    </div>
  );
};
