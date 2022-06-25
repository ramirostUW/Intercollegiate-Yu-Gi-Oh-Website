export const Tiles = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
        </div>
        <div className='row justify-content-center'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <h3 style={{
                    color: "blue",
                    fontSize: 78
                  }}>{d.title}</h3>
                  <p style={{
                    fontSize: 18
                  }}>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
