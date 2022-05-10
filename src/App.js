import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cryptocomp from './components/Cryptocomp';
import ReactPaginate from 'react-paginate';

const api = 'https://api.coincap.io/v2/assets'

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(0)


  const coinsPerPage = 20
  const pageVisited = pageNumber * coinsPerPage
  

 useEffect(() => { 
     axios.get(api)
     .then( resp =>{
         setCoins(resp.data.data)
         setLoading()
        //  console.log(resp.data.data
        //  setbgColor()
        {

        }
       })
     .catch( err =>{
        console.log(err)
     }) 
  });

  // const setbgColor = () => {
  //   let content = document.querySelector('#crypto-box');

  //     } 


  const seachCoin = ele => { setSearch(ele.target.value) }

  const filteredSearch = coins.filter( coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  const displayCoins = filteredSearch.slice(pageVisited, pageVisited+coinsPerPage).map( coin => {
      return(
        
          <Cryptocomp key={coin.id}  coin={coin} loading={loading} />
        
      )
     })

   const pageCount = Math.ceil(coins.length / coinsPerPage)

   const changePage = ({ selected }) =>{
      setPageNumber(selected)
   }

  return (
    <div className="App">
       <h1>Crypto App</h1>
       <div className="crypto-search">
         <h2 className="search-txt">Seach Currency</h2>
         <form>
           <input type="text" placeholder='Search' 
           className='crypto-input' onChange={seachCoin}/>
         </form>
       </div>
       <table >
          <tr className='heading-table'>
            <td className='rank-pricing'>
            <th>Rank</th>
            <th>Name</th>
            </td>
           
          <td className='head-description'>
          <th>Price</th>
           <th>MarketCap</th>
           <th>Volume(24H)</th>
           <th>Change(24H)</th>
          </td>
         </tr>
       </table>
       <table className='main-table'>
       {displayCoins}
       </table>
       <ReactPaginate
         previousLabel={'Prev'}
         nextLabel={'Next'}
         pageCount ={pageCount}
         onPageChange={changePage}
         containerClassName={'pag-container'}
         previousLinkClassName={'pag-prevbtn'}
         nextLinkClassName={'pag-nextbtn'}
         activeClassName={'pag-activebtn'}
       />
       
       
    </div>
  );
}

export default App;
