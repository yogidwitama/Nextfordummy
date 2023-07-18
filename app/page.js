// fetching data

// 1. Server side rendering
// 2. Static site generator (DEFAULT NECT)
// 3. Incremental static generation (ISR)

// async function Page({ params }) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`,
//     {next: {revalidate:10}}
//   );
//   const data = await res.json();
BR
//   return (
//     <div className="grid grid-cols-6 gap-x-6 gap-y-3">
//       <div className="col-span-full space-y-3 lg:col-span-4">
//         <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
//           {data.title}
//         </h1>
//         <p className="font-medium text-gray-500">{data.body}</p>
//       </div>
//     </div>
//   )
// }

// export default Page;


/////////////////////////////////
// metadata
// 1. Static Metadata
// 2. Dynamic Metadata

// static
// export const metadata ={
//   title: 'Home'
// }
// // output should be:
// // <head>
// // <title>Home</title>
// // </head>

// export default function Page(){
//   return(
//     <h1>
//       My Normal page static metadata
//     </h1>
//   )
// }

// dynamic
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(paramas.id);
  return { title: product.title }
}

// output should be:
{/* <head>
  <title>
    My Unique product
  </title>
</head> */}

export default function Page() {
  return (
    <h1>
      My normal page with dynamic metadata
    </h1>
  )
}