// src/components/page/WeatherPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'WeatherMarkdown', x: 0, y: 0, w: 4, h: 5 },
        { i: 'WeatherCardList', x: 0, y: 0, w: 4, h: 16 },
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 4, y: 0, w: 8, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 5, w: 12, h: 6 },
        { i: 'YahooWeather', x: 8, y: 11, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 11, w: 8, h: 5 },
    ],
    md: [
        { i: 'WeatherMarkdown', x: 4, y: 5, w: 4, h: 10 },
        { i: 'WeatherCardList', x: 0, y: 5, w: 4, h: 10 },
        { i: 'OpenWeatherMap', x: 8, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 8, y: 5, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 8, y: 10, w: 4, h: 5 },
        { i: 'YahooWeather', x: 8, y: 15, w: 4, h: 6 },
        { i: 'YahooWeatherForecast', x: 0, y: 15, w: 8, h: 6 },
        { i: 'WeatherWordCloud', x: 4, y: 0, w: 4, h: 5 },
        { i: 'WeatherMQTT', x: 0, y: 0, w: 4, h: 5 },
    ],
    sm: [
        { i: 'WeatherMarkdown', x: 0, y: 0, w: 4, h: 5 },
        { i: 'WeatherCardList', x: 0, y: 0, w: 4, h: 16 },
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 4, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 5, w: 8, h: 6 },
        { i: 'YahooWeather', x: 4, y: 11, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 11, w: 4, h: 5 },
    ],
    xs: [
        { i: 'WeatherMarkdown', x: 0, y: 0, w: 4, h: 5 },
        { i: 'WeatherCardList', x: 0, y: 0, w: 4, h: 16 },
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 6, h: 5 },
        { i: 'OpenWeatherMap3days', x: 0, y: 5, w: 6, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 10, w: 6, h: 6 },
        { i: 'YahooWeather', x: 0, y: 21, w: 6, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 16, w: 6, h: 5 },
    ],
    xxs: [
        { i: 'WeatherMarkdown', x: 0, y: 0, w: 4, h: 5 },
        { i: 'WeatherCardList', x: 0, y: 0, w: 4, h: 16 },
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 0, y: 5, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 10, w: 4, h: 6 },
        { i: 'YahooWeather', x: 0, y: 21, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 16, w: 4, h: 5 },
    ],
};

const initialBlocks = [
    { i: 'WeatherMarkdown' },
    { i: 'WeatherCardList' },
    { i: 'OpenWeatherMap' },
    { i: 'OpenWeatherMap3days' },
    { i: 'OpenWeatherMap7days' },
    { i: 'YahooWeather' },
    { i: 'YahooWeatherForecast' },
    { i: 'WeatherWordCloud' },
    { i: 'WeatherMQTT' },
];

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

WeatherPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(WeatherPage);
