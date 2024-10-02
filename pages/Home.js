import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScollCard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)
  const{data : nowPlayingData}= useFetch('/movie/now_playing')
  const{data: topRatedData}= useFetch('/movie/top_rated')
  const{data: topRatedShowsData}= useFetch('tv/top_rated')
  {/* //added manualyy */}
  const{data: genre}= useFetch('/genre/movie/list')

  return (
    <div>
      <BannerHome/>
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movies"} />
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated"} media_type={"movies"} />
      <HorizontalScrollCard data={topRatedShowsData} heading={"Top Rated Shows"} media_type={"Tv"} />
      {/* //added manualyy */}
      <HorizontalScrollCard data={genre} heading={"Movies by Genre"} media_type={"Genre"} />

      
    </div>
  )
}

export default Home
