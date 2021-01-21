'use strict';

const clearDay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g>
    <path d="M32,23.36A8.64,8.64,0,1,1,23.36,32,8.66,8.66,0,0,1,32,23.36m0-3A11.64,11.64,0,1,0,43.64,32,11.64,11.64,0,0,0,32,20.36Z" fill="#f4a71d"/>
    <line x1="32" y1="15.71" x2="32" y2="9.5" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="32" y1="48.29" x2="32" y2="54.5" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="43.52" y1="20.48" x2="47.91" y2="16.09" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="20.48" y1="43.52" x2="16.09" y2="47.91" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="20.48" y1="20.48" x2="16.09" y2="16.09" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="43.52" y1="43.52" x2="47.91" y2="47.91" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="15.71" y1="32" x2="9.5" y2="32" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>
    <line x1="48.29" y1="32" x2="54.5" y2="32" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
        <animate attributeName="stroke-dasharray" dur="5s" calcMode="spline" keySplines="0.5 0 0.5 1; 0.5 0 0.5 1" values="3 6; 6 6; 3 6" keyTimes="0; .5; 1" repeatCount="indefinite"/>
    </line>

    <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="45s" repeatCount="indefinite"/>
</g>
</svg>`

const clearNight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g>
    <path d="M46.66,36.2A16.66,16.66,0,0,1,29.88,19.65a16.29,16.29,0,0,1,.55-4.15A16.56,16.56,0,1,0,48.5,36.1C47.89,36.16,47.28,36.2,46.66,36.2Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>

    <animateTransform attributeName="transform" type="rotate" values="-5 32 32;15 32 32;-5 32 32" dur="10s" repeatCount="indefinite"/>
</g>
</svg>`

const cloudy = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g>
    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>

    <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="7s" repeatCount="indefinite"/>
</g>
</svg>`

const drizzle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polyline points="42 64 44.85 47 21.05 47 17 64" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <line x1="32.08" y1="49.01" x2="31.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="26.08" y1="49.01" x2="25.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.5s" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="38.08" y1="49.01" x2="37.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-1s" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" begin="-1s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const hail = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="21.17 46.81 18 64 42 64 44.75 46.81 21.17 46.81" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <circle cx="32" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" repeatCount="indefinite"/>
    </g>
    <g>
        <circle cx="39" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
    </g>
    <g>
        <circle cx="25" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const mist = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g>
    <line x1="17" y1="25" x2="47" y2="25" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="0s" repeatCount="indefinite"/>
</g>
<g>
    <line x1="17" y1="32" x2="47" y2="32" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="5s" begin="-2s" repeatCount="indefinite"/>
</g>
<g>
    <line x1="17" y1="39" x2="47" y2="39" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
</g>
</svg>`

const overcast = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="41.8 20.25 46.28 26.86 46.5 31.5 51.81 33.95 53.5 39.92 61.58 39.92 61 27 51.69 18.5 41.8 20.25" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <path d="M34.23,33.45a4.05,4.05,0,0,0,4.05,4H54.79a4.34,4.34,0,0,0,.81-8.61,3.52,3.52,0,0,0,.06-.66,4.06,4.06,0,0,0-6.13-3.48,6.08,6.08,0,0,0-11.25,3.19,6.34,6.34,0,0,0,.18,1.46h-.18A4.05,4.05,0,0,0,34.23,33.45Z" fill="none" stroke="#cacaca" stroke-linejoin="round" stroke-width="2"/>

    <animateTransform attributeName="transform" type="translate" values="-2.1 0; 2.1 0; -2.1 0" dur="7s" repeatCount="indefinite"/>
</g>
<g>
    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>

    <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="7s" repeatCount="indefinite"/>
</g>
</svg>`

const partlyCloudyDayDrizzle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polyline points="42 64 44.85 47 21.05 47 17 64" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M19.22,20.34a3.95,3.95,0,1,1-3.95,3.95,4,4,0,0,1,3.95-3.95m0-2a5.95,5.95,0,1,0,6,5.95,6,6,0,0,0-6-5.95Z" fill="#f4a71d"/>
        <line x1="19.22" y1="15.97" x2="19.22" y2="12.79" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="19.22" y1="35.79" x2="19.22" y2="32.62" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="25.11" y1="18.4" x2="27.35" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="11.09" y1="32.42" x2="13.33" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="13.33" y1="18.4" x2="11.09" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="27.35" y1="32.42" x2="25.11" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="10.89" y1="24.29" x2="7.72" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="30.72" y1="24.29" x2="27.55" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" from="0 19.22 24.293" to="360 19.22 24.293" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <line x1="32.08" y1="49.01" x2="31.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="26.08" y1="49.01" x2="25.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.5s" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="38.08" y1="49.01" x2="37.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-1s" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" begin="-1s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyDayHail = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polygon points="21.17 46.81 18 64 42 64 44.75 46.81 21.17 46.81" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M19.22,20.34a3.95,3.95,0,1,1-3.95,3.95,4,4,0,0,1,3.95-3.95m0-2a5.95,5.95,0,1,0,6,5.95,6,6,0,0,0-6-5.95Z" fill="#f4a71d"/>
        <line x1="19.22" y1="15.97" x2="19.22" y2="12.79" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="19.22" y1="35.79" x2="19.22" y2="32.62" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="25.11" y1="18.4" x2="27.35" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="11.09" y1="32.42" x2="13.33" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="13.33" y1="18.4" x2="11.09" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="27.35" y1="32.42" x2="25.11" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="10.89" y1="24.29" x2="7.72" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="30.72" y1="24.29" x2="27.55" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" from="0 19.22 24.293" to="360 19.22 24.293" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <circle cx="32" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" repeatCount="indefinite"/>
    </g>
    <g>
        <circle cx="39" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
    </g>
    <g>
        <circle cx="25" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyDayRain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polyline points="42 64 44.85 47 21.05 47 17 64" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M19.22,20.34a3.95,3.95,0,1,1-3.95,3.95,4,4,0,0,1,3.95-3.95m0-2a5.95,5.95,0,1,0,6,5.95,6,6,0,0,0-6-5.95Z" fill="#f4a71d"/>
        <line x1="19.22" y1="15.97" x2="19.22" y2="12.79" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="19.22" y1="35.79" x2="19.22" y2="32.62" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="25.11" y1="18.4" x2="27.35" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="11.09" y1="32.42" x2="13.33" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="13.33" y1="18.4" x2="11.09" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="27.35" y1="32.42" x2="25.11" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="10.89" y1="24.29" x2="7.72" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="30.72" y1="24.29" x2="27.55" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" from="0 19.22 24.293" to="360 19.22 24.293" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <line x1="24.52" y1="49.05" x2="23.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="31.52" y1="49.05" x2="30.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.3s" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" begin="-0.3s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="38.52" y1="49.05" x2="37.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.1s" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" begin="-0.1s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyDaySnow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polygon points="21.17 46.81 18 64 42 64 44.75 46.81 21.17 46.81" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M19.22,20.34a3.95,3.95,0,1,1-3.95,3.95,4,4,0,0,1,3.95-3.95m0-2a5.95,5.95,0,1,0,6,5.95,6,6,0,0,0-6-5.95Z" fill="#f4a71d"/>
        <line x1="19.22" y1="15.97" x2="19.22" y2="12.79" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="19.22" y1="35.79" x2="19.22" y2="32.62" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="25.11" y1="18.4" x2="27.35" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="11.09" y1="32.42" x2="13.33" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="13.33" y1="18.4" x2="11.09" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="27.35" y1="32.42" x2="25.11" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="10.89" y1="24.29" x2="7.72" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="30.72" y1="24.29" x2="27.55" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" from="0 19.22 24.293" to="360 19.22 24.293" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <g>
            <g>
                <path d="M32.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L33,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L31.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,32.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 32 50; 180 32 50; 360 32 50" dur="9s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" dur="3s" repeatCount="indefinite"/>
    </g>
    <g>
        <g>
            <g>
                <path d="M39.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L40,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L38.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,39.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 39 50; 180 39 50; 360 39 50" dur="6s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="0 0; 3 0" begin="-1s" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" begin="-1s" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" begin="-1s" dur="3s" repeatCount="indefinite"/>
    </g>
    <g>
        <g>
            <g>
                <path d="M25.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L26,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L24.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,25.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 25 50; 180 25 50; 360 25 50" dur="6s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="-3 0; 2 0" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyDay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M19.22,20.34a3.95,3.95,0,1,1-3.95,3.95,4,4,0,0,1,3.95-3.95m0-2a5.95,5.95,0,1,0,6,5.95,6,6,0,0,0-6-5.95Z" fill="#f4a71d"/>
        <line x1="19.22" y1="15.97" x2="19.22" y2="12.79" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="19.22" y1="35.79" x2="19.22" y2="32.62" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="25.11" y1="18.4" x2="27.35" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="11.09" y1="32.42" x2="13.33" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="13.33" y1="18.4" x2="11.09" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="27.35" y1="32.42" x2="25.11" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="10.89" y1="24.29" x2="7.72" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="30.72" y1="24.29" x2="27.55" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" from="0 19.22 24.293" to="360 19.22 24.293" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const partlyCloudyNightDrizzle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polyline points="42 64 44.85 47 21.05 47 17 64" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M29.33,27.13A10.6,10.6,0,0,1,18.65,16.6,10.44,10.44,0,0,1,19,14,10.54,10.54,0,1,0,30.5,27.07,11.46,11.46,0,0,1,29.33,27.13Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <line x1="32.08" y1="49.01" x2="31.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="26.08" y1="49.01" x2="25.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.5s" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" begin="-0.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="38.08" y1="49.01" x2="37.92" y2="49.99" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-1s" values="2 -10; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="1.5s" begin="-1s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyNightHail = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polygon points="21.17 46.81 18 64 42 64 44.75 46.81 21.17 46.81" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M29.33,27.13A10.6,10.6,0,0,1,18.65,16.6,10.44,10.44,0,0,1,19,14,10.54,10.54,0,1,0,30.5,27.07,11.46,11.46,0,0,1,29.33,27.13Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <circle cx="32" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" repeatCount="indefinite"/>
    </g>
    <g>
        <circle cx="39" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
    </g>
    <g>
        <circle cx="25" cy="50" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 12; -1 9" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyNightRain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polyline points="42 64 44.85 47 21.05 47 17 64" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M29.33,27.13A10.6,10.6,0,0,1,18.65,16.6,10.44,10.44,0,0,1,19,14,10.54,10.54,0,1,0,30.5,27.07,11.46,11.46,0,0,1,29.33,27.13Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <line x1="24.52" y1="49.05" x2="23.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="31.52" y1="49.05" x2="30.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.3s" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" begin="-0.3s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="38.52" y1="49.05" x2="37.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.1s" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" begin="-0.1s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyNightSnow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
    <clipPath id="b">
        <polygon points="21.17 46.81 18 64 42 64 44.75 46.81 21.17 46.81" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M29.33,27.13A10.6,10.6,0,0,1,18.65,16.6,10.44,10.44,0,0,1,19,14,10.54,10.54,0,1,0,30.5,27.07,11.46,11.46,0,0,1,29.33,27.13Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
<g clip-path="url(#b)">
    <g>
        <g>
            <g>
                <path d="M32.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L33,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L31.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,32.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 32 50; 180 32 50; 360 32 50" dur="9s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" dur="3s" repeatCount="indefinite"/>
    </g>
    <g>
        <g>
            <g>
                <path d="M39.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L40,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L38.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,39.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 39 50; 180 39 50; 360 39 50" dur="6s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="0 0; 3 0" begin="-1s" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" begin="-1s" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" begin="-1s" dur="3s" repeatCount="indefinite"/>
    </g>
    <g>
        <g>
            <g>
                <path d="M25.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L26,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L24.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,25.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 25 50; 180 25 50; 360 25 50" dur="6s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="-3 0; 2 0" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
    </g>
</g>
</svg>`

const partlyCloudyNight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M29.33,27.13A10.6,10.6,0,0,1,18.65,16.6,10.44,10.44,0,0,1,19,14,10.54,10.54,0,1,0,30.5,27.07,11.46,11.46,0,0,1,29.33,27.13Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const rain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polyline points="42 64 44.85 47 21.05 47 17 64" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <line x1="24.52" y1="49.05" x2="23.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="31.52" y1="49.05" x2="30.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.3s" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" begin="-0.3s" repeatCount="indefinite"/>
    </g>
    <g>
        <line x1="38.52" y1="49.05" x2="37.48" y2="54.95" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <animateTransform attributeName="transform" type="translate" begin="-0.1s" values="2 -10; -2 10" dur="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.5s" begin="-0.1s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const snow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="21.17 46.81 18 64 42 64 44.75 46.81 21.17 46.81" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <g>
            <g>
                <path d="M32.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L33,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L31.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,32.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 32 50; 180 32 50; 360 32 50" dur="9s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" dur="3s" repeatCount="indefinite"/>
    </g>
    <g>
        <g>
            <g>
                <path d="M39.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L40,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L38.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,39.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 39 50; 180 39 50; 360 39 50" dur="6s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="0 0; 3 0" begin="-1s" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" begin="-1s" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" begin="-1s" dur="3s" repeatCount="indefinite"/>
    </g>
    <g>
        <g>
            <g>
                <path d="M25.29,47.2l.29.82a.29.29,0,0,0,.41.17l.79-.37a.3.3,0,0,1,.4.4l-.37.79a.29.29,0,0,0,.17.41l.82.29a.31.31,0,0,1,0,.58l-.82.29a.29.29,0,0,0-.17.41l.37.79a.3.3,0,0,1-.4.4L26,51.81a.29.29,0,0,0-.41.17l-.29.82a.31.31,0,0,1-.58,0L24.42,52a.29.29,0,0,0-.41-.17l-.79.37a.3.3,0,0,1-.4-.4l.37-.79a.29.29,0,0,0-.17-.41l-.82-.29a.31.31,0,0,1,0-.58l.82-.29a.29.29,0,0,0,.17-.41l-.37-.79a.3.3,0,0,1,.4-.4l.79.37a.29.29,0,0,0,.41-.17l.29-.82A.31.31,0,0,1,25.29,47.2Z" fill="#72b8d4"/>
                <animateTransform attributeName="transform" type="rotate" values="0 25 50; 180 25 50; 360 25 50" dur="6s" repeatCount="indefinite"/>
            </g>
            <animateTransform attributeName="transform" type="translate" values="-3 0; 2 0" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
        </g>
        <animateTransform attributeName="transform" type="translate" values="2 -6; -2 12" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;1;0" begin="-1.5s" dur="3s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" fill="none" stroke="#efefef" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const sunrise = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <rect y="7.5" width="64" height="32" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M32,30.36A8.64,8.64,0,1,1,23.36,39,8.66,8.66,0,0,1,32,30.36m0-3A11.64,11.64,0,1,0,43.64,39,11.64,11.64,0,0,0,32,27.36Z" fill="#f4a71d"/>
        <line x1="32" y1="22.71" x2="32" y2="16.5" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="32" y1="61.5" x2="32" y2="55.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="43.52" y1="27.48" x2="47.91" y2="23.09" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="16.09" y1="54.91" x2="20.48" y2="50.52" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="20.48" y1="27.48" x2="16.09" y2="23.09" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="47.91" y1="54.91" x2="43.52" y2="50.52" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="15.71" y1="39" x2="9.5" y2="39" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="54.5" y1="39" x2="48.29" y2="39" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>

        <animateTransform attributeName="transform" type="rotate" from="0 32 39" to="360 32 39" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<polyline points="16 42.5 27 42.5 32 38 37 42.5 48 42.5" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>`

const sunset = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <rect y="7.5" width="64" height="32" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M32,30.36A8.64,8.64,0,1,1,23.36,39,8.66,8.66,0,0,1,32,30.36m0-3A11.64,11.64,0,1,0,43.64,39,11.64,11.64,0,0,0,32,27.36Z" fill="#f4a71d"/>
        <line x1="32" y1="22.71" x2="32" y2="16.5" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="32" y1="61.5" x2="32" y2="55.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="43.52" y1="27.48" x2="47.91" y2="23.09" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="16.09" y1="54.91" x2="20.48" y2="50.52" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="20.48" y1="27.48" x2="16.09" y2="23.09" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="47.91" y1="54.91" x2="43.52" y2="50.52" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="15.71" y1="39" x2="9.5" y2="39" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
        <line x1="54.5" y1="39" x2="48.29" y2="39" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>

        <animateTransform attributeName="transform" type="rotate" from="0 32 39" to="360 32 39" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<polyline points="16 42.5 27 42.5 32 47 37 42.5 48 42.5" fill="none" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>`

const thunderstormDay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <g>
        <path d="M19.22,20.34a3.95,3.95,0,1,1-3.95,3.95,4,4,0,0,1,3.95-3.95m0-2a5.95,5.95,0,1,0,6,5.95,6,6,0,0,0-6-5.95Z" fill="#f4a71d"/>
        <line x1="19.22" y1="15.97" x2="19.22" y2="12.79" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="19.22" y1="35.79" x2="19.22" y2="32.62" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="25.11" y1="18.4" x2="27.35" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="11.09" y1="32.42" x2="13.33" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="13.33" y1="18.4" x2="11.09" y2="16.16" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="27.35" y1="32.42" x2="25.11" y2="30.18" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="10.89" y1="24.29" x2="7.72" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line x1="30.72" y1="24.29" x2="27.55" y2="24.29" fill="none" stroke="#f4a71d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" from="0 19.22 24.293" to="360 19.22 24.293" dur="45s" repeatCount="indefinite"/>
    </g>
</g>
<g>
    <polygon points="30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36" fill="#f4a71d"/>
    <animate id="a" attributeName="opacity" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1" dur="2s" repeatCount="indefinite"/>
</g>
<path d="M41.5,45.5h5a7,7,0,0,0,0-14l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h3" fill="none" stroke="#efefef" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const thunderstormNight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
    <clipPath id="a">
        <polygon points="10.55 34.21 6.72 30.79 4.72 24.79 5.72 17.79 9.72 12.79 14.72 9.79 20.72 9.79 25.72 10.79 28.72 13.79 31.28 18.15 26.72 22.79 21.72 22.79 16.72 27.79 16.72 30.79 10.55 34.21" fill="none"/>
    </clipPath>
</defs>
<g>
    <polygon points="30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36" fill="#f4a71d"/>
    <animate id="a" attributeName="opacity" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1" dur="2s" repeatCount="indefinite"/>
</g>
<g clip-path="url(#a)">
    <g>
        <path d="M29.33,27.13A10.6,10.6,0,0,1,18.65,16.6,10.44,10.44,0,0,1,19,14,10.54,10.54,0,1,0,30.5,27.07,11.46,11.46,0,0,1,29.33,27.13Z" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

        <animateTransform attributeName="transform" type="rotate" values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293" dur="10s" repeatCount="indefinite"/>
    </g>
</g>
<path d="M41.5,45.5h5a7,7,0,0,0,0-14l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h3" fill="none" stroke="#efefef" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</svg>`

const thunderstorm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<path d="M41.5,45.5h5a7,7,0,0,0,0-14l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h3" fill="none" stroke="#efefef" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
<g>
    <polygon points="30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36" fill="#f4a71d"/>

    <animate id="a" attributeName="opacity" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1" dur="2s" repeatCount="indefinite"/>
</g>
</svg>`

const tornado = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g>
    <line x1="17" y1="20" x2="47" y2="20" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="3s" repeatCount="indefinite"/>
</g>
<g>
    <line x1="19" y1="26" x2="45" y2="26" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="3s" begin="-0.2s" repeatCount="indefinite"/>
</g>
<g>
    <line x1="21.5" y1="32" x2="42.5" y2="32" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-5 0; 5 0; -5 0" dur="3s" begin="-0.4s" repeatCount="indefinite"/>
</g>
<g>
    <line x1="24" y1="38" x2="40" y2="38" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-6 0; 6 0; -6 0" dur="3s" begin="-0.6s" repeatCount="indefinite"/>
</g>
<g>
    <line x1="28" y1="44" x2="36" y2="44" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <animateTransform attributeName="transform" type="translate" values="-7 0; 7 0; -7 0" dur="3s" begin="-0.8s" repeatCount="indefinite"/>
</g>
</svg>`

const wind = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g>
    <path d="M43.64,20a5,5,0,1,1,3.61,8.46H11.75" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
    <path d="M29.14,44a5,5,0,1,0,3.61-8.46h-21" fill="none" stroke="#efefef" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>

    <animateTransform attributeName="transform" type="translate" values="-8 2; 0 -2; 8 0; 0 1; -8 2" dur="2s" repeatCount="indefinite"/>
</g>
</svg>`

function updateAnimationBody(iconCode) {
    if (iconCode === "01d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = clearDay;
        hideEasterEgg();
    };
    if (iconCode === "01n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = clearNight;
        hideEasterEgg();
    };
    if (iconCode === "02d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = partlyCloudyDay;
        getJoke();
    };
    if (iconCode === "02n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = partlyCloudyNight;
        getJoke();
    };
    if (iconCode === "03d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = cloudy;
        getJoke();
    };
    if (iconCode === "03n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = cloudy;
        getJoke();
    };
    if (iconCode === "04d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = overcast;
        getJoke();
    };
    if (iconCode === "04n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = overcast;
        getJoke();
    };
    if (iconCode === "09d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = rain;
        getJoke();
    };
    if (iconCode === "09n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = rain;
        getJoke();
    };
    if (iconCode === "10d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = partlyCloudyDayRain;
        getJoke();
    };
    if (iconCode === "10n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = partlyCloudyNightRain;
        getJoke();
    };
    if (iconCode === "11d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = thunderstormDay;
        getJoke();
    };
    if (iconCode === "11n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = thunderstormNight;
        getJoke();
    };
    if (iconCode === "13d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = snow;
        hideEasterEgg();
    };
    if (iconCode === "13n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = snow;
        hideEasterEgg();
    };
    if (iconCode === "50d") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = mist;
        getJoke();
    };
    if (iconCode === "50n") {
        const div3 = document.querySelector('#animationIcon');
        div3.innerHTML = mist;
        getJoke();
    };
}