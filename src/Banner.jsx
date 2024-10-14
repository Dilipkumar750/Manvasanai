import React from 'react'
import namvalvar from './assets/images/namvalvar.png'
function Banner() {
  return (
    <section className="ban_sec">
		<div className="container">
			<div className="ban_img">
	<img src={namvalvar} alt="banner" border="0"/>
				<div className="ban_text">
					<strong>
                    


						<span> இயற்கை விவசாயம்</span><br/> என்பதன்
					</strong>
					<p><b>அடிப்படை இயற்கையுடன் <br/>
                    இணைந்த உணவு உற்பத்தி.</b></p>
					<a href="#"> -- நம்மாழ்வார்</a>
				</div>
			</div>
		</div>
	</section>

  )
}

export default Banner