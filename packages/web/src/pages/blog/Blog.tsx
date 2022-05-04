import styled from "styled-components"
import { Col, Container, Row } from "../../components/Layout/Grid"
import TestData from "../../static/blog.json"
import BlogPreview from "../../components/BlogPreview"
import { motion } from "framer-motion"
import { staggerChildren } from "../../shared/motion-variants"
import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <Row>
                    <Col>
                        <h1>Blog</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={9} lg={10}>
                        <motion.div
                            className="grid-container"
                            variants={staggerChildren}
                            initial="hide"
                            animate="show"
                        >
                            {TestData.map((item) => (
                                <BlogPreview {...item} />
                            ))}
                        </motion.div>
                    </Col>
                    <Col sm={12} md={3} lg={2}>
                        <div className="blog-index">
                            <div>
                                <h2>Categories</h2>
                                <div>
                                    <Link to="/blog?filter=sleep-apnea">Sleep Apnea</Link>
                                    <Link to="/blog?filter=CPAP">CPAP</Link>
                                    <Link to="/blog?filter=sleep-science">Sleep Science</Link>
                                    <Link to="/blog?filter=sleep-mediaction">Sleep Medication</Link>
                                    <Link to="/blog?filter=tubes">Tubes</Link>
                                </div>
                            </div>
                            <div>
                                <h2>Archive</h2>
                                <div>
                                    <Link to="/blog?filter=april-2022">April 2022</Link>
                                    <Link to="/blog?filter=march-2022">March 2022</Link>
                                    <Link to="/blog?filter=february-2022">February 2022</Link>
                                    <Link to="/blog?filter=january-2022">January 2022</Link>
                                    <Link to="/blog?filter=december-2021">December 2021</Link>
                                    <Link to="/blog?filter=april-2022">April 2022</Link>
                                    <Link to="/blog?filter=march-2022">March 2022</Link>
                                    <Link to="/blog?filter=february-2022">February 2022</Link>
                                    <Link to="/blog?filter=january-2022">January 2022</Link>
                                    <Link to="/blog?filter=december-2021">December 2021</Link>
                                    <Link to="/blog?filter=april-2022">April 2022</Link>
                                    <Link to="/blog?filter=march-2022">March 2022</Link>
                                    <Link to="/blog?filter=february-2022">February 2022</Link>
                                    <Link to="/blog?filter=january-2022">January 2022</Link>
                                    <Link to="/blog?filter=december-2021">December 2021</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledBlog>
    )
}

const StyledBlog = styled.div`
    h1 {
        margin-bottom: 52px;
    }

    .blog-index {
        display: flex;
        flex-flow: column nowrap;
        gap: 48px;

        & > div {
            gap: 24px;

            & > div {
                gap: 8px;
            }
        }

        div {
            display: flex;
            flex-flow: column nowrap;
        }
    }

    .grid-container {
        display: flex;
        flex-flow: column;
        gap: ${({ theme }) => theme.padding.gap};
    }
`

export default Blog
