import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../../../context/Context'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/youTube_spinner.json'
import millify from "millify";
import TimeAgo from 'javascript-time-ago'
import tr from 'javascript-time-ago/locale/tr'

import ReactTimeAgo from 'react-time-ago'

const index = () => {

    TimeAgo.addDefaultLocale(tr)

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

        console.log('videos : ', videos);
        // videos.map((video)=> {
        //     console.log(video.snippet.thumbnails.maxres.url )
        // })
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

                        videos.map((video, index)=>{

                            return (
                                <div key={index} className='video'>
                                    <div className='image_box'>
                                        <img className='image' src={video.snippet.thumbnails.maxres.url ?? '' } alt="" />
                                    </div>
                                    <div className='details'>

                                        <div className='logo_box'>
                                            <img className='logo' src={video.channelLogo ?? 'deneme' } alt="" />
                                        </div>

                                        <div className='description'>

                                            <h3 className="title">
                                                {video.snippet.title}
                                            </h3>

                                            <div className='channel_info_box'>

                                                <span className='channel_name'>
                                                    {video.snippet.channelTitle}
                                                </span>
                                                <span className='icon_box'>

                                                    <svg fill='#606060' className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  focusable="false" aria-hidden="true">
                                                        <path fill='#606060' d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                                                    </svg>

                                                </span>


                                            </div>

                                            <div className='statistics'>
                                                <span className="viewCount">{millify(video.statistics.viewCount)} görüntüleme <span className='dot'> · </span> <ReactTimeAgo date={video.snippet.publishedAt} /></span>
                                            </div>

                                        </div>

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