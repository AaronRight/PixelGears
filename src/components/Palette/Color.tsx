import React from 'react';
import useLongPress from "../../directives/useLongPress";

type ColorState = {
  color: string
  size: number,
  choosed?: boolean,
  onLongPress: Function,
  onClick: Function
}

export default function Color(parameters: ColorState) {
  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  let style:any = {
    background: parameters.color,
    width: parameters.size,
    height: parameters.size
  }

  if(parameters.choosed){
    style['border'] = '3px solid black';
    style['margin'] = '-2px';
  }else
    style['border'] = '1px solid black';

  return (<div 
    style={style} 
    {...useLongPress(parameters.onLongPress, () => parameters.onClick(parameters.color), defaultOptions)} 
    className="Color">
    </div>)
}