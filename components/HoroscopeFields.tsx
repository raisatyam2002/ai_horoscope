// export default function HoroscopeFiled({
//   togglePanel,
//   openPanel,
//   fieldState,
//   fieldName,
//   color,
// }: any) {
//   return (
//     <div
//       onClick={() => togglePanel(fieldName)}
//       className="cursor-pointer p-4 rounded-lg mt-4 transition-all duration-200"
//       style={{
//         backgroundColor: openPanel === fieldName ? color : "#4B5563", // Default gray for closed state
//       }}
//     >
//       <h3
//         className={`text-xl ${
//           openPanel != null ? "text-black" : "text-white"
//         } `}
//       >
//         {fieldName.toUpperCase()}
//       </h3>
//       {openPanel === fieldName && (
//         <div className="mt-2 max-h-40 transition-all duration-300 text-black">
//           {fieldState}
//         </div>
//       )}
//     </div>
//   );
// }
