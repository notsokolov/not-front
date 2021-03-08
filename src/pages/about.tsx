import * as React from 'react'
import Image from 'next/image'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/CenteredColumn'



function About() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12" data-cy="about-page">
          <div className="-mx-4 -mt-24 md:mt-0 md:-mx-8 ">
            <Image
              src="https://pbs.twimg.com/profile_images/288025495/MET-ART_vol_56_0003.jpg"
              alt={'A photo of me'}
              layout="responsive"
              width="500px"
              height="750px"
              className="md:rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col prose lg:prose-lg">
              <p>
                👋 I’m a product designer, podcaster, and writer, currently
                living in San Francisco.
              </p>
              <p>
                Right now I’m designing{' '}
                <a
                  href="https://github.com/mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  native mobile apps
                </a>{' '}
                at{' '}
                <a
                  href="https://github.com/brianlovin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                . Before GitHub, I co-founded{' '}
                <a
                  href="https://spectrum.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spectrum
                </a>
                , a platform for large-scale communities to have better public
                conversations. Spectrum was acquired by GitHub in November,
                2018.
              </p>
              <p>
                Before Spectrum I designed payments experiences at Facebook,
                working across Facebook, Messenger, WhatsApp, and Instagram. I
                originally cut my teeth as the first product designer at{' '}
                <a
                  href="https://buffer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buffer
                </a>
                .
              </p>
              <p>
                I also co-host the{' '}
                <a
                  href="https://designdetails.fm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Details Podcast
                </a>
                , a weekly conversation about design process and culture. Design
                Details is part of{' '}
                <a
                  href="https://spec.fm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spec.fm
                </a>
                , a podcast network for designers and developers, which I
                co-founded in 2015.
              </p>
              <p>
                You can find me on{' '}
                <a
                  href="https://twitter.com/brian_lovin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{' '}
                where I talk about design and development, or on{' '}
                <a
                  href="https://github.com/brianlovin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                where I’m building in the open, or on{' '}
                <a
                  href="https://figma.com/@brian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>{' '}
                where I’m exploring how plugins can automate the tedious parts
                of interface design.
              </p>
              <p>
                <em>
                  Photo by{' '}
                  <a
                    href="https://twitter.com/rxnjmmt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @rxnjmmt
                  </a>
                </em>
              </p>
            </div>


         </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}


export default About
