import Head from 'next/head'
import Image from 'next/image'
// import detectEthereumProvider from '@metamask/detect-provider'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Nav from '../components/nav';
import NftDetails from '../components/details';
export default function Home() {
  return (
    <div className='w-full h-full'>
      <Nav/>
      <NftDetails/>
      <Footer/>
    </div>
  )
}
