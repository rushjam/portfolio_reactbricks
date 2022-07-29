import React, { Children } from "react";
import classNames from "classnames";
import { Text, RichText, Image, types } from "react-bricks/frontend";
import Container, { Size } from "../../components/Container";
import Section, { Border } from "../../components/Section";

//=============================
// Local Types
//=============================

interface HeroUnitProps {
  width?: Size;
  heroTitle?: boolean;
  mobileTextCenter?: boolean;
  multiple?: boolean;
  imageSide?: "left" | "right";
  mobileImageTop?: boolean;
  mobileIcon?: boolean;
  hasShadow?: boolean;
  isRounded?: boolean;
  bulletsVariant?: { color: string; className: string };
}

//=============================
// Component to be rendered
//=============================
const MyHeroUnit: types.Brick<HeroUnitProps> = ({
  width = "lg",
  heroTitle = false,
  mobileTextCenter = false,
  multiple = false,
  imageSide = "right",
  mobileImageTop = false,
  mobileIcon = false,
  hasShadow = false,
  isRounded = false,
  // bulletsVariant = bulletColors.pinkLight.value,
}) => {
  return (
    <Section>
      <Container
        size={width}
        className={classNames(
          "py-12 lg:py-20 flex flex-no-wrap md:items-start md:space-x-8",
          mobileTextCenter ? "items-center" : "items-start",
          mobileImageTop ? "flex-col-reverse" : "flex-col",
          imageSide === "right"
            ? "md:flex-row"
            : "md:flex-row-reverse md:space-x-reverse"
        )}
      >
        <div
          className={classNames(
            "w-full md:flex-1 flex flex-col",
            imageSide === "right" ? "md:pr-1/10" : "md:pl-1/10"
          )}
        >
          <Text
          propName="heading"
          placeholder="Heading Line"
          renderBlock={({children}) => (
            <p className="text-pink-400 uppercase text-sm">{children}</p>
          )}

          ></Text>
        </div>
        <div
          className={classNames(
            "w-full md:flex-1 flex flex-col",
            imageSide === "right" ? "md:pr-1/10" : "md:pl-1/10"
          )}
        >
          <h1 className="text-white">Hello</h1>
          <h1 className="text-white">Hello</h1>
        </div>
        
      </Container>
    </Section>
  );
};

//=============================
// Brick Schema
//=============================
MyHeroUnit.schema = {
  name: "my-hero-unit",
  label: "Custom Hero Unit",
  category: "Hero",
  tags: ["Hero", "Landing Page"],
  getDefaultProps: () => ({
    heading: "Hi There!"
  }),

  }


export default MyHeroUnit;
