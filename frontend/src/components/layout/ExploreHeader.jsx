import * as React from 'react';
import { useRef } from 'react';
import { TweenLite, Power3 } from 'gsap';
import { SuggestionBox } from './SuggestionBox';

// interface Prop {
//   white: boolean;
//   placeholder: string;
// }

export const ExploreHeader = ({ white }) => {
  const locations = [
    'Barcelona',
    'Tokyo',
    'Los Angeles',
    'Sydney',
    'Paris',
    'Montreal',
    'Toronto',
    'New York',
    'Seattle'
  ];

  let inputbox = useRef(null);
  let suggestionbox = useRef(null);
  let logo = useRef(null);
  let cancel = useRef(null);

  const expandInput = () => {
    if (innerWidth < 720) {
      TweenLite.to(inputbox, 0.4, {
        x: -50,
        ease: Power3.easeIn
      });
      TweenLite.to(suggestionbox, 0.4, {
        x: -50,
        y: 10,
        opacity: 1,
        ease: Power3.easeIn,
        width: '80vw'
      });
      TweenLite.to(logo, 0.3, {
        css: { opacity: 0 },
        ease: Power3.easeIn
      });
      TweenLite.to(cancel, 0.3, {
        css: { opacity: 1 },
        ease: Power3.easeIn,
        delay: 0.3
      });
    } else {
      TweenLite.to(inputbox, 0.4, {
        width: '40vw',
        ease: Power3.easeIn
      });
      TweenLite.to(suggestionbox, 0.4, {
        width: '40vw',
        opacity: 1,
        x: 0,
        y: 10,
        ease: Power3.easeIn
      });
    }
  };
  const shrinkInput = () => {
    if (innerWidth < 720) {
      TweenLite.to(inputbox, 0.4, {
        x: 0,
        ease: Power3.easeIn,
        delay: 0.3
      });
      TweenLite.to(logo, 0.3, {
        css: { opacity: 1, ease: Power3.easeIn },
        delay: 0.4
      });
      TweenLite.to(cancel, 0.3, {
        css: { opacity: 0 },
        ease: Power3.easeIn
      });
      TweenLite.to(suggestionbox, 0.4, {
        opacity: 0,
        width: 480,
        ease: Power3.easeIn
      });
    } else {
      TweenLite.to(inputbox, 0.4, { width: 480, ease: Power3.easeIn });
      TweenLite.to(suggestionbox, 0.4, {
        opacity: 0,
        width: 480,
        ease: Power3.easeIn
      });
    }
  };

  const expandSuggestion = () => {};

  return (
    <>
      {white ? (
        <>
          <div className='w-full flex items-center justify-between relative border-b border-gray-300'>
            <div className='flex items-center justify-start w-full md:w-80p'>
              <div ref={(el) => (logo = el)} className='ml-6 mr-6 md:mr-8 my-5'>
                <a href='/'>
                  <span className='sr-only'>Airbnb</span>
                  <svg
                    viewBox='0 0 1000 1000'
                    role='presentation'
                    aria-hidden='true'
                    focusable='false'
                    className='block'
                    style={{ height: 34, width: 34, fill: '#FF6368' }}>
                    <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
                  </svg>
                </a>
              </div>
              <div className='xl:w-1/2 w-full flex items-center relative'>
                <div
                  id='hoverbox'
                  ref={(el) => (inputbox = el)}
                  className='flex items-center justify-start py-3 pl-4 shadow-md rounded mr-4'>
                  <svg viewBox='0 0 16 16' style={{ height: 18, width: 18 }}>
                    <path d='m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7'></path>
                  </svg>
                  <input
                    onFocus={() => expandInput()}
                    onBlur={() => shrinkInput()}
                    placeholder={`Try "${
                      locations[Math.floor(Math.random() * locations.length)]
                    }"`}
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-gray-750 pl-3 w-80p'></input>
                </div>
                <div
                  ref={(el) => (suggestionbox = el)}
                  style={{ opacity: 0, top: 47, width: '60vw' }}
                  className='top-0 absolute bg-white shadow-xl p-8'>
                  <div className='py-4'>
                    <div>
                      <h3
                        style={{ fontFamily: 'airbnb-bold' }}
                        className='uppercase text-gray-750 text-xs'>
                        Explore Airbnb
                      </h3>
                    </div>
                    <div className='mt-3 w-full h-full'>
                      <SuggestionBox />
                    </div>
                  </div>
                </div>
                <div
                  style={{ right: 20, opacity: 0 }}
                  ref={(el) => (cancel = el)}
                  className='absolute right-0 mx-1'>
                  <h3
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-gray-750 text-sm'>
                    Cancel
                  </h3>
                </div>
              </div>
            </div>
            <nav
              style={{ fontFamily: 'airbnb-medium' }}
              className='md:w-20p hidden xl:block text-gray-750'>
              <div className='flex items-center'>
                <div className='border-transparent border-b-2 hover:border-white py-6 px-1'>
                  <a
                    href='#'
                    className='flex items-center justify-start text-sm mx-2'>
                    <svg
                      className='relative self-center h-3 w-3'
                      style={{ fill: '#484848', right: 5 }}
                      viewBox='0 0 512 512'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0' />
                    </svg>
                    <p>English(CA)</p>
                  </a>
                </div>
                <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                  <a href='#' className='text-sm tracking-wide'>
                    $CAD
                  </a>
                </div>
                <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                  <a
                    href='#'
                    className='text-sm tracking-wide whitespace-no-wrap'>
                    Become a host
                  </a>
                </div>
                <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                  <a href='#' className='text-sm tracking-wide'>
                    Help
                  </a>
                </div>
                <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                  <a
                    href='#'
                    className='text-sm tracking-wide whitespace-no-wrap'>
                    Sign up
                  </a>
                </div>
                <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                  <a
                    href='#'
                    className='text-sm tracking-wide whitespace-no-wrap
                  '>
                    Log in
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </>
      ) : (
        <>
          <div className='bg-black flex items-center justify-between relative'>
            <div className='flex items-center justify-start w-full md:w-1/2'>
              <div className='ml-6 mr-6 md:mr-8 my-5'>
                <a href='/'>
                  <span className='sr-only'>Airbnb</span>
                  <svg
                    viewBox='0 0 1000 1000'
                    role='presentation'
                    aria-hidden='true'
                    focusable='false'
                    className='block'
                    style={{ height: 34, width: 34, fill: 'white' }}>
                    <path d='m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z'></path>
                  </svg>
                </a>
              </div>
              <div className='w-full md:max-w-100 flex items-center justify-start'>
                <div
                  id='hoverbox'
                  className='bg-white flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded'>
                  <svg viewBox='0 0 16 16' style={{ height: 18, width: 18 }}>
                    <path d='m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7'></path>
                  </svg>
                  <p
                    style={{ fontFamily: 'airbnb-bold' }}
                    className='text-gray-650 px-4'>
                    Search
                  </p>
                </div>
              </div>
            </div>
            <nav
              style={{ fontFamily: 'airbnb-medium' }}
              className='hidden xl:block xl:flex items-center justify-around flex-wrap text-gray-750'>
              <div className='border-transparent border-b-2 hover:border-white py-6 px-1'>
                <a
                  href='#'
                  className='flex items-center justify-start text-sm mx-2'>
                  <svg
                    className='relative self-center h-3 w-3'
                    style={{ fill: 'white', right: 5 }}
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0' />
                  </svg>
                  <p
                    style={{ fontFamily: 'airbnb-medium' }}
                    className='text-white'>
                    English(CA)
                  </p>
                </a>
              </div>
              <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                <a
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-white text-sm tracking-wide'>
                  $CAD
                </a>
              </div>
              <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                <a
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-white text-sm tracking-wide'>
                  Become a host
                </a>
              </div>
              <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                <a
                  style={{ fontFamily: 'airbnb-medium' }}
                  href='#'
                  className='text-white text-sm tracking-wide'>
                  Help
                </a>
              </div>
              <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                <a
                  style={{ fontFamily: 'airbnb-medium' }}
                  href='#'
                  className='text-white text-sm tracking-wide'>
                  Sign up
                </a>
              </div>
              <div className='mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1'>
                <a
                  style={{ fontFamily: 'airbnb-medium' }}
                  href='#'
                  className='text-white text-sm tracking-wide'>
                  Log in
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
