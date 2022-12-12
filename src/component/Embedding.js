import React, { useRef, useEffect } from 'react'
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

const { tableau } = window;

function Embedding() {
    const ref = useRef(null);
    const url = 'https://public.tableau.com/views/WOW202246-Maps/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link'

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            // width: "33%",
            // height: "50%",
            hideTabs: true
        });

    };

    useEffect(initViz, []);
    return <div />;
}
export default Embedding