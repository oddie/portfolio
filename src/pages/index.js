import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const profileLinks = [
    {
        url: 'https://github.com/oddie',
        title: 'GitHub',
    },
    {
        url: 'https://www.linkedin.com/in/ovkovalev',
        title: 'LinkedIn'
    },

];

const projects = [
    {
        title: 'Project 1',
        description: 'Project',
        stack: 'Node.js',
        url: 'http',
        gallery: []
    }
];

const IndexPage = () => (
    <Layout>
        <div className={styles.textCenter}>
            <StaticImage
                src="../images/oleg_kovalev_avatar.jpg"
                loading="eager"
                width={150}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{marginBottom: `var(--space-3)`, borderRadius: '100%'}}
            />
            <h1>
                Oleg Kovalev
            </h1>
            <p className={styles.profileLinks}>
                {
                    profileLinks.map((link, i) => (
                        <React.Fragment key={link.url}>
                            <Link to={link.url}>{link.title}</Link>
                            {i !== profileLinks.length - 1 && <> · </>}
                        </React.Fragment>
                    ))
                }
            </p>
            <h2>Projects</h2>
        </div>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Oleg Kovalev"/>

export default IndexPage
