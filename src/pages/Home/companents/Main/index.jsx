import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../../../context/Context'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/youTube_spinner.json'

const index = () => {

    const {videos} = useContext(Context);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    useEffect(()=> {
        console.log(videos);
    },[videos])

    return (
        <div className='videos_area'>
            <div className='tabs_section'>
                <div className="tabs">
                    <div className='tab_item active_tab'>Tümü</div>
                    <div className='tab_item unactive_tab'>Müzik</div>
                    <div className='tab_item unactive_tab'>Mix'ler</div>
                    <div className='tab_item unactive_tab'>Oyun</div>
                    <div className='tab_item unactive_tab'>Podcast'ler</div>
                    <div className='tab_item unactive_tab'>Sitcom'lar</div>
                    <div className='tab_item unactive_tab'>Canlı</div>
                    <div className='tab_item unactive_tab'>Aksiyon-macera oyunları</div>
                    <div className='tab_item unactive_tab'>Futbol</div>
                    <div className='tab_item unactive_tab'>Son yüklenenler</div>
                    <div className='tab_item unactive_tab'>İzlenenler</div>
                    <div className='tab_item unactive_tab'>Yeni öneriler</div>
                    
                </div>
            </div>

            <div className='videos_main'>
                
                    {
                        videos == null ?

                        <Lottie options={defaultOptions}
                            height={200}
                            width={200}
                        />

                        :

                        videos.map((video)=>{
                            return (
                                <div className='video'>
                                    <div className='image_box'>
                                        <img className='image' src={`https://i.ytimg.com/vi/${video.id.videoId}/maxresdefault.jpg`} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                
                    
            
            </div>
        </div>
    )
}

export default index