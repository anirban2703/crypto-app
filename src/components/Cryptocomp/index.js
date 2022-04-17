import React from 'react'
import './cryptocomp.css'


const labelValue = (val) => {
    return Math.abs(Number(val)) >= 1.0e+9
          ? (Math.abs(Number(val)) / 1.0e+9).toFixed(2) + "B"
          : Math.abs(Number(val)) >= 1.0e+6
          ? (Math.abs(Number(val)) / 1.0e+6).toFixed(2) + "M"
          : Math.abs(Number(val)) >= 1.0e+3
          ? (Math.abs(Number(val)) / 1.0e+3).toFixed(2) + "K"
          : (Number(val).toFixed(2)) + ' ' ;}

const Cryptocomp = ({ coin, loading }) => {
  console.log(coin)
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
  <tr key={coin.id} className='crypto-container'>
    <td className="serial">
      <td className="rank">{coin.rank}</td>
      <td className="name">{coin.name}<small className="symbol">{coin.symbol}</small></td>
      
    </td>

    <tr className="description">
      <td className='price'>{labelValue(coin.priceUsd)}</td>
      <td className="marketcap">{labelValue(coin.marketCapUsd)}</td>
      <td className="supply">{labelValue(coin.supply)}</td>
     
        { labelValue(coin.changePercent24Hr) < 0 ?
               <td className="change red">{labelValue(coin.changePercent24Hr)}%</td>
             : <td className="change green">{labelValue(coin.changePercent24Hr)}%</td>        
        }
    </tr>
  </tr> 
  )
}

export default Cryptocomp


