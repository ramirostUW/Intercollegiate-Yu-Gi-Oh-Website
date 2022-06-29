import {Carousel} from "react-bootstrap";
import Placeholder from "../../media/Placeholder.png";

/**
 * Contains:
 *  Carousel Generator
 *  Prop Arguments (from caller):
 *      carouselType (optional): a field specifying the user-specified type of carousel, for more specific css access
 *      data: an object containing the items to be displayed in the carousel, which each have
 *                          "source" (image url) and "caption" (image caption) fields
 *      carouselLabel (optional): a caption for the carousel
 *      labelPosition (optional): whether the label's position should be "above" or "below" the carousel. Default is
 *      													"below"
 *
 *			! Be careful when just identifying elements with attributes like .carousel, as the styling could !
 *			! apply across all carousels. Instead, specify both the element and its "defining class/parent", !
 *			! ex #current .carousel !
 */

// Carousel genre/multiple class selectors: https://css-tricks.com/multiple-class-id-selectors/
export const CustomCarousel = (props) => {
	const carouselType = props.carouselType ? props.carouselType + "-" : "";
	const labelPosition = props.labelPosition === "above" ? "above" : "below";

	// Carousel variables: https://www.tutsmake.com/react-bootstrap-carousel-slider-tutorial/
	return (
	<div className={`${carouselType}carousel-wrapper carousel-wrapper ${props.genre}`}>
		{labelPosition === "above" && props.carouselLabel ?
			<text className={`${carouselType}carousel-label carousel-label ${props.genre}`}>{props.carouselLabel}</text>
			: null}
		<Carousel className={`${carouselType}carousel ${props.genre}`} fade prevLabel={null} nextLabel={null}
							keyboard={false} interval={2000}>
			{props.data ?
				props.data.map((item, index)=> (
				<Carousel.Item className={`${props.genre}`}>
					<img
						className={`${carouselType}item ${props.genre} d-block w-100`}
						src={Object.keys(item.source).length === 0 || item.source === "" ?
							Placeholder : item.source}
						alt={Object.keys(item.source).length === 0 || item.source === "" ?
							"Placeholder" : `${carouselType} carousel image ${index}`}
					/>
					<Carousel.Caption className={`${carouselType}caption ${props.genre}`}>
						{item.caption ? <p>{item.caption}</p> : null}
					</Carousel.Caption>
				</Carousel.Item>
				))
			: 'Loading...'}
		</Carousel>
		{labelPosition === "below" && props.carouselLabel ?
			<text className={`${carouselType}carousel-label carousel-label ${props.genre}`}>{props.carouselLabel}</text>
			: null}
	</div>
    )
}
