import Image from 'next/image';

export default function Projects(props) {
    return(
        <section id="features" className={"section-bg "+props.theme}>
            <div className="container">

                <div className="section-title">
                    <h2 data-bs-aos="fade-in">Other MetaBrainz Projects</h2>
                    <p data-bs-aos="fade-in">
                        MusicBrainz is operated by the MetaBrainz Foundation, a California based non-profit corporation dedicated to keeping MusicBrainz free and open source.
                        Explore the fellow Brainz projects as well!
                    </p>
                </div>
                
                <div className="row content align-items-center justify-content-center">
                    <div className="col-md-5 adjust-size" data-bs-aos="fade-right">
                        <a href="https://listenbrainz.org"
                           target="_blank"
                           rel="noopener noreferrer">
                           <div className='image-container'>
                                <Image className='image' src="/assets/img/meb-logos/listenbrainz.svg"
                                   layout="fill"
                                   alt="ListenBrainz"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 pt-4" data-bs-aos="fade-left">
                        <h3>An open record of user listening habits</h3>
                        <p className="fst-italic">
                            <a href="https://listenbrainz.org"
                               target="_blank"
                               rel="noopener noreferrer">
                                Checkout
                            </a>
                        </p>
                        <p>
                            ListenBrainz keeps tracks of what music you listen to and provides you with insights into your listening habits. We&apos;re completely open-source and publish our data as open data.

                            You can use ListenBrainz to track your music listening habits and share your taste with others using our visualizations.
                        </p>
                    </div>
                </div>
                <hr style={{width:"100%"}} />

                <div className="row content align-items-center">
                    <div className="col-md-5 order-1 order-md-2 adjust-size" data-bs-aos="fade-left">
                        <a href="https://picard.musicbrainz.org" target="_blank"
                           rel="noopener noreferrer">
                           <div className='image-container'>
                                <Image className='image' src="/assets/img/meb-logos/picard.svg"
                                   layout='fill'
                                   alt="Picard"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-bs-aos="fade-right">
                        <h3>A cross-platform music tagger</h3>
                        <p className="fst-italic">
                            <a href="https://picard.musicbrainz.org"
                               target="_blank"
                               rel="noopener noreferrer">
                                Checkout
                            </a>
                        </p>
                        <p>
                            Picard can add metadata tags to your music files, based on information available from the MusicBrainz website.
                            It can look up the metadata either manually or automatically based on existing information, including artist and song name, disc id (for CDs), and a track’s AcoustID fingerprint and retrieve and embed coverart images from a variety of sources.
                        </p>
                    </div>
                </div>
                <hr style={{width:"100%"}} />

                <div className="row content align-items-center">
                    <div className="col-md-5 adjust-size" data-bs-aos="fade-right">
                        <a href="https://acousticbrainz.org"
                           target="_blank"
                           rel="noopener noreferrer">
                            <div className='image-container'>
                                <Image className='image' src="/assets/img/meb-logos/acousticbrainz.svg"
                                   layout='fill'
                                   alt="AcousticBrainz"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 pt-5" data-bs-aos="fade-left">
                        <h3>A crowdsourced collection of acoustic information</h3>
                        <p className="fst-italic">
                            <a href="https://acousticbrainz.org"
                               target="_blank"
                               rel="noopener noreferrer">
                                Checkout
                            </a>
                        </p>
                        <p>
                            The AcousticBrainz project aims to crowd source acoustic information for all music in the world and to make it available to the public. This acoustic information describes the acoustic characteristics of music and includes low-level spectral information and information for genres, moods, keys, scales and much more.
                        </p>
                        </div>
                </div>
                <hr style={{width:"100%"}} />

                <div className="row content align-items-center">
                    <div className="col-md-5 order-1 order-md-2 adjust-size" data-bs-aos="fade-left">
                        <a href="https://coverartarchive.org"
                           target="_blank" rel="noopener noreferrer">
                            <div className='image-container'>
                                <Image className='image' src="/assets/img/meb-logos/coverartarchive.svg"
                                   layout='fill'
                                   alt="Cover Art Archive"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-bs-aos="fade-right">
                        <h3>A repository of music cover art that is freely and easily accessible</h3>
                        <p className="fst-italic">
                            <a href="https://coverartarchive.org"
                               target="_blank"
                               rel="noopener noreferrer">
                                Checkout
                            </a>
                        </p>
                        <p>
                            The Cover Art Archive is a joint project between the Internet Archive and MusicBrainz, whose goal is to make cover art images available to everyone on the Internet in an organised and convenient way.

                            Images in the archive are curated by the MusicBrainz community and go through a peer review process to ensure that they are correct, free of spam and of the best quality.
                        </p>
                    </div>
                </div>
                <hr style={{width:"100%"}} />

                <div className="row content align-items-center">
                    <div className="col-md-5 adjust-size" data-bs-aos="fade-right">
                        <a href="https://critiquebrainz.org"
                           target="_blank"
                           rel="noopener noreferrer">
                           <div className='image-container'>
                                <Image className='image' src="/assets/img/meb-logos/critiquebrainz.svg"
                                   layout='fill'
                                   alt="CritiqueBrainz"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 pt-5" data-bs-aos="fade-left">
                        <h3>A repository for Creative Commons licensed music reviews</h3>
                        <p className="fst-italic">
                            <a href="https://critiquebrainz.org"
                               target="_blank"
                               rel="noopener noreferrer">
                                Checkout
                            </a>
                        </p>
                        <p>
                            CritiqueBrainz is a repository for Creative Commons licensed music reviews. Here you can read what other people have written about an album or event and write your own review!
                        </p>
                    </div>
                </div>
                <hr style={{width:"100%"}} />
                
                <div className="row content align-items-center">
                    <div className="col-md-5 order-1 order-md-2 adjust-size" data-bs-aos="fade-left">
                        <a href="https://bookbrainz.org"
                           target="_blank"
                           rel="noopener noreferrer">
                            <div className='image-container'>
                                <Image className='image' src="/assets/img/meb-logos/bookbrainz.svg"
                                   layout='fill'
                                   alt="BookBrainz"/>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-bs-aos="fade-right">
                        <h3>An open encyclopedia which contains information about published literature</h3>
                        <p className="fst-italic">
                            <a href="https://bookbrainz.org" target="_blank" rel="noopener noreferrer">Checkout</a>
                        </p>
                        <p>
                            BookBrainz is a project to create an online database of information about every single book, magazine, journal and other publication ever written. We make all the data that we collect available to the whole world to consume and use as they see fit.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
