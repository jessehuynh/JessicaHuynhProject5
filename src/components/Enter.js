import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Enter extends Component {
    render(){
        return (
            
            // OPENING OVERLAY
            <div className="overlay">
                <div className="wrapper">
                        <h1 className="visuallyhidden">E-Cards by Jesse</h1>
                        <svg id="opening" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744.68 221.39"><title>by Jesse Huynh</title><path id="S" d="M186.79,332.08q4.91,7.2,9.15,13.1t9.15,11.5a38.61,38.61,0,0,0,8.9-4.25,77.59,77.59,0,0,0,7.8-5.75q3.71-3.09,7.05-6.4t6.65-6.4a1.68,1.68,0,0,1,2.4,0,1.69,1.69,0,0,1,0,2.4q-3.3,3.11-6.65,6.45t-7,6.5a66.29,66.29,0,0,1-7.8,5.8,42.5,42.5,0,0,1-9.05,4.35,26.86,26.86,0,0,1,6,11.9,27.33,27.33,0,0,1-.2,11.85,33.81,33.81,0,0,1-4.85,10.9,47.1,47.1,0,0,1-8,9.15,44,44,0,0,1-9.75,6.55,29.75,29.75,0,0,1-10,3q-5.59.6-8.85-.8a8.63,8.63,0,0,1-4.6-4.25,12.76,12.76,0,0,1-.95-6.8,31,31,0,0,1,2.2-8.4,57.29,57.29,0,0,1,4.75-9.1,69.38,69.38,0,0,1,15.1-16.8,48.57,48.57,0,0,1,9.25-5.85q-1.5-2.49-3.8-6l-4.95-7.55q-2.66-4.05-5.45-8.5c-1.87-3-3.63-5.92-5.3-8.85a19.19,19.19,0,0,1-2.35-7.65,21.61,21.61,0,0,1,.65-8.2,15.63,15.63,0,0,1,3.75-6.6,10.06,10.06,0,0,1,7.05-2.95,8.55,8.55,0,0,1,5.85,2,9.13,9.13,0,0,1,3.15,5.85,16.89,16.89,0,0,1-1.45,8.85Q192.59,326.28,186.79,332.08Zm13.1,31.5a40.56,40.56,0,0,0-10.45,6.9,66.63,66.63,0,0,0-9,9.75,60,60,0,0,0-6.45,10.6,29,29,0,0,0-2.85,9.5c-.23,2.77.39,4.88,1.85,6.35s4,1.83,7.7,1.1a20,20,0,0,0,7-3.1,36,36,0,0,0,6.75-5.9,41.34,41.34,0,0,0,5.55-7.9,32.18,32.18,0,0,0,3.35-9.1,27,27,0,0,0,.25-9.4A19.69,19.69,0,0,0,199.89,363.58Zm-15.2-34.8a18.3,18.3,0,0,0,4.45-5.2,15.5,15.5,0,0,0,1.9-5.35,9,9,0,0,0-.4-4.5,5.46,5.46,0,0,0-2.25-2.85,3.9,3.9,0,0,0-3.15-.55,4.09,4.09,0,0,0-2.2,1.85,9.74,9.74,0,0,0-1.2,3.45,19.53,19.53,0,0,0-.25,4.2,20.42,20.42,0,0,0,.65,4.25,9.56,9.56,0,0,0,1.65,3.5Z" transform="translate(-166.1 -228.67)" /><path id="E" d="M244.09,339.38a36.49,36.49,0,0,0-.55,9.4,12.48,12.48,0,0,0,2.25,6.9,5.63,5.63,0,0,0,5.5,1.95q3.6-.45,9.2-5.55c1.53-1.4,3.07-2.88,4.6-4.45s3-3.15,4.45-4.75,2.82-3.13,4.15-4.6,2.6-2.8,3.8-4a1.57,1.57,0,0,1,2.3,0,1.54,1.54,0,0,1,.1,2.4l-1.8,1.8q-2.1,2.4-5.35,6t-7,7.25a88.58,88.58,0,0,1-7.6,6.55,23.43,23.43,0,0,1-7,3.95q-6.9,2.1-11.1-.35a13,13,0,0,1-5.85-7.45,26.6,26.6,0,0,1-.95-11.35,37,37,0,0,1,3.45-12.05,28.49,28.49,0,0,1,7.4-9.6,16.51,16.51,0,0,1,11-3.9,11.46,11.46,0,0,1,3.4.5,8.22,8.22,0,0,1,2.85,1.55,6.84,6.84,0,0,1,1.9,2.55,7.46,7.46,0,0,1,.55,3.4,8.26,8.26,0,0,1-2.8,5.25,26.75,26.75,0,0,1-5.75,4.1,49.09,49.09,0,0,1-6.4,2.9Q245.59,339,244.09,339.38Zm11.2-18.2a8.2,8.2,0,0,0-2.8,1.7,18.7,18.7,0,0,0-2.9,3.25,35.83,35.83,0,0,0-2.65,4.35,24.45,24.45,0,0,0-1.95,5.1c.87-.27,2.13-.73,3.8-1.4a42.82,42.82,0,0,0,5-2.35,27,27,0,0,0,4.4-3,5.42,5.42,0,0,0,2.15-3.45,3.82,3.82,0,0,0-1.4-3.4A3.6,3.6,0,0,0,255.29,321.18Z" transform="translate(-166.1 -228.67)" /><path id="N" d="M286.49,322.28q-.21,7.2-.2,14.5t-.1,14.6c.86-1.93,1.85-4,2.95-6.15a44.5,44.5,0,0,1,3.6-6,25.24,25.24,0,0,1,4-4.45,6,6,0,0,1,4.15-1.65,4.17,4.17,0,0,1,3.3,1.55,9,9,0,0,1,1.55,3.6,21.48,21.48,0,0,1,.4,4.75c0,1.73-.09,3.42-.15,5.05s-.1,3.12-.1,4.45a6.17,6.17,0,0,0,.5,2.9,7,7,0,0,0,2.25-2.15c1-1.23,2.05-2.78,3.25-4.65s2.48-4,3.85-6.3,2.72-4.7,4.05-7.1a2.46,2.46,0,0,1,1.35-1.2,2.7,2.7,0,0,1,1.5-.15,1,1,0,0,1,.8.8,2.38,2.38,0,0,1-.65,1.75,31.12,31.12,0,0,0-2.1,3.35c-.8,1.44-1.67,3-2.6,4.7s-1.94,3.43-3,5.2-2.12,3.37-3.15,4.8a21.16,21.16,0,0,1-3.1,3.5,4,4,0,0,1-2.85,1.25,2.28,2.28,0,0,1-2.55-1.4,11.91,11.91,0,0,1-.95-4.1,41.44,41.44,0,0,1-.05-5.5c.1-2,.15-3.86.15-5.6a23.81,23.81,0,0,0-.35-4.4c-.24-1.2-.72-1.83-1.45-1.9s-1.62.47-2.65,1.6a28.41,28.41,0,0,0-3.15,4.3q-1.61,2.61-3.2,5.7t-2.85,5.85q-1.26,2.76-2.05,4.6c-.54,1.24-.84,1.92-.9,2.05v1c0,.2-.48.47-1.43.8a12.85,12.85,0,0,1-3.21.65,10.14,10.14,0,0,1-3.22-.2c-1-.23-1.44-.75-1.44-1.55q.19-9.71.55-18.9t.55-19a1.6,1.6,0,0,1,1.33-1.6,10.56,10.56,0,0,1,3-.4,14.15,14.15,0,0,1,3,.3C286,321.78,286.49,322,286.49,322.28Z" transform="translate(-166.1 -228.67)" /><path id="D" d="M364.89,367.88q2.49-4.5,5.05-9.6t4.75-9.8q2.19-4.69,3.95-8.4c1.16-2.46,2.05-4.3,2.65-5.5a1.73,1.73,0,0,1,2.4-.4,2.42,2.42,0,0,1,.65,1.15,1.4,1.4,0,0,1-.35,1.25c-.8,1.47-1.8,3.48-3,6.05L377,351.08q-2.16,4.6-4.6,9.55T367.59,370c-.74,1.27-1.75,3.07-3,5.4a79.81,79.81,0,0,1-4.3,6.85,42.3,42.3,0,0,1-4.9,5.85c-1.7,1.67-3.29,2.43-4.75,2.3-1.27-.07-2.4-.88-3.4-2.45a23.44,23.44,0,0,1-2.6-6.45,76.07,76.07,0,0,1-1.85-9.75q-.75-5.66-1.15-12.45a22.21,22.21,0,0,1-2.95,1.85,16.54,16.54,0,0,1-2.75,1.15q-5.4,1.71-9.1.5a11.23,11.23,0,0,1-5.85-4.2,16.63,16.63,0,0,1-2.8-7.35,33.34,33.34,0,0,1-.05-9.1,35.16,35.16,0,0,1,2.55-9.35,30.75,30.75,0,0,1,5-8.15,21.54,21.54,0,0,1,7.15-5.5,16.51,16.51,0,0,1,9.2-1.35h.2q.69-10.39,2.05-20.8t3.2-20q1.85-9.6,4.3-18.05a100,100,0,0,1,5.45-14.8,42.43,42.43,0,0,1,6.55-10.3,13.4,13.4,0,0,1,7.65-4.65c5.06-1.06,9-.47,11.9,1.8s4.83,5.67,5.9,10.2a54,54,0,0,1,.85,16.35,127,127,0,0,1-3.4,20.3,211.37,211.37,0,0,1-6.8,22.05,209.1,209.1,0,0,1-9.35,21.65,166.08,166.08,0,0,1-11.1,19,78.77,78.77,0,0,1-12,14.15l-2.2,1.9q.19,6.19.7,11.35a78.09,78.09,0,0,0,1.3,8.9,20.92,20.92,0,0,0,1.95,5.8c.76,1.37,1.61,2.08,2.55,2.15s2.08-.3,3.25-1.5a33.25,33.25,0,0,0,3.55-4.45q1.8-2.65,3.45-5.65C363,371.18,364,369.42,364.89,367.88Zm-23-46.7a4.13,4.13,0,0,0-3.9,1.25,17.87,17.87,0,0,0-3.55,4.9,40,40,0,0,0-2.85,7.2,54,54,0,0,0-1.75,8,33.19,33.19,0,0,0-.25,7.45,12.25,12.25,0,0,0,1.6,5.55,4.55,4.55,0,0,0,3.8,2.2c1.66.1,3.8-.75,6.4-2.55q-.3-7.69-.15-16.3T341.89,321.18Zm5.9.7a1.62,1.62,0,0,1-.7,2.3,1.53,1.53,0,0,1-1.3.2q-.51,7.5-.7,14.55t0,13.35l.2-.2a64.76,64.76,0,0,0,10.1-12.2,160.07,160.07,0,0,0,10-17.45q4.8-9.65,9-20.45t7.1-21.25a153.85,153.85,0,0,0,4.2-19.8,63.26,63.26,0,0,0,.45-16.15q-.86-6.79-4.2-10.25t-9.85-2.05c-2.4.54-4.64,2.14-6.7,4.8a45.16,45.16,0,0,0-5.75,10.4,115.69,115.69,0,0,0-4.85,14.7q-2.21,8.31-3.85,17.75t-2.9,19.6q-1.26,10.15-2,20.15a4.81,4.81,0,0,1,.85.9A12.75,12.75,0,0,0,347.79,321.88Z" transform="translate(-166.1 -228.67)" /><path id="A" d="M433.69,381q1.69-.8,4.05-4.1t4.95-7.85q2.6-4.54,5.25-9.8t4.95-10.15q2.3-4.9,4.1-8.8t2.8-5.7a1.73,1.73,0,0,1,2.4-.4,2.42,2.42,0,0,1,.65,1.15,1.4,1.4,0,0,1-.35,1.25q-1.2,2.31-3,6.25c-1.2,2.63-2.55,5.54-4.05,8.7s-3.09,6.43-4.75,9.8-3.34,6.52-5,9.45-3.3,5.53-4.9,7.8a17.81,17.81,0,0,1-4.4,4.7q-3.4,2.3-5.75,1.8a5.71,5.71,0,0,1-3.8-3.05,19.88,19.88,0,0,1-2.1-6.85,67.12,67.12,0,0,1-.7-9.55c0-3.5.1-7.2.4-11.1s.71-7.72,1.25-11.45q-2.2,3.6-4.65,7.05t-5,6.3a47.37,47.37,0,0,1-5,4.95,21.37,21.37,0,0,1-4.7,3.1q-5.91,2.5-9,1.3a6.56,6.56,0,0,1-4.05-4.8,19.48,19.48,0,0,1,.15-8.9,51.73,51.73,0,0,1,3.65-10.9,64.6,64.6,0,0,1,6.4-10.95,45.94,45.94,0,0,1,8.45-9.05,26.62,26.62,0,0,1,9.75-5.1,15.16,15.16,0,0,1,10.35.9c.33.14.56,0,.7-.35s.26-.55.4-.55a3.92,3.92,0,0,1,4.2,2.95,21.83,21.83,0,0,1,.65,8.05,90,90,0,0,1-1.65,11.35q-1.31,6.36-2.85,12.85t-2.85,12.5a86,86,0,0,0-1.7,10.35q-.4,4.35.6,6.35T433.69,381Zm-2.8-61.7a12.22,12.22,0,0,0-8.4-.6,22.09,22.09,0,0,0-8.05,4.4,42.14,42.14,0,0,0-7.15,7.75,61.14,61.14,0,0,0-5.65,9.45,53.42,53.42,0,0,0-3.55,9.45,22.79,22.79,0,0,0-.9,7.75c.2,2.14,1,3.6,2.3,4.4s3.36.6,6.1-.6a19.59,19.59,0,0,0,5.5-4.3,64.92,64.92,0,0,0,6.25-7.65,99.36,99.36,0,0,0,6.05-9.75,81.72,81.72,0,0,0,4.9-10.7q.69-3,1.35-5.45a33.31,33.31,0,0,1,1.35-4.15Z" transform="translate(-166.1 -228.67)" /><path id="T" d="M501.59,271.28c-.14.87-.5,2.7-1.1,5.5s-1.37,6.4-2.3,10.8q9.9-1.9,19.6-3.85t18.45-3.3q8.75-1.35,16.2-1.8a55.66,55.66,0,0,1,13,.55,18.84,18.84,0,0,1,8.85,3.75,10.41,10.41,0,0,1,3.6,7.75,1.61,1.61,0,0,1-.5,1.25,1.76,1.76,0,0,1-1.2.45,1.66,1.66,0,0,1-1.7-1.8,7.25,7.25,0,0,0-3.35-6.05,19.16,19.16,0,0,0-8.45-2.6,61.62,61.62,0,0,0-12.55.2q-7.26.75-15.7,2.15t-17.9,3.35q-9.45,2-19.15,3.75c-.34,1.54-1,4.5-1.95,8.9s-2.12,9.74-3.45,16-2.79,13.22-4.35,20.85-3.14,15.49-4.7,23.55-3.07,16.1-4.5,24.1-2.69,15.47-3.75,22.4a173.86,173.86,0,0,0-2.4,22.55q-.1,7.65,1.55,9.65c1.1,1.33,2.66,1.05,4.7-.85a47.5,47.5,0,0,0,6.95-9q3.9-6.15,8.4-14.85t9.1-18.35q4.59-9.65,9-19.5t8-18.3q3.6-8.44,6.2-14.7c1.73-4.16,2.93-7.12,3.6-8.85a1.49,1.49,0,0,1,.85-1,1.66,1.66,0,0,1,1.25-.1,1.55,1.55,0,0,1,1,.85,1.91,1.91,0,0,1,.1,1.35q-1.31,3.3-4.2,10.3t-6.8,16.1q-3.9,9.11-8.55,19.5t-9.55,20.45q-4.9,10.05-9.8,18.9a155.15,155.15,0,0,1-9.2,14.85q-4.31,6-7.85,8.4t-5.75-.45q-2.21-2.85-2.8-11.85t.9-25.7q.9-10.5,2.45-22.25t3.3-23.5q1.74-11.74,3.65-22.8t3.5-20.15q1.59-9.11,2.75-15.55c.76-4.3,1.31-7.31,1.65-9.05q-13,2.3-25.45,3.55a116,116,0,0,1-22.8.25,47.94,47.94,0,0,1-17.8-4.9,21.85,21.85,0,0,1-10.55-11.9,1.71,1.71,0,0,1,.1-1.3,1.51,1.51,0,0,1,1-.8,1.49,1.49,0,0,1,2.1,1.1,18.67,18.67,0,0,0,5.75,8,27.16,27.16,0,0,0,9.25,4.75,52.18,52.18,0,0,0,12.1,2.05,120,120,0,0,0,14.3-.05q7.59-.45,15.9-1.65t16.8-2.8l3.5-18.7c0-.67.6-1.2,1.8-1.6a13.32,13.32,0,0,1,3.85-.65,9.53,9.53,0,0,1,3.7.6C501.34,269.67,501.79,270.35,501.59,271.28Z" transform="translate(-166.1 -228.67)" /><path id="H" d="M530,363q-.21-5.19-.3-13.8t.3-19.1q.39-10.5,1.45-22.1a218.72,218.72,0,0,1,3.25-22.8A151.59,151.59,0,0,1,540.38,264a67.43,67.43,0,0,1,8.66-17.1,34,34,0,0,1,12.29-10.75q7.15-3.6,16.55-2,5.8,1,8.06,5.4c1.5,2.94,2.1,6.63,1.8,11.1a61.46,61.46,0,0,1-3.2,15,148.6,148.6,0,0,1-7,17.1q-4.19,8.81-9.29,17.45T558,316.13a137.52,137.52,0,0,1-10,12.55,39.8,39.8,0,0,1-8.45,7.4,1.3,1.3,0,0,1-1.3-.1c.06,3.14.13,6.07.19,8.8s.17,5.27.31,7.6q1-2.5,2.25-5.35a47.09,47.09,0,0,1,2.75-5.35,31,31,0,0,1,3.1-4.35,9.45,9.45,0,0,1,3.34-2.6,4.41,4.41,0,0,1,3.56,0,9,9,0,0,1,3.6,3.45q1.1,1.69,1.2,5.6t-.3,9.15q-.41,5.25-1.11,11.25t-1.29,11.9q-.62,5.91-.8,11.2a43.23,43.23,0,0,0,.45,9.05,10.23,10.23,0,0,0,2.35,5.5q1.69,1.76,4.9.55c1.8-.67,3.69-2.57,5.69-5.7a83.83,83.83,0,0,0,6-11.4q3-6.7,5.8-14.55t5.2-15.05q2.35-7.2,4.11-12.9c1.16-3.8,2-6.53,2.64-8.2a1.71,1.71,0,0,1,1-.75,1.8,1.8,0,0,1,1.25.15,1.66,1.66,0,0,1,.75,1.1,1.86,1.86,0,0,1-.14,1.3c-.61,1.74-1.5,4.58-2.7,8.55s-2.62,8.45-4.25,13.45-3.44,10.2-5.41,15.6-4,10.38-6.19,14.95a71,71,0,0,1-6.7,11.55q-3.45,4.69-6.86,5.4-4.2.9-6.64-1.05a11.26,11.26,0,0,1-3.61-5.75,32.88,32.88,0,0,1-1.19-9.1c0-3.53.1-7.25.39-11.15s.74-7.83,1.3-11.8,1.06-7.66,1.45-11.1.69-6.47.86-9.1a14.85,14.85,0,0,0-.45-5.75q-1.11-3-2.55-3.15c-1-.1-2,.44-3.11,1.6a22.37,22.37,0,0,0-3.25,4.8c-1.06,2-2.08,4.12-3,6.25s-1.8,4.17-2.5,6.1-1.22,3.37-1.55,4.3l.09.9c0,.4-.46.74-1.39,1a19.07,19.07,0,0,1-3.11.6,16.1,16.1,0,0,1-3.14.1C530.47,363.52,530,363.31,530,363Zm8.5-30.1A34.58,34.58,0,0,0,546,326a145.1,145.1,0,0,0,9.2-11.8q4.85-6.84,9.64-15t8.86-16.4a152.83,152.83,0,0,0,6.84-16.1,71.15,71.15,0,0,0,3.66-14.1q.84-6.25-.7-10.3a7.54,7.54,0,0,0-6.25-4.85q-8.91-1.39-15.25,2.3a30.69,30.69,0,0,0-10.75,11,66,66,0,0,0-7,17.25,158.27,158.27,0,0,0-4,21.05q-1.41,11.1-1.81,22.5t-.3,21.5Z" transform="translate(-166.1 -228.67)" /><path id="O" d="M613.68,359.08a34.92,34.92,0,0,0,4.65-3.65,64.67,64.67,0,0,0,4.75-4.85l12.3-16.1a1.73,1.73,0,0,1,1.1-.75,1.24,1.24,0,0,1,1.2.35,1.71,1.71,0,0,1,.75,1.1,1.21,1.21,0,0,1-.35,1.2l-12.5,16.4a56.89,56.89,0,0,1-7.35,7.1,32.72,32.72,0,0,1-7.05,4.4q-3.79,7-7.75,10t-7.35,3a8.23,8.23,0,0,1-6-2.5,12.78,12.78,0,0,1-3.45-6.55,22.45,22.45,0,0,1,.1-9.15,27.57,27.57,0,0,1,4.6-10.3c-.06-.53-.11-1.1-.15-1.7s-.05-1.2-.05-1.8a29.43,29.43,0,0,1,1.4-11.25,21.27,21.27,0,0,1,4.5-7.65,15.19,15.19,0,0,1,6.2-4,11.85,11.85,0,0,1,6.6-.3,10.7,10.7,0,0,1,5.6,3.45,14.18,14.18,0,0,1,2.8,5.75,23.65,23.65,0,0,1,.55,7.2,51,51,0,0,1-1.05,7.65,62.16,62.16,0,0,1-1.95,7.15Q614.69,356.69,613.68,359.08Zm-18.7,1.1c-1.66,3.47-2.35,6.2-2.05,8.2s1.17,3.25,2.6,3.75,3.19.22,5.25-.85a16.32,16.32,0,0,0,5.8-5.6,13.05,13.05,0,0,1-4.4.05,9,9,0,0,1-3.1-1.15,9.14,9.14,0,0,1-2.25-1.95C596.2,361.87,595.58,361.05,595,360.18Zm12.7-15.9a16.07,16.07,0,0,0-2.9,2.55c-.93,1-1.83,2.12-2.7,3.25s-1.66,2.23-2.4,3.3-1.36,2-1.9,2.7a15.41,15.41,0,0,0,1.3,3.25,5.83,5.83,0,0,0,2.15,2.25,6.77,6.77,0,0,0,3.2.9,11.89,11.89,0,0,0,4.45-.8,55.25,55.25,0,0,0,2.4-5.35c.87-2.16,1.67-4.5,2.4-7a58,58,0,0,0,1.7-7.65,29.75,29.75,0,0,0,.3-7.2,12.69,12.69,0,0,0-1.85-5.75,7.85,7.85,0,0,0-4.65-3.35,8.08,8.08,0,0,0-5,.25,12,12,0,0,0-4.85,3.45,19,19,0,0,0-3.55,6.5,26.44,26.44,0,0,0-1.15,9.4c1.14-1.13,2.37-2.27,3.7-3.4a49.44,49.44,0,0,1,4.4-3.3,1.8,1.8,0,0,1,2.2.1,6.74,6.74,0,0,1,1.7,2.1,10.78,10.78,0,0,1,1,2.5C607.78,343.78,607.82,344.21,607.68,344.28Z" transform="translate(-166.1 -228.67)" /><path id="U" d="M645.58,323.78c-.26.8-.75,2.39-1.45,4.75s-1.36,5.07-2,8.1-1.13,6.17-1.5,9.4a35.06,35.06,0,0,0,0,8.7,10.74,10.74,0,0,0,2.45,5.9q1.9,2.06,5.9,1.05a20.81,20.81,0,0,0,10-5.9,40.24,40.24,0,0,0,6.8-9.85,69.62,69.62,0,0,0,4.5-11.5q1.75-6,3.25-10.75c.2-.4,1-.73,2.35-1a31.17,31.17,0,0,1,4.45-.5,21.74,21.74,0,0,1,4.25.2c1.24.2,1.79.57,1.65,1.1q-.39,1.5-1.35,5.6t-2.2,9.8q-1.25,5.7-2.6,12.45T677.53,365q-1.24,6.9-2.2,13.35t-1.45,11.55a55.38,55.38,0,0,0-.3,8.35c.14,2.17.55,3.37,1.25,3.6s1.77-.63,3.2-2.6A66.32,66.32,0,0,0,683.58,389q2.7-5.7,5.2-12.55t4.8-14.05q2.31-7.2,4.4-14.25t4.1-13.25a1.56,1.56,0,0,1,.8-1,1.76,1.76,0,0,1,1.3-.1,1.48,1.48,0,0,1,1.1,2.1q-1.2,3.81-2.9,9.4t-3.7,12q-2,6.34-4.3,13t-4.65,12.65q-2.34,6-4.8,10.9a41.13,41.13,0,0,1-4.75,7.7q-4.59,5.59-7.35,5.5t-4.1-4.2a41.44,41.44,0,0,1-1.55-11.3q-.2-7.2.3-15.75t1.5-17.5q1-8.94,2.1-16.65a69.2,69.2,0,0,1-3.9,7.8,49.57,49.57,0,0,1-4.8,6.95,30.15,30.15,0,0,1-5.75,5.4,21.47,21.47,0,0,1-6.75,3.25q-5.1,1.31-8.25-.7a12.2,12.2,0,0,1-4.75-6,31.4,31.4,0,0,1-2-9.2,76.37,76.37,0,0,1-.1-10.25,71.67,71.67,0,0,1,1.1-9.2,44.72,44.72,0,0,1,1.5-6.05c.2-.46.79-.83,1.75-1.1a10,10,0,0,1,3-.35,8.65,8.65,0,0,1,2.65.45C645.52,322.85,645.78,323.25,645.58,323.78Z" transform="translate(-166.1 -228.67)" /><path id="G" d="M714.58,329.38a9.37,9.37,0,0,0-4.2,3.05,18.07,18.07,0,0,0-2.7,4.8,22.32,22.32,0,0,0-1.3,5.45,19.22,19.22,0,0,0,0,5,8.15,8.15,0,0,0,1.35,3.55,2.3,2.3,0,0,0,2.6.95c1.4-.26,2.79-1.3,4.15-3.1a44,44,0,0,0,3.85-6.1c1.2-2.27,2.27-4.53,3.2-6.8s1.7-4,2.3-5.3a5,5,0,0,1,2.35-2.55,4.8,4.8,0,0,1,2.6-.35,5,5,0,0,1,2.1.8q.86.6.75.9c0,.2,0,.67,0,1.4s-.08,1.65-.15,2.75-.15,2.32-.25,3.65-.18,2.67-.25,4c-.27,3.2-.53,6.77-.8,10.7q4.8-4,10.15-8.95t10-9a1.44,1.44,0,0,1,1.15-.45,1.83,1.83,0,0,1,1.15.55,1.44,1.44,0,0,1,.45,1.2,1.77,1.77,0,0,1-.55,1.2l-5.05,4.45-5.65,5q-2.89,2.61-5.9,5.2c-2,1.73-3.93,3.37-5.8,4.9q-.2,8.5-1.1,17.55a151.63,151.63,0,0,1-2.9,18.05,123.88,123.88,0,0,1-5.25,17.5,81.5,81.5,0,0,1-8,15.8,64.66,64.66,0,0,1-11.4,13.1,52.67,52.67,0,0,1-15.3,9.3,28.09,28.09,0,0,1-12.8,2.3,16.26,16.26,0,0,1-9.5-3.7,15.57,15.57,0,0,1-4.9-8.85q-1.2-5.65,1-13.05a60,60,0,0,1,8.25-16.25,106.78,106.78,0,0,1,16.85-18.55q9.4-8.5,19.1-16.65t19.6-16.25c.07-3.26.1-6.45.1-9.55v-9.05c-.86,2-1.76,4-2.7,6.1a55.2,55.2,0,0,1-3.15,6,43.38,43.38,0,0,1-3.9,5.5,23,23,0,0,1-5,4.5c-2.6,1.74-4.86,2.28-6.8,1.65a7.72,7.72,0,0,1-4.5-4.1,17.9,17.9,0,0,1-1.7-7.7,24,24,0,0,1,1.7-9.2,26.17,26.17,0,0,1,5.7-8.7,24,24,0,0,1,10.3-6.05,1.4,1.4,0,0,1,1.25.2,2,2,0,0,1,.75,1.1,1.34,1.34,0,0,1-.2,1.25A1.92,1.92,0,0,1,714.58,329.38Zm9.1,31.5q-5.7,4.71-11.5,9.45t-11.3,9.45q-5.49,4.71-10.55,9.3t-9.25,8.8a85.89,85.89,0,0,0-11.9,14.7,51,51,0,0,0-6,13.15,24.37,24.37,0,0,0-.8,10.7,12.66,12.66,0,0,0,3.75,7.3,12.42,12.42,0,0,0,7.75,3A25,25,0,0,0,685,444.48a48.9,48.9,0,0,0,13.8-8.3,54.54,54.54,0,0,0,10.15-11.65,66.92,66.92,0,0,0,7-14.15,114.29,114.29,0,0,0,4.35-15.85,154.39,154.39,0,0,0,2.4-16.8Q723.38,369.18,723.68,360.88Z" transform="translate(-166.1 -228.67)" /><path id="H2" d="M750.48,363q-.19-5.19-.3-13.8t.3-19.1q.4-10.5,1.45-22.1a221.43,221.43,0,0,1,3.25-22.8,153,153,0,0,1,5.7-21.15,67.42,67.42,0,0,1,8.65-17.1,33.93,33.93,0,0,1,12.3-10.75q7.15-3.6,16.55-2,5.8,1,8,5.4c1.5,2.94,2.1,6.63,1.8,11.1a61.46,61.46,0,0,1-3.2,15,146.7,146.7,0,0,1-6.95,17.1q-4.2,8.81-9.3,17.45t-10.3,15.9a137.52,137.52,0,0,1-10.05,12.55,39.31,39.31,0,0,1-8.45,7.4,1.31,1.31,0,0,1-1.3-.1c.07,3.14.13,6.07.2,8.8s.17,5.27.3,7.6q1-2.5,2.25-5.35a47.09,47.09,0,0,1,2.75-5.35,31,31,0,0,1,3.1-4.35,9.48,9.48,0,0,1,3.35-2.6,4.39,4.39,0,0,1,3.55,0,8.85,8.85,0,0,1,3.6,3.45q1.1,1.69,1.2,5.6a89.58,89.58,0,0,1-.3,9.15q-.4,5.25-1.1,11.25t-1.3,11.9q-.6,5.91-.8,11.2a44.64,44.64,0,0,0,.45,9.05,10.3,10.3,0,0,0,2.35,5.5c1.13,1.17,2.77,1.35,4.9.55q2.7-1,5.7-5.7a85,85,0,0,0,6-11.4q3-6.7,5.8-14.55t5.2-15.05q2.35-7.2,4.1-12.9t2.65-8.2a1.71,1.71,0,0,1,1-.75,1.81,1.81,0,0,1,1.25.15,1.73,1.73,0,0,1,.75,1.1,1.92,1.92,0,0,1-.15,1.3c-.6,1.74-1.5,4.58-2.7,8.55s-2.62,8.45-4.25,13.45-3.43,10.2-5.4,15.6-4,10.38-6.2,14.95a71,71,0,0,1-6.7,11.55q-3.45,4.69-6.85,5.4-4.2.9-6.65-1.05a11.32,11.32,0,0,1-3.6-5.75,32.48,32.48,0,0,1-1.2-9.1q0-5.3.4-11.15t1.3-11.8c.57-4,1-7.66,1.45-11.1s.68-6.47.85-9.1a14.47,14.47,0,0,0-.45-5.75q-1.1-3-2.55-3.15c-1-.1-2,.44-3.1,1.6a22,22,0,0,0-3.25,4.8c-1.07,2-2.08,4.12-3.05,6.25s-1.8,4.17-2.5,6.1-1.22,3.37-1.55,4.3l.1.9c0,.4-.47.74-1.4,1a18.94,18.94,0,0,1-3.1.6,16.18,16.18,0,0,1-3.15.1C751,363.52,750.48,363.31,750.48,363Zm8.5-30.1a34.35,34.35,0,0,0,7.55-6.85,142.91,142.91,0,0,0,9.2-11.8q4.85-6.84,9.65-15t8.85-16.4a155.1,155.1,0,0,0,6.85-16.1,71.06,71.06,0,0,0,3.65-14.1q.85-6.25-.7-10.3a7.52,7.52,0,0,0-6.25-4.85q-8.89-1.39-15.25,2.3a30.77,30.77,0,0,0-10.75,11,66.72,66.72,0,0,0-7,17.25,158.27,158.27,0,0,0-4.05,21.05q-1.39,11.1-1.8,22.5t-.3,21.5Z" transform="translate(-166.1 -228.67)" /><path id="T2" d="M834.48,271.28q-.19,1.31-1.1,5.5t-2.3,10.8q9.9-1.9,19.6-3.85t18.45-3.3q8.75-1.35,16.2-1.8a55.63,55.63,0,0,1,13,.55,18.84,18.84,0,0,1,8.85,3.75,10.41,10.41,0,0,1,3.6,7.75,1.61,1.61,0,0,1-.5,1.25,1.72,1.72,0,0,1-1.2.45,1.67,1.67,0,0,1-1.7-1.8,7.23,7.23,0,0,0-3.35-6.05,19.16,19.16,0,0,0-8.45-2.6,61.62,61.62,0,0,0-12.55.2q-7.24.75-15.7,2.15t-17.9,3.35q-9.45,2-19.15,3.75c-.33,1.54-1,4.5-1.95,8.9s-2.12,9.74-3.45,16-2.78,13.22-4.35,20.85-3.13,15.49-4.7,23.55-3.07,16.1-4.5,24.1-2.68,15.47-3.75,22.4a177.53,177.53,0,0,0-2.4,22.55q-.1,7.65,1.55,9.65t4.7-.85a47.5,47.5,0,0,0,7-9q3.9-6.15,8.4-14.85t9.1-18.35q4.61-9.65,9-19.5t8-18.3q3.6-8.44,6.2-14.7c1.73-4.16,2.93-7.12,3.6-8.85a1.52,1.52,0,0,1,.85-1,1.66,1.66,0,0,1,1.25-.1,1.52,1.52,0,0,1,1,.85,1.91,1.91,0,0,1,.1,1.35q-1.3,3.3-4.2,10.3t-6.8,16.1q-3.9,9.11-8.55,19.5t-9.55,20.45q-4.9,10.05-9.8,18.9a153.16,153.16,0,0,1-9.2,14.85q-4.31,6-7.85,8.4c-2.37,1.6-4.28,1.45-5.75-.45s-2.4-5.85-2.8-11.85-.1-14.57.9-25.7q.9-10.5,2.45-22.25t3.3-23.5q1.76-11.74,3.65-22.8t3.5-20.15q1.61-9.11,2.75-15.55c.77-4.3,1.32-7.31,1.65-9.05q-13,2.3-25.45,3.55a116,116,0,0,1-22.8.25,48,48,0,0,1-17.8-4.9A21.89,21.89,0,0,1,743,280.28a1.76,1.76,0,0,1,.1-1.3,1.51,1.51,0,0,1,1-.8,1.48,1.48,0,0,1,2.1,1.1,18.75,18.75,0,0,0,5.75,8,27.25,27.25,0,0,0,9.25,4.75,52.18,52.18,0,0,0,12.1,2.05,120,120,0,0,0,14.3-.05q7.6-.45,15.9-1.65t16.8-2.8l3.5-18.7c0-.67.6-1.2,1.8-1.6a13.32,13.32,0,0,1,3.85-.65,9.5,9.5,0,0,1,3.7.6C834.23,269.67,834.68,270.35,834.48,271.28Z" transform="translate(-166.1 -228.67)" /></svg>
                    <Link to="/store/E-Cards" id="enter">create</Link>
                </div>
            </div>
        )
    }
}

export default Enter;
