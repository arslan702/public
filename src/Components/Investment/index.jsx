// 'use client';

// import { useState } from 'react';

// const navItems = [
//   'Stocks', 'Bonds', 'Treasuries', 'Options', 'Crypto', 'ETFs',
//   'Bond Account', 'High-Yield Cash Account', 'Treasury Account', 'Investment Plans', 'IRAs'
// ];

// const highlightedItems = {
//   'Bond Account': '6.8% YIELD*',
//   'High-Yield Cash Account': '4.1% APY*'
// };

// export default function Investment() {
//   return (
//     <div className="flex flex-wrap md:justify-center md:flex-row flex-col md:items-center  gap-4 p-4 md:text-5xl text-3xl font-serif text-black">
//       {navItems.map((item, index) => (
//         <div key={index} className="flex items-center space-x-2">
//           <span className="whitespace-nowrap">{item}</span>
//           {highlightedItems[item] && (
//             <span className="px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded">
//               {highlightedItems[item]}
//             </span>
//           )}
//           {index < navItems.length - 1 && (
//             <span className="text-gray-400  md:block hidden ">/</span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


'use client';

import { useState } from 'react';

const navItems = [
  'Stocks', 'Bonds', 'Treasuries', 'Options', 'Crypto', 'ETFs',
  'Bond Account', 'High-Yield Cash Account', 'Treasury Account', 'Investment Plans', 'IRAs'
];

const highlightedItems = {
  'Bond Account': '6.8% YIELD*',
  'High-Yield Cash Account': '4.1% APY*'
};

export default function InvestmentNav() {
  return (
    <div className="  flex flex-wrap justify-center items-center gap-4 p-4 md:text-5xl text-3xl font-serif text-black">
      <div className="flex flex-wrap md:justify-center gap-5 md:space-y-4 ">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 md:bg-transparent bg-slate-100 md:p-0 p-3 rounded-md ">
            <span className="">{item}</span>
            {highlightedItems[item] && (
              <span className="px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded">
                {highlightedItems[item]}
              </span>
            )}
            {index < navItems.length - 1 && (
              <span className="hidden md:block text-gray-400">/</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
