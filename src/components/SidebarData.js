import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Price',
        path: '/price',
        icon: <BiIcons.BiBitcoin/>,
        cName: 'nav-text'
    },
    {
        title: 'Remaining Coins',
        path: '/remaining',
        icon: <BiIcons.BiCoinStack />,
        cName: 'nav-text'
    },
    {
        title: 'Google Searches',
        path: '/searches',
        icon: <FaIcons.FaGoogle />,
        cName: 'nav-text'
    },
    {
        title: 'Difficulty Adjustment',
        path: '/difficulty',
        icon: <GiIcons.GiDiamondHard />,
        cName: 'nav-text'
    },
]