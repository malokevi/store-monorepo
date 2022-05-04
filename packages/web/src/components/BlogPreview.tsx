import styled from "styled-components"
import Button from "./Utilities/Button"
import { fadeUp } from "../shared/motion-variants"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

type BlogEntryPropsType = {
    copy: string
    title: string
    image: string
    date: string
}

const BlogPreview = ({ copy, title, image, date }: BlogEntryPropsType) => {
    return (
        <StyledBlogEntry variants={fadeUp}>
            <img src={image} alt="" />
            <div className="preview-body">
                <p className="fade">{date}</p>
                <h2>{title}</h2>
                <p className="preview-copy">{copy}</p>
                <Link to={`/blog/${encodeURIComponent(title)}`}>
                    <Button
                        label="Read More"
                        version="secondary"
                    />
                </Link>
            </div>
        </StyledBlogEntry>
    )
}

const StyledBlogEntry = styled(motion.div)`
    display: flex;
    flex-flow: row nowrap;
    gap: 32px;

    img {
        width: 350px;
        height: 220px;
        align-self: flex-start;
        flex-shrink: 0;
    }

    .preview-body {
        display: flex;
        flex-flow: column;
        gap: 18px;

        a {
            width: 100%;
            display: flex;

            button {
                flex-grow: 2;
            }
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.xs};

            &.preview-copy {
                display: -webkit-box;
                -webkit-line-clamp: 8;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }

    .fade {
        color: ${({ theme }) => theme.colors.text.faded};
    }
`

export default BlogPreview
