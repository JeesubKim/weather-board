import React from 'react';
import { MapBox } from '@stickyboard/mapbox';

const sampleInputs = {
    data: {
        mapboxKey: MAPBOX_TOKEN,
        title: 'Stickyboard-mapbox example',
        description: 'This component is one of stickers in Stickyboard',
    },
    map: {
        canvas: {
            size: {
                width: '100%`',
                height: '100%',
            },
        },
        camera: {
            center: [-77.04, 38.907],
            zoom: 10,
        },

        marker: [
            {
                coordinates: [-77.038659, 38.931567],
                title: 'Mapbox Sticker Example#1',
                description: '<strong>Make it Mount Pleasant</strong>',
                display: true,
                closeOnClick: true,
            },
            {
                coordinates: [-77.003168, 38.894651],
                title: 'Mapbox Sticker Example#2',
                description:
                    '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
                closeOnClick: true,
            },
            {
                coordinates: [-77.090372, 38.881189],
                title: 'Mapbox Sticker Example#3',
                description:
                    '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>',
                closeOnClick: true,
            },
            {
                coordinates: [-77.111561, 38.882342],
                title: 'Mapbox Sticker Example#4',
                description: '<strong>Ballston Arts & Crafts Market</strong>',
                display: true,
                closeOnClick: true,
            },
        ],

        line: [
            {
                paint: {
                    lineColor: '#888',
                    lineWidth: 8,
                },
                coordinates: [
                    [-77.038659, 38.931567],
                    [-77.003168, 38.894651],
                    [-77.090372, 38.881189],
                    [-77.111561, 38.882342],
                ],
                title: 'line#1',
                description: 'line#1 description here',
            },
            {
                paint: {
                    lineColor: '#222',
                    lineWidth: 8,
                },
                coordinates: [
                    [-112.48369693756104, 37.83381888486939],
                    [-112.48348236083984, 37.83317489144141],
                    [-112.48339653015138, 37.83270036637107],
                    [-112.48356819152832, 37.832056363179625],
                    [-112.48404026031496, 37.83114119107971],
                    [-112.48404026031496, 37.83049717427869],
                    [-112.48348236083984, 37.829920943955045],
                    [-112.48356819152832, 37.82954808664175],
                    [-112.48507022857666, 37.82944639795659],
                    [-112.48610019683838, 37.82880236636284],
                    [-112.48695850372314, 37.82931081282506],
                    [-112.48700141906738, 37.83080223556934],
                    [-112.48751640319824, 37.83168351665737],
                    [-112.48803138732912, 37.832158048267786],
                    [-112.48888969421387, 37.83297152392784],
                    [-112.48987674713133, 37.83263257682617],
                    [-112.49043464660643, 37.832937629287755],
                    [-112.49125003814696, 37.832429207817725],
                    [-112.49163627624512, 37.832564787218985],
                    [-112.49223709106445, 37.83337825839438],
                    [-112.49378204345702, 37.83368330777276],
                ],
                title: 'line#1',
                description: 'line#1 description here',
            },
        ],
    },
};

function WeatherMapBox(props) {
    return <MapBox data={sampleInputs.data} map={sampleInputs.map} />;
}

export default WeatherMapBox;
