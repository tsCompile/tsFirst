import React from 'react';
// import { names_ICON } from './tools';

export interface SVGProps{
    classes?: string,
    style?: string,
    type: string
}
export default class  SVG extends React.Component<SVGProps, any>{
    constructor(props: any){
        super(props);
    }
    render(){
        let {type, classes, style} = this.props;
        let svg = require(`../../../icon/${type}.svg`) || {};
        classes = !!classes ? "nb_font " + classes : "nb_font";
        // let names = names_ICON();
        // console.log(names);
        return (
            <svg className={classes} style={style}>
                <use className="nb_use" xlinkHref={svg.default}>
                </use>
            </svg>
        );
    }
}

