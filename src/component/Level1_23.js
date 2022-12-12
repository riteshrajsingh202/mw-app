import React from 'react'
import '../App.css';
export default function Level1_23() {
    const url="https://app.powerbi.com/reportEmbed?reportId=603dd7bc-8e5f-450e-a77e-9b845660e7d3&autoAuth=true&ctid=189de737-c93a-4f5a-8b68-6f4ca9941912&filterPaneEnabled=false&navContentPaneEnabled=false";
    return (
      <div className='secondscreen'>
        <iframe title="any" width="100%" height="100%" src={url} >
        </iframe>
      </div>
    )
}
