import Head from 'next/head'

export default function About(){
  return (<div
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700 p-4"
  >

    <Head>
      <title>About :: SG Construction</title>
    </Head> 

    <h1
      className="text-4xl font-bold m-auto text-neutral-800"
    >About S.G. Construction Company</h1>

    <p>
      <img 
        src='/images/sg_truck.webp' 
        alt='A Ford F350 SG Construction Truck is shown hauling a collapsed ladder' 
        title='SG Construction Truck' 
        className="w-[30rem] float-right ml-4"  
      />
      S.G. Construction is known for their integrity and commitment to quality service. As early as the &apos;60&apos;s we were learning about hard work and Christian values. Those ethics are the foundation of our success. In the &apos;70&apos;s we worked as independent contractors, doing small rural jobs and building a positive name for ourselves. In &apos;89 we became a Butler Builder for Southeast Iowa. By then we had successfully expanded into all phases of commercial and industrial construction. Today, our experience includes a broad range of size, design, and unique construction challenges.
    </p>
    <p>We pride ourselves on understanding our customer&apos;s needs. We provide them with equitable building solutions, and work with them to adhere to their budget and time-frame. Our projects are competitively bid in a number of ways: traditional hard bids, design-build, or by negotiated turn-key process. Regardless of the size, we are committed to providing outstanding quality and service on every job.</p>
    <p>A large amount of our business is derived from repeat customers, and that tells us we are doing many things right. We have forged lasting relationships with many of them that have spanned several decades, and we consider this one of our biggest achievements.</p>
  </div>)
}