import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//   return (
//     // <div class="flex flex-col">
//     //   <div class="-m-1.5 overflow-x-auto">
//     //     <div class="p-1.5 min-w-full inline-block align-middle">
//     //       <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
//     //         <div class="py-3 px-4">
//     //           <div class="relative max-w-xs">
//     //             <label class="sr-only">Search</label>
//     //             <input
//     //               type="text"
//     //               name="hs-table-with-pagination-search"
//     //               id="hs-table-with-pagination-search"
//     //               class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
//     //               placeholder="Search for items"
//     //             />
//     //             <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
//     //               <svg
//     //                 class="h-4 w-4 text-gray-400"
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //                 width="24"
//     //                 height="24"
//     //                 viewBox="0 0 24 24"
//     //                 fill="none"
//     //                 stroke="currentColor"
//     //                 stroke-width="2"
//     //                 stroke-linecap="round"
//     //                 stroke-linejoin="round"
//     //               >
//     //                 <circle cx="11" cy="11" r="8" />
//     //                 <path d="m21 21-4.3-4.3" />
//     //               </svg>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div class="overflow-hidden">
//     //           <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//     //             <thead class="bg-gray-50 dark:bg-gray-700">
//     //               <tr>
//     //                 <th scope="col" class="py-3 px-4 pe-0">
//     //                   <div class="flex items-center h-5">
//     //                     <input
//     //                       id="hs-table-pagination-checkbox-all"
//     //                       type="checkbox"
//     //                       class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//     //                     />
//     //                     <label
//     //                       for="hs-table-pagination-checkbox-all"
//     //                       class="sr-only"
//     //                     >
//     //                       Checkbox
//     //                     </label>
//     //                   </div>
//     //                 </th>
//     //                 <th
//     //                   scope="col"
//     //                   class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
//     //                 >
//     //                   Name
//     //                 </th>
//     //                 <th
//     //                   scope="col"
//     //                   class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
//     //                 >
//     //                   Age
//     //                 </th>
//     //                 <th
//     //                   scope="col"
//     //                   class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
//     //                 >
//     //                   Address
//     //                 </th>
//     //                 <th
//     //                   scope="col"
//     //                   class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
//     //                 >
//     //                   Action
//     //                 </th>
//     //               </tr>
//     //             </thead>
//     //             <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
//     //               <tr>
//     //                 <td class="py-3 ps-4">
//     //                   <div class="flex items-center h-5">
//     //                     <input
//     //                       id="hs-table-pagination-checkbox-1"
//     //                       type="checkbox"
//     //                       class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//     //                     />
//     //                     <label
//     //                       for="hs-table-pagination-checkbox-1"
//     //                       class="sr-only"
//     //                     >
//     //                       Checkbox
//     //                     </label>
//     //                   </div>
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//     //                   John Brown
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   45
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   New York No. 1 Lake Park
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//     //                   <button
//     //                     type="button"
//     //                     class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //                   >
//     //                     Delete
//     //                   </button>
//     //                 </td>
//     //               </tr>

//     //               <tr>
//     //                 <td class="py-3 ps-4">
//     //                   <div class="flex items-center h-5">
//     //                     <input
//     //                       id="hs-table-pagination-checkbox-2"
//     //                       type="checkbox"
//     //                       class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//     //                     />
//     //                     <label
//     //                       for="hs-table-pagination-checkbox-2"
//     //                       class="sr-only"
//     //                     >
//     //                       Checkbox
//     //                     </label>
//     //                   </div>
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//     //                   Jim Green
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   27
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   London No. 1 Lake Park
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//     //                   <button
//     //                     type="button"
//     //                     class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //                   >
//     //                     Delete
//     //                   </button>
//     //                 </td>
//     //               </tr>

//     //               <tr>
//     //                 <td class="py-3 ps-4">
//     //                   <div class="flex items-center h-5">
//     //                     <input
//     //                       id="hs-table-pagination-checkbox-3"
//     //                       type="checkbox"
//     //                       class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//     //                     />
//     //                     <label
//     //                       for="hs-table-pagination-checkbox-3"
//     //                       class="sr-only"
//     //                     >
//     //                       Checkbox
//     //                     </label>
//     //                   </div>
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//     //                   Joe Black
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   31
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   Sidney No. 1 Lake Park
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//     //                   <button
//     //                     type="button"
//     //                     class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //                   >
//     //                     Delete
//     //                   </button>
//     //                 </td>
//     //               </tr>

//     //               <tr>
//     //                 <td class="py-3 ps-4">
//     //                   <div class="flex items-center h-5">
//     //                     <input
//     //                       id="hs-table-pagination-checkbox-4"
//     //                       type="checkbox"
//     //                       class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//     //                     />
//     //                     <label
//     //                       for="hs-table-pagination-checkbox-4"
//     //                       class="sr-only"
//     //                     >
//     //                       Checkbox
//     //                     </label>
//     //                   </div>
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//     //                   Edward King
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   16
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   LA No. 1 Lake Park
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//     //                   <button
//     //                     type="button"
//     //                     class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //                   >
//     //                     Delete
//     //                   </button>
//     //                 </td>
//     //               </tr>

//     //               <tr>
//     //                 <td class="py-3 ps-4">
//     //                   <div class="flex items-center h-5">
//     //                     <input
//     //                       id="hs-table-pagination-checkbox-5"
//     //                       type="checkbox"
//     //                       class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//     //                     />
//     //                     <label
//     //                       for="hs-table-pagination-checkbox-5"
//     //                       class="sr-only"
//     //                     >
//     //                       Checkbox
//     //                     </label>
//     //                   </div>
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
//     //                   Jim Red
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   45
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
//     //                   Melbourne No. 1 Lake Park
//     //                 </td>
//     //                 <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//     //                   <button
//     //                     type="button"
//     //                     class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //                   >
//     //                     Delete
//     //                   </button>
//     //                 </td>
//     //               </tr>
//     //             </tbody>
//     //           </table>
//     //         </div>
//     //         <div class="py-1 px-4">
//     //           <nav class="flex items-center space-x-1">
//     //             <button
//     //               type="button"
//     //               class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //             >
//     //               <span aria-hidden="true">«</span>
//     //               <span class="sr-only">Previous</span>
//     //             </button>
//     //             <button
//     //               type="button"
//     //               class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
//     //               aria-current="page"
//     //             >
//     //               1
//     //             </button>
//     //             <button
//     //               type="button"
//     //               class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
//     //             >
//     //               2
//     //             </button>
//     //             <button
//     //               type="button"
//     //               class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
//     //             >
//     //               3
//     //             </button>
//     //             <button
//     //               type="button"
//     //               class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//     //             >
//     //               <span class="sr-only">Next</span>
//     //               <span aria-hidden="true">»</span>
//     //             </button>
//     //           </nav>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div class="flex min-h-screen items-center justify-center bg-white">
//       <div class="p-6 overflow-scroll px-0">
//         <table class="w-full min-w-max table-auto text-left">
//           <thead>
//             <tr>
//               <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
//                 <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
//                   Transaction
//                 </p>
//               </th>
//               <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
//                 <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
//                   Amount
//                 </p>
//               </th>
//               <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
//                 <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
//                   Date
//                 </p>
//               </th>
//               <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
//                 <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
//                   Status
//                 </p>
//               </th>
//               <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
//                 <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
//                   Account
//                 </p>
//               </th>
//               <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
//                 <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <img
//                     src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
//                     alt="Spotify"
//                     class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                   />
//                   <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
//                     Spotify
//                   </p>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   $2,500
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   Wed 3:00pm
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="w-max">
//                   <div
//                     class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md"
//                     style="opacity: 1;"
//                   >
//                     <span class="">paid</span>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
//                     <img
//                       src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
//                       alt="visa"
//                       class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
//                     />
//                   </div>
//                   <div class="flex flex-col">
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
//                       visa
//                     </p>
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
//                       06/2026
//                     </p>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <button
//                   class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
//                   type="button"
//                 >
//                   <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       class="h-4 w-4"
//                     >
//                       <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
//                     </svg>
//                   </span>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <img
//                     src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg"
//                     alt="Amazon"
//                     class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                   />
//                   <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
//                     Amazon
//                   </p>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   $5,000
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   Wed 1:00pm
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="w-max">
//                   <div
//                     class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md"
//                     style="opacity: 1;"
//                   >
//                     <span class="">paid</span>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
//                     <img
//                       src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
//                       alt="master-card"
//                       class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
//                     />
//                   </div>
//                   <div class="flex flex-col">
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
//                       master card
//                     </p>
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
//                       06/2026
//                     </p>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <button
//                   class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
//                   type="button"
//                 >
//                   <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       class="h-4 w-4"
//                     >
//                       <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
//                     </svg>
//                   </span>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <img
//                     src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg"
//                     alt="Pinterest"
//                     class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                   />
//                   <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
//                     Pinterest
//                   </p>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   $3,400
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   Mon 7:40pm
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="w-max">
//                   <div
//                     class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-amber-500/20 text-amber-900 py-1 px-2 text-xs rounded-md"
//                     style="opacity: 1;"
//                   >
//                     <span class="">pending</span>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
//                     <img
//                       src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
//                       alt="master-card"
//                       class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
//                     />
//                   </div>
//                   <div class="flex flex-col">
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
//                       master card
//                     </p>
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
//                       06/2026
//                     </p>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <button
//                   class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
//                   type="button"
//                 >
//                   <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       class="h-4 w-4"
//                     >
//                       <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
//                     </svg>
//                   </span>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <img
//                     src="https://docs.material-tailwind.com/img/logos/logo-google.svg"
//                     alt="Google"
//                     class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                   />
//                   <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
//                     Google
//                   </p>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   $1,000
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   Wed 5:00pm
//                 </p>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="w-max">
//                   <div
//                     class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md"
//                     style="opacity: 1;"
//                   >
//                     <span class="">paid</span>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <div class="flex items-center gap-3">
//                   <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
//                     <img
//                       src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
//                       alt="visa"
//                       class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
//                     />
//                   </div>
//                   <div class="flex flex-col">
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
//                       visa
//                     </p>
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
//                       06/2026
//                     </p>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4 border-b border-blue-gray-50">
//                 <button
//                   class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
//                   type="button"
//                 >
//                   <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       class="h-4 w-4"
//                     >
//                       <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
//                     </svg>
//                   </span>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td class="p-4">
//                 <div class="flex items-center gap-3">
//                   <img
//                     src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg"
//                     alt="netflix"
//                     class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                   />
//                   <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
//                     netflix
//                   </p>
//                 </div>
//               </td>
//               <td class="p-4">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   $14,000
//                 </p>
//               </td>
//               <td class="p-4">
//                 <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
//                   Wed 3:30am
//                 </p>
//               </td>
//               <td class="p-4">
//                 <div class="w-max">
//                   <div
//                     class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-1 px-2 text-xs rounded-md"
//                     style="opacity: 1;"
//                   >
//                     <span class="">cancelled</span>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4">
//                 <div class="flex items-center gap-3">
//                   <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
//                     <img
//                       src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
//                       alt="visa"
//                       class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
//                     />
//                   </div>
//                   <div class="flex flex-col">
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
//                       visa
//                     </p>
//                     <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
//                       06/2026
//                     </p>
//                   </div>
//                 </div>
//               </td>
//               <td class="p-4">
//                 <button
//                   class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
//                   type="button"
//                 >
//                   <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       aria-hidden="true"
//                       class="h-4 w-4"
//                     >
//                       <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
//                     </svg>
//                   </span>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <div class="w-full pt-5 px-4 mb-8 mx-auto ">
//           <div class="text-sm text-gray-700 py-1">
//             Made with{" "}
//             <a
//               class="text-gray-700 font-semibold"
//               href="https://www.material-tailwind.com/?ref=tailwindcomponents"
//               target="_blank"
//             >
//               Material Tailwind
//             </a>{" "}
//             by{" "}
//             <a
//               href="https://www.creative-tim.com?ref=tailwindcomponents"
//               class="text-gray-700 font-semibold"
//               target="_blank"
//             >
//               {" "}
//               Creative Tim
//             </a>
//             .
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Transaction = ({
  logoSrc,
  companyName,
  amount,
  date,
  status,
  cardLogoSrc,
}) => (
  <tr>
    <td className="p-4 border-b border-blue-gray-50 w-[1/6]">
      <div className="flex items-center gap-3">
        <img
          src={logoSrc}
          alt={companyName}
          className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
        />
        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
          {companyName}
        </p>
      </div>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
        {amount}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
        {date}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <div className="w-max">
        <div
          className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${
            status === "paid"
              ? "bg-green-500/20 text-green-900"
              : status === "pending"
              ? "bg-amber-500/20 text-amber-900"
              : "bg-red-500/20 text-red-900"
          } py-1 px-2 text-xs rounded-md`}
          style={{ opacity: 1 }}
        >
          <span className="">{status}</span>
        </div>
      </div>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <div className="flex items-center gap-3">
        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
          <img
            src={cardLogoSrc}
            alt="Card Logo"
            className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
          />
        </div>
        <div className="flex flex-col">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
            {companyName}
          </p>
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
            06/2026
          </p>
        </div>
      </div>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <button
        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
          </svg>
        </span>
      </button>
    </td>
  </tr>
);

const Orders = () => {
  const [orders, setorders] = useState([]);

  const [formData, setFormData] = useState({
    customer: "",
    product: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name == "quantity") {
      setFormData({ ...formData, [name]: parseInt(value) });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend API
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/place_order/", formData)
      .then((response) => {
        alert("Customer product added successfully");
        // Optionally, you can reset the form fields after successful submission
        setFormData({
          customer: "",
          product: "",
          quantity: "",
        });
      })
      .catch((error) => {
        console.error("Error adding customer product:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/list_orders/");
        setorders(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-[#3339b4] font-serif p-2 text-center md:text-3xl sm:text-2xl text-lg md:py-6 sm:py-3">
        Orders
      </h1>

      <h2>Add Customer Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="customer">Customer:</label>
        <input
          type="text"
          id="customer"
          name="customer"
          value={formData.customer}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>
          Product:
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option value="IC Lock Cover">IC Lock Cover</option>
            <option value="Security Metre Wire">Security Metre Wire</option>
            <option value="Compression Spring">Compression Spring</option>
            <option value="Torsion Spring">Torsion Spring</option>
            <option value="Caplock">Caplock</option>
            <option value="Debring">Debring</option>
          </select>
        </label>
        <br />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Add Customer Product</button>
      </form>

      <div className="p-6 overflow-scroll px-0  bg-white">
        <table className="  w min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Customer
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Product
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Quantity
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Ordered Date
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Delivered Date
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Price
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Payment Status
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                  Account status
                </p>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(orders).map(([_, order]) => (
              <Transaction
                logoSrc="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                companyName={order.customer}
                amount={order.amount}
                date={order.delivered_date}
                status={order.payment_status}
                cardLogoSrc="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
              />
            ))}
            {/* <Transaction
              logoSrc="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
              companyName="Spotify"
              amount="$2,500"
              date="Wed 3:00pm"
              status="paid"
              cardLogoSrc="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
            /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
