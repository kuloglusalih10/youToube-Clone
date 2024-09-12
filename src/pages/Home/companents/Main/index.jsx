import React from 'react'
import { useContext } from 'react'
import { Context } from '../../../../context/Context'

const index = () => {

    // const {videos} = useContext(Context);

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
        </div>
    )
}

export default index