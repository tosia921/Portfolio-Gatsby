import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TechCard = ({ imageFileName, name, imgAlt }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            childrenImageSharp {
              gatsbyImageData
            }
            absolutePath
          }
        }
      }
    }
  `)

  const imageData = data.allFile.edges.filter(edge =>
    edge.node.absolutePath.includes(`src/assets/icons/${imageFileName}`)
  )

  const image = getImage(imageData[0].node.childrenImageSharp[0])

  return (
    <div className="tech-card">
      <div className="image">
        <GatsbyImage image={image} alt={imgAlt} />
      </div>
      <p className="name">{name}</p>
    </div>
  )
}

export default TechCard
