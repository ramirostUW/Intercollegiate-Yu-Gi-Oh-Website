import '../../css/tournament20xx.css';

/**
 * IMPORTANT METRICS TILES
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
