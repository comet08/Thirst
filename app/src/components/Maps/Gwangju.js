import * as React from 'react';
import Svg, {Path, Circle, Text, G} from 'react-native-svg';

import {StyleSheet} from 'react-native';
import {bold} from '../../assets/font';

function Gwangju({navigation}) {
  return (
    <Svg
      style={{height: 300, width: 500}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 100 850 650"
      xmlSpace="preserve">
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '서구'});
        }}
        fill="#94af23"
        d="M546.3 410.1c.9.2 1.9.5 2.7 1.1 1.2-5.2 2.1-14.1 2.2-23.2-2.9.1-6 .1-9.5.1-3.2 0-4.9-1-17.8-9.1-8.8-5.5-27-16.9-31.8-18-5.4-1.3-13.9-1.2-22.8-1.2-18.5.1-40.9.2-51.6-12.5-11.1 21.3-12.2 40.1-13.3 59.7-.8 13.8-1.6 28-5.9 43.4-6.7 24.3-21.6 51.3-38.7 75.4 27.7 9.1 36 2 49.2-9.4 4.2-3.6 8.9-7.7 14.5-11.5 14-9.5 30.9-15.8 45.8-21.4 12.1-4.5 23.5-8.8 31.4-14 5-3.3 3.6-12.1.9-25.1-2.7-12.8-5.5-26.1 3.4-34.8 16.7-16.6 33.1-5.3 41.3.5z"
      />
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '광산구'});
        }}
        fill="#94af20"
        d="M237.4 478.5c1.2 1.5 6.3 8.3 8.9 11.8 2.3 3.2 6.4 9.6 8.3 12.6 1.7 3 4.9 8.9 6.7 12.6 1.7 3.7 5.7 12.3 7.1 14.4 1 1.4 2.6 3.5 3.9 4.9 0 0 0 .1.1.1.4.4.7.8 1 1 .9.9 2.3 1.9 3.4 2.7 4.8 3.5 12.1 7.8 18.3 10.5 5.4 2.4 9.1 8 10.2 13.8 29.1-26.5 65.8-77.5 76.8-117 3.8-13.7 4.5-26.4 5.3-39.9 1.5-25.6 3-52.1 26.1-84.1.4-.5.8-1 1.3-1.4 2.5-4.8 6.1-9.2 9.6-13.2 9.2-10.8 19.5-23 17.5-46.8-1.7-20.2-18.2-34.7-34.6-44.2-7.1 2.2-13.8 3.1-18.6 3.6H387c-1.4 0-3.1.2-4.7.4-1.3.2-2.6.3-3.7.6-2 .4-6.4 1.8-7.4 2.2-1.4.6-3.5 1.6-6.7 3.4-5.8 3.3-10.7 5.9-12.2 6.5-1.3.5-4.9 1.8-5.6 2-1.5.4-4.7 1.1-5.8 1.2-1.5.2-4.4.3-6 .2-1.5-.1-4.5-.6-5.9-.9-1.4-.4-4.5-1.4-5.5-1.9-1.4-.6-4.1-2.1-5.7-3-.6-.4-3.7-2.6-5.1-3.6-1.8-1.5-3.2-2.6-4.9-4.3-1.4-1.3-4.1-4.2-4.6-4.6-1.8-2.1-7.1-8.9-7.8-10-.5-.7-2.2-4.1-3.2-6.1-1.8-4-5-11.1-6.8-14.9 0 0 0-.1-.1-.1-1.2-2.3-3.1-5.3-4.6-7.1-1.3-1.6-5.1-5.3-6.3-6.3-1.3-1-2.8-2-4.6-2.8-1-.5-3.1-1.3-3.6-1.4-2.1-.7-7.2-1.6-9.8-1.5-1.6.1-6.6.6-9 1.4-1.6.6-6.6 3-7.6 3.5-2.1 1.2-5.3 3.3-7.1 4.8-1.1.9-4.9 4.5-5.8 5.4-.9 1-3.9 4.4-5.1 6l-.1.1c-1.7 2.2-3 4-4.5 6.4l-.1.1c-1 1.6-3.3 5.6-3.9 6.8-1.7 3.5-4.5 9.9-6.3 14.5-1.3 3.6-4.2 11.1-4.8 12.4-.7 1.6-2.5 4.6-3.1 5.4-.7.9-3 3.2-3.7 3.7s-3.6 2.1-4.5 2.4c-.8.3-4.2 1.2-5.4 1.4-1.1.2-3.5.4-6.3.4h-2c-3.9 0-9.8-.1-12.7-.1-3.3 0-6.4.4-8.8 1-1.6.4-6 1.9-8.1 2.8-2.1 1-5.7 3.4-7.5 5-1.8 1.5-4.7 4.8-5.9 6.6-1.5 2.1-3.2 5.7-4 7.7 0 .1-.1.1-.1.2-1.2 1.5-2.5 3.1-4.1 5.1-.7.8-1.7 2-2.6 3.1-1.2.5-2.8 1.1-4.1 1.6-2.1.7-6 1.9-7.9 2.5-3 1-5.4 1.9-7.8 3.6-1.9 1.3-4.6 3.5-6.4 5.8-1.5 2-3.6 6.2-4.3 8.8-.7 2.6-.9 7.3-.6 9.7.2 1.9 1.3 5.9 1.8 7.4.3 1 1.5 3.6 4.1 9.6.8 1.8 1.7 3.8 1.8 4.2.5 1.3 1 3.8 1.2 4.6v1.3c-.2.8-1 3.4-1.2 4.2-.5 1.1-2.2 4-3.6 6.1-.8 1.1-3.9 5.2-6.6 8.9-4 5.4-6.5 8.7-7.4 9.9-1.3 1.9-3.1 5.7-3.4 6.3v.1c-.6 1.3-2.6 6-3 7.4-.4 1.2-1.7 5.8-2.1 7.9-.3 1.5-.9 6.5-1 8.1v.1c-.2 2.6-.1 6.2 0 8.3.1 1.8.6 5.4 1.1 8.1v.2c.4 1.8 1.6 6.3 2 7.6.4 1.3 2 5.6 2.8 7.4 0 0 0 .1.1.1 1.1 2.6 2.6 5.5 3.5 7.2 0 0 0 .1.1.1.9 1.6 2.9 5 4.1 6.8 0 0 0 .1.1.1 2.7 3.8 6.6 8.5 9.9 11.7 1 1 4.6 4 6.3 5.3 1.7 1.2 4.9 3.2 6.8 4.2 1.6.8 5.8 2.6 7.7 3.3 2 .7 5.7 1.7 7.9 2.1 2 .4 5.9.8 8.1.8 2.2.1 6.7-.2 8.2-.4 4.3-.4 14-2.3 14.4-2.4 3.6-.7 11.6-2.1 15.3-2.6 3.8-.4 10.8-1 14.4-1.3 2.9-.1 5-.2 7.2-.1 2.4.1 10.8.8 13.4 1.3 1.9.4 5.9 1.3 6.5 1.5.8.2 4.7 1.6 5.7 2.1 1.2.5 4 2 5.4 2.8 1.7 1 3.5 2.3 5.1 3.7 1.8 1.6 4.1 3.6 4.9 4.3.8 1 2 2.2 3.6 4.2z"
      />
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '북구'});
        }}
        fill="#94af20"
        d="M755.8 336.9v-.2c-.2-1.9-.6-5.9-1-8.1v-.1c-.4-2.1-1.5-6.5-2.2-8.3-.8-2.2-2.5-6.2-3.6-8.1-.9-1.6-3.7-5.5-4.7-6.7-1.9-2.2-4.2-4.8-5.7-6.2l-.1-.1c-1.6-1.5-4.3-3.7-6.1-5s-5.1-3.3-7.2-4.2c-1.9-.9-5.8-2.3-8.2-2.8-.7-.1-1.5-.3-2.4-.4l-1.2-.3c-1.1-.2-2-.2-3-.2-.9-.1-1.7-.1-2.4-.1-2.1 0-6.4.5-8.5.9-2 .4-5.6 1.4-8.1 2.4 0 0-.1 0-.1.1-4.4 1.7-7.4 2.9-8.9 3.7-.9.4-1.7 1-2.3 1.8-.5.2-1 .5-1.6.8-2.3 1-4.5 2-6.5 2.9-.4.2-1.1.6-1.7.9-2.7 1.1-4.3 1.5-4.9 1.6-.9.1-3.9.1-4.9 0-.6-.2-1.8-.6-2.2-.7-.4-.2-1.6-.9-2-1.2-.5-.4-1.6-1.3-1.8-1.6-.6-.7-2-3-2.5-4.2-.7-2-1.3-4.1-1.4-4.7-.1-.7-.5-3.7-.8-6.4-.4-3.5-.9-7-1.2-8.9v-.1c-.6-3.8-1.9-10.4-3.1-15.3v-.1c-1-3.9-3.2-11.6-4.4-15.3v-.1c-1.3-3.8-3.8-11.1-5.3-14.8 0 0 0-.1-.1-.1-1.6-3.8-4.6-11-6.2-14.6v-.1c-1.7-3.6-5.6-11.1-7.6-14.3-1.9-3-7.1-10.5-9.2-13.5 0 0 0-.1-.1-.1-2.3-3.1-6.4-7.7-11-12.3l-.1-.1c-2.1-2-4.6-4.2-6.2-5.5l-.1-.1c-2.3-1.8-4.5-3.4-6.6-4.7 0 0-.1 0-.1-.1-1.6-1-4.9-2.8-7.3-3.8-2.2-1-5.7-2.2-8.1-2.9h-.1c-1.5-.4-5.8-1.3-8.1-1.6-1.3-.2-6-.5-7.8-.6-2.7-.1-6 0-8.5.3-2.9.3-11.5 1.4-16.2 2.2h-.1c-3.3.7-11.8 2.7-15.6 3.8-4.7 1.4-11.4 3.6-15.2 5h-.1c-3.8 1.4-11 4.4-14.6 6h-.1c-3.5 1.6-10.4 5-14.2 7-.1 0-.1.1-.2.1-3.5 2-10.3 5.9-13.6 8 0 0-.1 0-.1.1-1.4.9-3.2 2.1-5.1 3.4-.2.1-.4.3-.6.4-2.5 1.7-5.2 3.7-7.5 5.4l-.1.1c-.1.1-.2.1-.3.2-5.1 3.6-11.9 8.3-19.6 13 16.6 11.7 31.5 28.4 33.5 51.4 2.6 30.8-11.3 47.3-21.5 59.3-7.6 9-9.5 12-8 15.8 3.5 8.9 23.6 8.8 39.8 8.7 10-.1 19.4-.1 26.8 1.6 7 1.6 20.3 9.7 36.9 20.2 3.8 2.4 8.4 5.3 10.6 6.5 16.7-.1 24.3-1.2 30.5-2.1 6.1-.9 10.9-1.5 20-.8 21.6 1.7 35.1 26.5 38.1 35 10.4 29.4 49.9 82.2 94 71.2 1.7-.4 3.4-.3 4.9.3 1.2-1.3 2.4-2.8 3.1-4 1-1.8 1.7-4.3 1.9-6.3.1-2.2-.5-4.9-1.3-6.5-.2-.4-.4-.8-.7-1.3-1.9-4-6.8-8.2-5.8-17.3 1.2-11.1 5-13.8 13.1-24.1.3-.3.6-.7.9-1 1.3-1.6 3.7-5.3 4.7-7.8.8-2 1.9-5.6 2.2-7.6.2-.9.4-2.6.8-5.8.3-2.8.8-6.3 1.2-9.2.6-3.9 2-12 2.7-16.2.4-2.4 1.7-10.6 1.9-14.7v-.2c.1-1.9.4-11.7.1-16.6z"
      />
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '동구'});
        }}
        fill="#94af23"
        d="M713.9 492.9c-19.5 0-39.1-8.5-57.6-25.2-21-18.9-34.5-42.8-40.2-58.8-2-5.8-11.8-22.8-23.4-23.7-7.2-.6-10.6-.1-16.3.7-2.3.3-4.9.7-8.2 1 0 3.6-.2 9.1-.7 14.8-.9 10-2.5 17-5.1 21.6 12.4 13.1 20.7 31.5-1.7 67-8.2 13-3.7 29.2 13.5 48 1.4 1.5 2.8 3 4.3 4.4.2-.3.4-.5.6-.8.3-.3.5-.7.9-1.2.7-.9 1.4-1.8 2.1-2.8v-.1c3.1-3.9 7.9-8.6 15.1-8.2 7.3.5 12.5 8.2 14.9 12.6.3.6.5 1.1.7 1.5.2.3.4.8.7 1.4 1 1.8 2.5 4.5 3.3 5.6 1.3 1.8 3.7 4.8 5.5 6.4 1.7 1.5 4.9 3.9 7 5 1.8 1 5.1 2.4 7.3 3 2.1.6 5.5 1.3 7.4 1.6 1.8.2 5.7.4 7.7.3 2.6-.1 6.7-.9 9-1.8 2.2-.8 5.9-3 7.8-4.5 1.6-1.3 4.4-4.2 5.9-6.1 1.4-1.8 2.6-3.7 4-6.8l3.4-7.4c1.1-2.4 1.8-3.7 2.6-4.8.9-1.2 2.2-3 3.2-4.1.8-.8 3.1-2.6 3.8-3.1 1.1-.7 3.5-1.8 4.7-2.2 1.7-.5 5.2-1.6 7-2.1 1.9-.6 5.5-2.3 7.3-3.5 1.2-.8 2.7-2.1 3.7-3.2 1.8-2 3.7-5.6 4.5-7.8.8-2.3 1.3-4.3 1.5-7.6.1-2 .4-5.9.5-7.9.1-.8.1-1.4.1-1.9-2.3.6-4.5.7-6.8.7z"
      />
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '남구'});
        }}
        fill="#94af23"
        d="M541 514.1c-2.7-11.7-.8-22.8 5.5-32.7 19.7-31.2 10.8-40.4-3.6-53.1-2.1-1.2-4.1-2.6-6-4-10.2-7.3-14.1-8.5-20.2-2.5-2.2 2.2-.1 12.4 1.4 19.2 2.9 13.9 7 32.9-8.1 42.8-9.4 6.2-21.7 10.8-34.8 15.7-14.7 5.5-29.9 11.2-42.2 19.5-4.9 3.3-9 6.9-13 10.3-10.4 9-20.4 17.6-38.5 17.6-8.7 0-19.2-2-32.4-6.8-10.9 13.8-22.1 26.1-32.4 35.5-4.8 4.3-10 7.5-15.6 9.5-.3 4-.1 7.9 0 10.6v.4c-.2 2.6 1 5.3 2 7 0 0 0 .1.1.1 1.9 3.1 5.4 6.2 6.4 7.1l.1.1c.8.6 1.9 1.6 3.1 2.5 1 .8 2 1.6 2.7 2.2l.2.2c.2.4.4.7.7 1.1.6.7 1.2 1.3 1.8 1.9 1.5 1.2 3.2 2.3 5 3.2 1.2.6 2.5 1.2 3.8 1.7 10.1 2.6 21.7 1.7 31-2.6.2-.1.3-.1.5-.2 1.2-.6 3.5-1.5 4.6-1.9 1.1-.3 4.6-1.1 6-1.3 1.1-.1 4.6-.3 5.9-.3h1c2.3.5 4.6 1.1 6.9 1.8.4-.1.8-.1 1.2 0 1.8.6 3.7 1.1 5.5 1.5h.1c9.2 2.1 18.7 2.6 27.8.3 2.5-.8 5-1.8 7.4-3 1.4-.8 2.8-1.5 4.2-2.4.8-.5 1.6-1 2.3-1.6.5-.4 1-.9 1.4-1.3 0-.1 0-.1.1-.2.2-.2.5-.3.7-.5.1-.1.2-.2.4-.3.4-.3.7-.6 1.1-.8 0 0 .1 0 .1-.1 1.6-1.3 3.9-3.3 6.2-5.3 1.8-1.5 3.5-3 4.9-4.1 2.8-2.2 8.8-6.7 11.7-8.9 1.5-1.1 4.7-3 5.5-3.4 4.6-2.5 8.8-4.5 12.3-5.8 1-.3 4.5-1.4 6.1-1.8.8-.2 4.4-.9 6-1 1.3-.1 9.7-.1 13.8 0 4.1 0 11.5-.5 15.2-.9h.1c2.9-.4 11.7-2 15.1-2.9 2-.5 5.7-1.7 7.5-2.3h.1c2.8-.9 5.5-2 7.3-2.8 2-.9 5.2-2.7 7.1-4.1 1.1-.8 4.8-3.6 6.4-4.9.9-.8 3.6-3.3 5.3-5 .5-.5 1-1 1.6-1.7-11.7-11.3-22.9-25.8-26.4-41.3z"
      />
      <Circle
        onPress={() => {
          navigation.navigate('list', {loc: '광산구'});
        }}
        fill="#c2d35b"
        cx={253.1}
        cy={376.9}
        r={11.7}
      />
      <Circle
        onPress={() => {
          navigation.navigate('list', {loc: '북구'});
        }}
        fill="#c2d35b"
        cx={578.9}
        cy={302.6}
        r={11.7}
      />
      <Circle
        onPress={() => {
          navigation.navigate('list', {loc: '서구'});
        }}
        fill="#c2d35b"
        cx={448.3}
        cy={429.6}
        r={11.7}
      />
      <Circle
        onPress={() => {
          navigation.navigate('list', {loc: '남구'});
        }}
        fill="#c2d35b"
        cx={448.3}
        cy={555.6}
        r={11.7}
      />
      <Circle
        onPress={() => {
          navigation.navigate('list', {loc: '동구'});
        }}
        fill="#c2d35b"
        cx={627.1}
        cy={493.7}
        r={11.7}
      />
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '광산구'});
        }}
        fill="#575e2f"
        d="M306.1 287.8h-106c-11 0-20 9-20 20v14.4c0 11 9 20 20 20h44.3l8.4 17.8 9.1-17.8h44.2c11.1 0 20-8.9 20-20v-14.4c0-11-9-20-20-20z"
      />
      <Text
        onPress={() => {
          navigation.navigate('list', {loc: '광산구'});
        }}
        transform="translate(205.014 326.313)"
        fill="white"
        style={styles.text}>
        {'\uAD11\uC0B0\uAD6C'}
      </Text>
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '북구'});
        }}
        fill="#575e2f"
        d="M631.9 209.9h-106c-11 0-20 9-20 20v14.4c0 11 9 20 20 20h44.4l8.3 17.7 9-17.7h44.3c11.1 0 20-9 20-20v-14.4c0-11-9-20-20-20z"
      />
      <Text
        onPress={() => {
          navigation.navigate('list', {loc: '북구'});
        }}
        transform="translate(548.763 247.663)"
        fill="white"
        style={styles.text}>
        {'\uBD81\uAD6C'}
      </Text>
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '서구'});
        }}
        fill="#575e2f"
        d="M501.3 340.8h-106c-11 0-20 9-20 20v14.4c0 11 9 20 20 20h44.3L448 413l9.1-17.8h44.2c11.1 0 20-8.9 20-20v-14.4c0-11-9-20-20-20z"
      />
      <Text
        onPress={() => {
          navigation.navigate('list', {loc: '서구'});
        }}
        transform="translate(415.475 379.314)"
        fill="white"
        style={styles.text}>
        {'\uC11C\uAD6C'}
      </Text>
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '동구'});
        }}
        fill="#575e2f"
        d="M680.1 402.5h-106c-11 0-20 9-20 20v14.4c0 11 9 20 20 20h44.3l8.4 17.8 9.1-17.8h44.2c11.1 0 20-8.9 20-20v-14.4c0-11-9-20-20-20z"
      />
      <Text
        onPress={() => {
          navigation.navigate('list', {loc: '동구'});
        }}
        transform="translate(595.665 441.04)"
        fill="white"
        style={styles.text}>
        {'\uB3D9\uAD6C'}
      </Text>
      <Path
        onPress={() => {
          navigation.navigate('list', {loc: '남구'});
        }}
        fill="#575e2f"
        d="M501.3 464h-106c-11 0-20 9-20 20v14.4c0 11 9 20 20 20h44.4l8.3 17.7 9.1-17.7h44.2c11.1 0 20-9 20-20V484c0-11-9-20-20-20z"
      />
      <Text
        onPress={() => {
          navigation.navigate('list', {loc: '남구'});
        }}
        transform="translate(416.475 502.466)"
        fill="white"
        style={styles.text}>
        {'\uB0A8\uAD6C'}
      </Text>
      <Path
        fill="#7c8434"
        d="M146.5 404.2c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9zM164.4 404.2c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9zM280.6 473.8c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9zM298.5 473.8c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9zM341.5 290.6c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.2c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.2c-.6.6-1.3.9-2.1.9zM359.4 290.6c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.2c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.2c-.6.6-1.3.9-2.1.9zM473.2 323.7c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9zM491.1 323.7c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9z"
      />
      <G>
        <Path
          fill="#7c8434"
          d="M685.5 350.9c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L687.6 350c-.6.6-1.3.9-2.1.9zM703.4 350.9c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L705.5 350c-.6.6-1.3.9-2.1.9z"
        />
      </G>
      <G>
        <Path
          fill="#7c8434"
          d="M344.8 590.3c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9zM362.7 590.3c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-11.3 11.3c-.6.6-1.3.9-2.1.9z"
        />
      </G>
      <G>
        <Path
          fill="#7c8434"
          d="M637.3 540.9c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L639.4 540c-.6.6-1.3.9-2.1.9zM655.2 540.9c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l11.3-11.3c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L657.3 540c-.6.6-1.3.9-2.1.9z"
        />
      </G>
    </Svg>
  );
}

export default Gwangju;

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontFamily: bold,
  },
});
