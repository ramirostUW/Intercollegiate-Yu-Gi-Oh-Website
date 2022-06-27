import '../../css/tournament20xx.css';
import {Carousel} from "react-bootstrap";
import Placeholder from "../../media/Placeholder.png";

/**
 * Contains:
 *  VENUE CAROUSEL
 *  VENUE CAROUSEL LABEL
 *  WINNER CAROUSEL
 *  WINNER CAROUSEL LABEL
 */
export const Carousels = (props) => {

    const date = props.current ? "current" : "past";

    // Carousel variables: https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/
    return (
      <div className={`carousels-${date}`}>
        <div className={`venue-${date}`}>
          <Carousel className={`venue-carousel ${date}`} fade prevLabel={null} nextLabel={null}
                    keyboard={false} interval={2800}>
            {props.venues ?
              props.venues.map((item, index)=> (
                <Carousel.Item>
                  <img
                      className={`venue-carousel-${date}-item ${date}-item d-block w-100`}
                      src={Object.keys(item.source).length === 0 || item.source === "" ?
                          Placeholder : item.source}
                      alt={Object.keys(item.source).length === 0 || item.source === "" ?
                          "Placeholder" : `Venue image ${index}`}
                  />
                  <Carousel.Caption className={`caption-${date}`}>
                    <p>{item.caption}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            : 'Loading...'}
          </Carousel>
          <text className={`carousel-label-${date}`}>{props.venueLabel}</text>
        </div>
        <div className={`winners-${date}`}>
          <Carousel className={`other-carousel ${date}`} fade prevLabel={null} nextLabel={null}
                    keyboard={false} interval={2800}>
            {props.winners ?
                props.winners.map((item, index)=> (
                    <Carousel.Item>
                      <img
                          className={`other-carousel-${date}-item ${date}-item d-block w-100`}
                          src={Object.keys(item.source).length === 0 || item.source === "" ?
                              Placeholder : item.source}
                          alt={Object.keys(item.source).length === 0 || item.source === "" ?
                              "Placeholder" : `Winner image ${index}`}
                      />
                      <Carousel.Caption className={`caption-${date}`}>
                        <p>{item.caption}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                ))
                : 'Loading...'}
          </Carousel>
          <text className={`carousel-label-${date}`}>{props.winnerLabel}</text>
        </div>
      </div>
    )
}
