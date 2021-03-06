import React from 'react';
import {Link} from 'react-router-dom';
import SVG from '../SVG';
import utils from '../utils';
import './foot';

export interface FootProps{

}

export default class  Foot extends React.Component<FootProps, any>{
    constructor(props: any){
        super(props)
    }
    render(){
        let uid = utils.store('uid');
        return (
            <div className="nb_bottom_wrap">
                <ul className="nb_bottom_content">
                    <li>
                        <Link to="/index">
                        <SVG classes="nb_font nb_font_head" type="home"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rank">
                            <SVG classes="nb_font nb_font_head" type="ranking"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/list/${uid}`}>
                            <SVG classes="nb_font nb_font_head" type="my_qbank_list"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/user/${uid}`}>
                            <SVG classes="nb_font nb_font_head" type="account"/>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
