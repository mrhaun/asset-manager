
import React, { useState } from 'react';
import BackButton from '../components/BackButton';

export default function MeatSort() {
    const [ pounds , setPounds ] = useState(); 
    const [ grams , setGrams ] = useState(); 
    const [ bags , setbags ] = useState(); 
    const [ bagamount , setbagamount ] = useState(); 

    function convertLbs(lb){
        setGrams (lb * 454)
        setPounds (lb);
    }
    function convertbags(numofbags){
        setbagamount(grams / numofbags)
        setbags(numofbags)
    }
    return (


<div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="relative py-6">
    <BackButton url='/' />
  </div>
  <h1 className="mb-5 text-5xl font-bold">meat sort</h1>
  <form>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
    pounds
      </label>
      <input value={pounds} onChange={(e) => convertLbs(e.target.value)} placeholder="bags" className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" type="text" />
    </div>
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">      
    <label className="label">
    bags
      </label>
      <input value={bags} onChange={(e) => convertbags(e.target.value)} placeholder="pounds" className="w-full bg-base-content border border-neutral text-base-200 rounded py-3 px-4 mb-3" type="text" />
    </div>    
    </div>
  </form>
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>amount of meat in lbs {pounds}</th> 
        <th>converted to grams {grams}</th> 
        <th>number of bags {bags}</th> 
        <th>amount in each bag {bagamount}</th>
      </tr>
    </thead> 
    </table>
</div>





        );
}