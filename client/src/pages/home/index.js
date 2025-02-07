import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import API from '../../utilities/API';
import Images from '../../components/ArtistImage';
import ArtistCard from '../../components/ArtistCard';
import PageTitle from '../../components/Title'
// import Moment from 'react-moment';

import './index.css';

class DailyArtist extends React.Component {
    state = {
        artists: [],
        artistOfTheDay: 1
    }

    componentDidMount() {
        this.getArtists();
    }

    getArtists = () => {
        API.find()
            .then(res =>
                this.setState({ artists: res.data }),
            )
    }

    render() {
        return (
            <div className="grid-img">

                {this.state.artists.map((result, index) => {

                    if (index === this.state.artistOfTheDay) {
                        return (
                            <div key={index}>
                                <div className="Feat-Wrapper" >
                                    <h1 className="Feat-Title" >Featured Artist</h1>
                                </div>
                                <div className="home-flex-container">
                                    <ArtistCard name={result.firstName + " " + result.lastName} artistImg={result.image} bio={result.about}></ArtistCard>
                                    <Images
                                        image={result.artworks[0].img}
                                    ></Images>
                                    <Images
                                        image={result.artworks[1].img}
                                    ></Images>
                                    <Images
                                        image={result.artworks[2].img}
                                    ></Images>
                                </div>
                            </div>
                        )
                    }
                    return <div key={index}></div>

                })}
            </div>

        )
    }
}

export default function HomePage() {
    return (
        <div>
            <PageTitle title="Teal Canvas" />
            <div>
                <Jumbotron></Jumbotron>
            </div>
            {/* <div>Today is the
            <Moment format="Do"></Moment> of the month
            </div> */}
            <div>
                <DailyArtist />
            </div>
        </div>



    )
}
