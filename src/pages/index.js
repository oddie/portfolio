import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectGallery from "../components/ProjectGallery"
import * as styles from "../components/index.module.css"
import * as data from "../data/data";

const IndexPage = () => (<Layout>
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
            {data.profileLinks.map((link, profileIndex) => (<React.Fragment key={link.url}>
                <a href={link.url} title={link.title}>{link.title}</a>
                {profileIndex !== data.profileLinks.length - 1 && <> · </>}
            </React.Fragment>))}
        </p>
        <h2>Projects</h2>
        {data.projects.map((project, projectIndex) => (<React.Fragment key={projectIndex}>
            <div className={styles.project}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectStack}>
                    Stack:
                    {project.stack.split(',').map(stack => (<span>{stack}</span>))}
                </div>
                <div class={styles.projectUrl}>
                    {
                        !project.url && <div>{project.urlTitle}</div>
                    }
                    {
                        project.url && <a href={project.url} title={project.urlTitle}>{project.urlTitle}</a>
                    }
                </div>
                {<ProjectGallery project={project}></ProjectGallery>}

            </div>
        </React.Fragment>))}
    </div>
</Layout>)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Oleg Kovalev"/>

export default IndexPage
