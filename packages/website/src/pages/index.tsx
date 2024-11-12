import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Heading from "@theme/Heading"
import Layout from "@theme/Layout"
import clsx from "clsx"
import type * as React from "react"
import styles from "./index.module.css"

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Header />
      <main>
        <Features />
      </main>
    </Layout>
  )
}

function Header() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

type FeatureProps = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const features: FeatureProps[] = [
  {
    title: "Interactive Cluster Visualizations",
    Svg: require("@site/static/img/undraw_instant_analysis_re_mid5.svg")
      .default,
    description: (
      <>
        Explore and interact with spectrogram data through dynamic clusters for
        deeper audio insights.
      </>
    ),
  },
  {
    title: "Customizable Visualization Tools",
    Svg: require("@site/static/img/undraw_adjustments_re_gvct.svg").default,
    description: (
      <>
        Tailor your visualizations by customizing spectrogram displays and
        zooming in for more detailed analysis.
      </>
    ),
  },
  {
    title: "Seamless React Integration",
    Svg: require("@site/static/img/undraw_react_re_g3ui.svg").default,
    description: (
      <>
        Leverage the power of React to integrate SpecCluster into your
        applications effortlessly.
      </>
    ),
  },
]

function Feature(props: FeatureProps) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <props.Svg width={200} height={200} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{props.title}</Heading>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 0",
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row">
          {features.map(props => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
