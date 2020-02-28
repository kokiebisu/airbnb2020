import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';

// Dependencies
import styled from 'styled-components';

// Loading
import Skeleton from 'react-loading-skeleton';
import PulseLoader from 'react-spinners/PulseLoader';

// GraphQL
import { gql } from 'apollo-boost';

// Components
import { ExploreHeader } from '../../components/layout/ExploreHeader';
import { ImagePanel } from '../../components/presentational/ImagePanel';

import { Footer } from '../../components/layout/Footer';

import { KeepInMind } from '../../components/containers/KeepInMind';
import { MoreHomes } from '../../components/containers/MoreHomes';

import { CheckInCard } from '../../components/presentational/CheckInCard';

import { AmenityCard } from '../../components/presentational/AmenityCard';
import { SleepingArrangements } from '../../components/containers/SleepingArrangements';

// Wrapper
import { DetailSectionOverflow } from '../../components/wrapper/DetailSectionOverflow';
import { DetailSection } from '../../components/wrapper/DetailSection';

// Containers
import { ToDoNear } from '../../components/containers/ToDoNear';
import { MoreLocations } from '../../components/containers/MoreLocations';

import { NextPage } from 'next';

// Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';
const detail2 = require('../../../public/img/high/staydetail2.jpg');
const detail3 = require('../../../public/img/high/staydetail3.jpg');
const detail4 = require('../../../public/img/high/staydetail4.jpg');
const detail5 = require('../../../public/img/high/staydetail5.jpg');

const GET_ADVENTURE = gql`
  query Adventure($id: ID!) {
    adventure(where: { id: $id }) {
      title
      period
      cost
      country
      img
    }
  }
`;

const id: NextPage = () => {
  const router = useRouter();
  const { loading, data } = useQuery(GET_ADVENTURE, {
    variables: {
      id: router.query.id
    }
  });
  return (
    <>
      <Head>
        {loading ? (
          <title>Vacation Rentals, Homes, Experiences & Places</title>
        ) : (
          data && <title>{data.adventure.name}</title>
        )}

        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width '
        />
        <link rel='icon' type='image/x-icon' href='/img/high/favicon.ico' />
      </Head>
      <ExploreHeader type='stay' />

      <div className='px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap'>
        <div className='w-full flex flex-col-reverse lg:flex-col'>
          <div className='w-full py-5'>
            {loading ? (
              <Skeleton height={30} width={350} />
            ) : (
              data && (
                <h3
                  style={{ fontFamily: 'airbnb-medium' }}
                  className='text-3xl text-gray-850'>
                  {data.adventure.name}
                </h3>
              )
            )}

            <div className='flex items-center justify-between'>
              {loading ? (
                <Skeleton height={20} width={500} />
              ) : (
                data && (
                  <div className='flex items-center justify-start flex-wrap'>
                    <div>
                      <svg
                        style={{ fill: '#E61E4D', marginBottom: 1 }}
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3 w-3'
                        viewBox='0 0 37.286 37.287'>
                        <g>
                          <path
                            d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
    c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
    c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
    c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
    c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
    C37.425,15.013,37.226,15.808,36.683,16.339z'
                          />
                        </g>
                      </svg>
                    </div>

                    <span className='text-gray-650'>&nbsp;·&nbsp;</span>

                    <span className='text-gray-650'>&nbsp;·&nbsp;</span>
                    <a
                      style={{ fontFamily: 'airbnb-medium' }}
                      className='text-sm text-gray-650 underline'
                      href=''>
                      {data.adventure.street}
                    </a>
                  </div>
                )
              )}
              <div className='hidden lg:inline-block flex items-start justify-start'>
                <div className='flex items-center pr-2'>
                  <div className='flex items-center justify-start pl-2'>
                    <div>
                      <svg
                        className='h-3 w-3'
                        style={{ fill: '#484848' }}
                        viewBox='0 0 512 512.00578'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='m507.523438 148.890625-138.667969-144c-4.523438-4.691406-11.457031-6.164063-17.492188-3.734375-6.058593 2.453125-10.027343 8.320312-10.027343 14.847656v69.335938h-5.332032c-114.6875 0-208 93.3125-208 208v32c0 7.421875 5.226563 13.609375 12.457032 15.296875 1.175781.296875 2.347656.425781 3.519531.425781 6.039062 0 11.820312-3.542969 14.613281-9.109375 29.996094-60.011719 90.304688-97.28125 157.398438-97.28125h25.34375v69.332031c0 6.53125 3.96875 12.398438 10.027343 14.828125 5.996094 2.453125 12.96875.960938 17.492188-3.734375l138.667969-144c5.972656-6.207031 5.972656-15.976562 0-22.207031zm0 0' />
                        <path d='m448.003906 512.003906h-384c-35.285156 0-63.99999975-28.710937-63.99999975-64v-298.664062c0-35.285156 28.71484375-64 63.99999975-64h64c11.796875 0 21.332032 9.535156 21.332032 21.332031s-9.535157 21.332031-21.332032 21.332031h-64c-11.777344 0-21.335937 9.558594-21.335937 21.335938v298.664062c0 11.777344 9.558593 21.335938 21.335937 21.335938h384c11.773438 0 21.332032-9.558594 21.332032-21.335938v-170.664062c0-11.796875 9.535156-21.335938 21.332031-21.335938 11.800781 0 21.335937 9.539063 21.335937 21.335938v170.664062c0 35.289063-28.714844 64-64 64zm0 0' />
                      </svg>
                    </div>
                    <p
                      style={{ fontFamily: 'airbnb-medium' }}
                      className='pl-2 text-sm text-gray-850 underline'>
                      Share
                    </p>
                  </div>
                  <div className='flex items-center justify-start pl-2'>
                    <div>
                      <svg
                        className='h-3 w-3'
                        style={{ fill: '#484848', marginTop: 1 }}
                        viewBox='0 0 512.001 512'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0' />
                      </svg>
                    </div>
                    <p
                      style={{ fontFamily: 'airbnb-medium' }}
                      className='pl-2 text-sm text-gray-850 underline'>
                      Save
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-0'>
            {loading ? (
              <div className='w-full lg:w-1/2 h-12 lg:h-57v relative rounded border-r-4 border-white'>
                <SSkeletonPulse1 />
              </div>
            ) : (
              data && (
                <ImagePanel
                  img1={data.adventure}
                  img2={detail2}
                  img3={detail3}
                  img4={detail4}
                  img5={detail5}
                />
              )
            )}
          </div>
        </div>
        <div className='w-full lg:w-7/12 '>
          <div className='flex items-center justify-between border-b border-gray-200 mt-4'>
            <div className='flex justify-start w-9/12 py-4'>
              <div className='mt-4 flex items-start justify-center'>
                <div className='flex flex-col '>
                  {loading ? (
                    <Skeleton height={30} width={100} />
                  ) : (
                    data && (
                      <h3
                        style={{ fontFamily: 'airbnb-medium' }}
                        className='text-md lg:text-2xl text-gray-850 leading-none'>
                        placeholder
                      </h3>
                    )
                  )}
                  {loading ? (
                    <Skeleton height={20} width={200} />
                  ) : (
                    data && (
                      <div
                        style={{ fontFamily: 'airbnb-book' }}
                        className='text-gray-750 pt-1 pb-3 flex justify-start items-start flex-wrap'>
                        <div className='mr-4'>
                          <p>placeholder</p>
                        </div>
                        <div className='mr-4'>
                          <p></p>
                        </div>
                        <div className='mr-4'>
                          <p></p>
                        </div>
                        <div className='mr-4'>
                          <p></p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className='flex justify-end items-start w-3/12'>
              {loading ? (
                <Skeleton circle={true} height={60} width={60} />
              ) : (
                data && (
                  <img
                    className='h-16 w-16 rounded-full'
                    src={data.adventure.img}
                  />
                )
              )}
            </div>
          </div>
          <div className='my-6 border-b border-gray-300'>
            {loading ? (
              <div className='w-full'>
                <SSkeletonPulse1 />
              </div>
            ) : (
              data && <h1> hello</h1>
            )}
          </div>
          {loading ? (
            <div className='flex justify-center items-center w-full py-20'>
              <PulseLoader size={10} color={'#008489'} />
            </div>
          ) : (
            data && (
              <>
                <div className='border-b border-gray-300'>
                  <div className='my-8'>
                    <div className='my-5'>
                      <button>
                        <div className='flex items-center justify-start'>
                          <p
                            className=''
                            style={{ fontFamily: 'airbnb-medium' }}>
                            Any questions for the host?
                          </p>
                        </div>
                      </button>
                    </div>
                    <div className='mt-10 mb-16'>
                      <a
                        className='py-3 px-6 border border-black rounded-lg'
                        style={{ fontFamily: 'airbnb-medium' }}
                        href=''>
                        Contact host
                      </a>
                    </div>
                  </div>
                </div>
                <DetailSectionOverflow title='Sleeping arrangements'>
                  <SleepingArrangements />
                </DetailSectionOverflow>
                <DetailSection title='Amenities'>
                  <div className='flex items-start justify-start flex-wrap'>
                    <AmenityCard type='wifi' title='Wifi' />
                    <AmenityCard
                      type='laptop'
                      title='Laptop-friendly workspace'
                    />
                    <AmenityCard type='kitchen' title='Kitchen' />
                    <AmenityCard type='iron' title='Iron' />
                  </div>
                  <div className='mt-10 mb-8'>
                    <a
                      style={{ fontFamily: 'airbnb-medium' }}
                      className='py-3 px-6 rounded-xl border border-black '>
                      Show all 32 amenities
                    </a>
                  </div>
                </DetailSection>
              </>
            )
          )}
        </div>
        <div className='lg:w-5/12 lg:h-100r'>
          <CheckInCard loading={loading} />
        </div>
        <div className='lg:w-5/12 lg:h-80v'>
          <CheckInCard loading={loading} />
        </div>
        <KeepInMind />
        <DetailSectionOverflow title='More places to stay'>
          <MoreHomes />
        </DetailSectionOverflow>
        <DetailSectionOverflow title='Things to do nearby'>
          <ToDoNear />
        </DetailSectionOverflow>
        <DetailSectionOverflow title='Explore other options in and around Penafiel'>
          <MoreLocations />
        </DetailSectionOverflow>
        ) )}
      </div>
      <Footer />
    </>
  );
};

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonPulse1 = styled(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;

export default id;
