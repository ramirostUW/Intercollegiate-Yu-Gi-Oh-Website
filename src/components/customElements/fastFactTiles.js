import '../../css/tournament20xx.css';

/**
 * Contains:
 *  Important Metric Tiles Generator
 *  Prop Arguments (from caller):
 *     data: an object containing the items to be displayed in a tile, which each have
 *                          "title" (metric displayed) and "text" (label for metric) fields
 */
export const Tiles = (props) => {
  return (
    <div className='tiles'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="tile">
                  {' '}
                  <text className="tile-value">{d.title}</text>
                  <text className="tile-label">{d.text}</text>
                </div>
              ))
            : 'Loading...'}
    </div>
  )
}
