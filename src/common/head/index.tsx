import React from 'react';
import './head';

export interface HeadProps{
    hasLeft?: boolean,
    hasRight?: boolean,
    title: string
}

export default class  Header extends React.Component<HeadProps,any>{
    constructor(props: any){
        super(props)
    }
    render(){
        return (
            <div className="nb_top_wrap">
                <div className="nb_top_content">
                    <div className="nb_top_left">
                        {/* {this.props.children && this.props.children.length >0 && this.props.children[0]} */}
                    </div>
                    <div className="nb_top_center">
                        {/* {this.props.children && this.props.children.length >1 && this.props.children[1]} */}
                    </div>

                    <div className="nb_top_right">
                        {/* {this.props.children && this.props.children.length >2 && this.props.children[2]} */}
                    </div>
                </div>
            </div>
        );
    }
}
