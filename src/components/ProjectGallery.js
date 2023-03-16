import React from 'react';
import {Carousel} from "react-responsive-carousel";

const ProjectGallery = ({project}) => {
    return (
        project && project.gallery && project.gallery.length > 0 &&
        (
            <Carousel showArrows={true} showThumbs={false}>
                {
                    (
                        project.gallery.map((image, imgIndex) => (
                                <div key={imgIndex}>
                                    <img src={`/` + image} alt={project.title}/>
                                </div>
                            )
                        )
                    )
                }
            </Carousel>
        )
    )
}

export default ProjectGallery

