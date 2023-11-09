import React, { useRef, useEffect } from 'react'

export const Social = ({timeline, ease}) => {

    let icons = useRef(null);

    useEffect(() => {
        const firstIcon = icons.children[0]
        const secondIcon = icons.children[1]
        const thirdIcon = icons.children[2]

        timeline.staggerFrom([firstIcon, secondIcon, thirdIcon], 0.3, {opacity: 0, x: -200, ease: ease, delay: .5}, .1)
    }, [])

    return (
        <div className="home-social" ref={el => icons = el}>
            <a href="https://www.linkedin.com/in/davidheredia12/" className="home-social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/Davidh120" className="home-social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.instagram.com/davidheredia12/" className="home-social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
        </div>
    )
}
