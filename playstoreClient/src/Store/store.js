import React from 'react';

export default function Store(props) {
  return (
    <div className='store'>
      <h2>{props.App}</h2>
      <div className='app_Category'>{props.Categori}</div>
      <div className='app_Rating'>{props.Rating}</div>
      <div className='app_Type'>{props.Price}</div>
      <div className='app_Genres'>{props.Genres}</div>
      <div className='Last Updated'>{props.Last_Updated}</div>
    </div>
  );
}
