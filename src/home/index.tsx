import React from 'react';
import Head from '../common/head';
import Foot from '../common/foot';
import SVG from '../common/SVG';
export interface HomeProps{

}
class Home extends React.Component<HomeProps, any>{
    render(){
        return (
            <div className="nb_wrap">
                <Head>
                    <SVG type="back" classes="nb_font_head"/>
                    <h3>NBbrain</h3>
                    <SVG type="system" classes="nb_font_head"/>
                </Head>
                <div className="nb_content">
                    <h3 className="nb_home_title">最近挑战过的题目</h3>
                    <ul className="nb_list">
                        {/* {test_data.home.data.map((item,index) => <ListItem key={index} item={item}/>)} */}
                    </ul>
                    <h2 className="nb_home_title">最新题目</h2>
                    <ul className="nb_list">
                        {/* {test_data.home.data.map((item,index) => <ListItem key={index} item={item}/>)} */}
                    </ul>
                </div>
                <Foot/>
            </div>
        );
    }
}
export default Home;
