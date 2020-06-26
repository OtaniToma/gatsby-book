import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/header'
import Footer from '../components/footer'

export const query = graphql`
  query {
    hero: file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit: file(relativePath: {eq: "fruit.jpg"}) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    grain: file(relativePath: {eq: "grain.jpg"}) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    beverage: file(relativePath: {eq: "beverage.jpg"}) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    berry: file(relativePath: {eq: "berry.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattern: file(relativePath: {eq: "pattern.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    <Header />
    <section className="hero">
      <figure>
        <Img fluid={data.hero.childImageSharp.fluid} alt="" style={{ height: '100%'}} />
      </figure>
      <div className="catch">
        <h1>There is no love sincerer than<br /> the love of food.</h1>
        <p>食物を愛するよりも誠実な愛はない ― バーナード・ショー</p>
      </div>
      <div className="wave">
        <img src="/images/wave.svg" alt="" />
      </div>
    </section>
    <section className="food">
      <div className="container">
        <h2 className="bar">Food <span>Essence</span></h2>
        <div className="details">
          <div className="detail">
            <figure>
              <Img fixed={data.fruit.childImageSharp.fixed} alt="" />
            </figure>
            <h3>フルーツ</h3>
            <p>FRUIT</p>
            <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
          </div>
          <div className="detail">
            <figure>
              <Img fixed={data.grain.childImageSharp.fixed} alt="" />
            </figure>
            <h3>穀物</h3>
            <p>GRAIN</p>
            <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
          </div>
          <div className="detail">
            <figure>
              <Img fixed={data.beverage.childImageSharp.fixed} alt="" />
            </figure>
            <h3>飲み物</h3>
            <p>BEVERAGE</p>
            <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <Img fluid={data.berry.childImageSharp.fluid} alt="" style={{ height: '100%' }} />
      </figure>
    </section>
    <Footer />
  </div>
)