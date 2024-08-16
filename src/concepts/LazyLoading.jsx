import { lazy,Suspense, useEffect } from 'react'

const HeavyComponent=lazy(()=>import('./HeavyComponent'));

const Loading = () => {
    
    return (
        <>
      Loading
    </>
  )
}

export const LazyLoadingEg=()=>{
    return (
        <Suspense fallback={<Loading/>}>
            <HeavyComponent/>
        </Suspense>
    )
}