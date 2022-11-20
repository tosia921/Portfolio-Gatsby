import React from "react"

import TechCard from "./techCard"

const MyTech = () => {
  return (
    <section className="my-tech" id="tech">
      <h3>My Tech</h3>
      <p className="tech-description">
        These are some of my favorite technologies that I enjoy working with.
      </p>
      <div className="cards">
        <TechCard imageFileName="html5.png" name="HTML 5" imgAtl="html5 icon" />
        <TechCard imageFileName="css.png" name="CSS" imgAtl="css icon" />
        <TechCard
          imageFileName="tailwind.png"
          name="Tailwind CSS"
          imgAtl="tailwind icon"
        />

        <TechCard
          imageFileName="js.png"
          name="JavaScript"
          imgAtl="Javascript icon"
        />
        <TechCard
          imageFileName="typescript.png"
          name="TypeScript"
          imgAtl="Typescript icon"
        />
        <TechCard
          imageFileName="react.png"
          name="React JS"
          imgAtl="React icon"
        />
        <TechCard
          imageFileName="sass.png"
          name="React JS"
          imgAtl="React icon"
        />
        <TechCard
          imageFileName="gatsby.png"
          name="Gatsby JS"
          imgAtl="Gatsby js icon"
        />
        <TechCard
          imageFileName="next.png"
          name="Next JS"
          imgAtl="Gatsby js icon"
        />
        <TechCard
          imageFileName="sanity.png"
          name="Sanity CMS"
          imgAtl="Sanity Cms icon"
        />
        <TechCard
          imageFileName="storybook.png"
          name="Storybook"
          imgAtl="Storybook icon"
        />
        <TechCard
          imageFileName="shopify.png"
          name="Shopify"
          imgAtl="Shopify icon"
        />
      </div>
    </section>
  )
}

export default MyTech
