import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Tesla hist new highs', '1d ago - 3040 readers')}
      {newsArticle('Chrome v88 rolled out', '2d ago - 2555 readers')}
      {newsArticle('Trump leaves office', '2d ago - 2010 readers')}
      {newsArticle('Snow storm in UK', '23h ago - 1455 readers')}
      {newsArticle('Covid relief plan unveiled by EU', '13h ago - 944 readers')}
    </div>
  );
}

export default Widgets;
