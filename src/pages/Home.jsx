import React from 'react'
// import "../css/Home.css"
// import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <>

            <div>
                <div>
                    <Navbar />
                </div>
                <div className="websiteBBannerWrap">
                    <div className="bannercontent">
                        <h1 className="bannerheading">AI Website Summarizer to Generate Summary in Minutes</h1>
                        <h2 className="banner_subheading" tabindex="0">Describe your paragraph or text and  AI will help you summarize it.</h2>
                        <div id="builder-form">
                            <form name="websiteform" action="https://snappy.appypie.com/utility/ai-web-generator/" accept-charset="UTF-8" method="get" onsubmit="return validateForm();" autocomplete="off">
                                <span id="voicebtn" className="input-group-btn" onclick="startDictation()" style={{ display: " block" }}>
                                    <img id="v_search" src="https://images.appypie.com/wp-content/uploads/2023/01/04050911/voice.svg" width="17" height="25" data-lazy-src="https://images.appypie.com/wp-content/uploads/2023/01/04050911/voice.svg" className="lazyloaded" data-was-processed="true" /></span>
                                <textarea name="text" id="custome-app-url" required="" title="" type="text" autocomplete="off" placeholder="e.g. I want to summarize my story in my French Language."></textarea>
                                <button type="submit" value="Build Now" className="builder-btn" id="appDesBuild" disabled="disabled">Summarize</button>
                                <textarea name="text" id="custome-app-url" required="" title="" type="text" autocomplete="off" placeholder="Summarized Text."></textarea>


                                <div className=''>
                                    <select className='custom-select' style={{ height: "24px", width: "100%", maxWidth: "200px" }}>

                                    </select>
                                </div>
                                <button type="submit" value="Build Now" className="builder-btn" id="appDesBuild" disabled="disabled">Translate</button>


                            </form>
                        </div>
                    </div> <div className="bannerImage"> </div> </div>
            </div>
        </>
    )
}

export default Home