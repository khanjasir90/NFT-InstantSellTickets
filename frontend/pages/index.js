import Head from 'next/head'
import Image from 'next/image'
// import detectEthereumProvider from '@metamask/detect-provider'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Nav from '../components/nav';
import Card from '../components/card';
import Footer from '../components/footer';
export default function Home() {
  return (
    <div className='w-full h-full'>
      <Nav />
      <div className='flex-col'>
        <div className='flex justify-center mt-10'>
          <div className='text-3xl font-bold'>
            <p>Explore, Buy and Sell Event Tickets</p>
          </div>
        </div>
      </div>
      <div className='flex h-96 mt-10 ml-10 mr-10 border rounded-3xl bg-indigo-300'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}
