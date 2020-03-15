import * as React from 'react';
import { useState, useRef } from 'react';
import { TweenLite, Power3 } from 'gsap';

// Modals
import { GuestPickerModal } from '../modals/GuestPickerModal';

export const HeaderCard = () => {
  // Guest
  const [guestModal, setGuestModal] = useState(false);
  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [infantNumber, setInfantNumber] = useState(0);

  let guestArrow1 = useRef(null);
  let guestArrow2 = useRef(null);

  const calculateGuests = (adultNumber, childrenNumber) => {
    if (adultNumber === 0 && childrenNumber === 0) {
      return 'Guest';
    } else if (adultNumber + childrenNumber == 1) {
      return `${adultNumber + childrenNumber} guest`;
    } else if (adultNumber + childrenNumber > 1) {
      return `${adultNumber + childrenNumber} guests`;
    }
  };

  const calculateInfant = (adultNumber, infantNumber) => {
    if (adultNumber == 0 || infantNumber === 0) {
      return '';
    } else if (infantNumber === 0) {
      return `${infantNumber} infant`;
    } else if (infantNumber > 0) {
      return `${infantNumber} infants`;
    }
  };

  const rotateArrow = () => {
    TweenLite.to(guestArrow1, 0.4, {
      rotation: '360_cw',
      opacity: 0.3,
      ease: Power3.easeOut
    });
  };

  const backRotateArrow = () => {
    TweenLite.to(guestArrow2, 0.4, {
      rotation: '180_cw',
      opacity: 0.3,
      ease: Power3.easeOut
    });
  };

  return (
    <div className='sm:w-full md:w-100 md:pt-8 md:pb-6 md:mt-10 bg-white md:rounded md:shadow-2xl py-4'>
      <div className='mx-6 md:mx-8'>
        <h3
          style={{ fontFamily: 'airbnb-bold' }}
          className='hidden md:inline-block md:text-3xl text-gray-750 leading-tight'>
          Book unique places to <br />
          stay and things to do.
        </h3>
        <form>
          <div className='relative'>
            <label
              style={{ fontFamily: 'airbnb-bold' }}
              className='block mt-5 mb-2 text-xs text-gray-750 uppercase tracking-wider'
              htmlFor='where'>
              Where
            </label>
            <input
              style={{ fontFamily: 'airbnb-book' }}
              className='w-full border border-gray-300 p-2 rounded placeholder-gray-900 tracking-wide'
              type='text'
              id='where'
              placeholder='Anywhere'
            />
          </div>
          <div className='flex flex-wrap items-stretch justify-start'>
            <div className='w-1/2'>
              <label
                style={{ fontFamily: 'airbnb-bold' }}
                className='block mt-5 mb-2 text-xs text-gray-750 uppercase'
                htmlFor='checkin'>
                Check-In
              </label>
              <input
                style={{ fontFamily: 'airbnb-book' }}
                className='pl-2 w-full border border-gray-300 py-3 rounded rounded-r-none placeholder-gray-900 tracking-wide'
                type='text'
                id='checkin'
                placeholder='dd-mm-yyyy'
              />
            </div>
            <div className='w-1/2'>
              <label
                style={{ fontFamily: 'airbnb-bold' }}
                className='block mt-5 mb-2 text-xs uppercase text-gray-750'
                htmlFor='checkout'>
                Check-Out
              </label>
              <input
                style={{ fontFamily: 'airbnb-book' }}
                className='pl-2 w-full border border-gray-300 py-3 rounded rounded-l-none placeholder-gray-900 tracking-wide'
                type='text'
                id='checkout'
                placeholder='dd-mm-yyyy'
              />
            </div>
          </div>
          <div className='relative'>
            <label
              style={{ fontFamily: 'airbnb-bold' }}
              className='block mt-5 mb-2 text-xs uppercase text-gray-750'
              htmlFor='guests'>
              Guests
            </label>
            <div className='inline-block relative w-full'>
              {guestModal ? (
                <button
                  style={{ fontFamily: 'airbnb-book' }}
                  onClick={(e) => {
                    e.preventDefault();
                    rotateArrow();
                    setGuestModal(!guestModal);
                  }}
                  className='appearance-none pl-2 w-full border border-green-850 py-3 text-left rounded placeholder-gray-900 tracking-wide'>
                  {calculateGuests(adultNumber, childrenNumber)}
                  {adultNumber > 0 && infantNumber > 0
                    ? `, ${calculateInfant(adultNumber, infantNumber)}`
                    : null}
                </button>
              ) : (
                <button
                  style={{ fontFamily: 'airbnb-book' }}
                  onClick={(e) => {
                    e.preventDefault();
                    backRotateArrow();
                    setGuestModal(!guestModal);
                  }}
                  className='appearance-none pl-2 w-full border border-gray-300 py-3 text-left rounded placeholder-gray-900 tracking-wide'>
                  {calculateGuests(adultNumber, childrenNumber)}
                  {adultNumber > 0 && infantNumber > 0
                    ? `, ${calculateInfant(adultNumber, infantNumber)}`
                    : null}
                </button>
              )}
              {guestModal ? (
                <div
                  ref={(el) => (guestArrow1 = el)}
                  style={{}}
                  className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                  <svg
                    style={{ fill: '#222222' }}
                    className='h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              ) : (
                <div
                  ref={(el) => (guestArrow2 = el)}
                  style={{}}
                  className='pointer-events-none flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 text-black'>
                  <svg
                    className='h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              )}
            </div>
            {guestModal ? (
              <GuestPickerModal
                incrementAdult={() => setAdultNumber(adultNumber + 1)}
                decrementAdult={() => setAdultNumber(adultNumber - 1)}
                incrementChildren={() => setChildrenNumber(childrenNumber + 1)}
                decrementChildren={() => setChildrenNumber(childrenNumber - 1)}
                incrementInfant={() => setInfantNumber(infantNumber + 1)}
                decrementInfant={() => setInfantNumber(infantNumber - 1)}
                adult={adultNumber}
                children={childrenNumber}
                infant={infantNumber}
                resetNumber={() => {
                  setAdultNumber(0);
                  setChildrenNumber(0);
                  setInfantNumber(0);
                }}
                switchModal={() => setGuestModal(false)}
              />
            ) : null}
          </div>
        </form>
        <div className='w-full flex items-center md:justify-end md:flex-wrap mt-6 rounded-lg'>
          <button className='w-full md:w-auto md:inline-block inline-block py-3 px-6 bg-red-550 rounded text-white font-bold'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
