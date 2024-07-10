import DSAISignature from '../components/navigation/dsai-signature'

import HomepageNavItem from '../components/navigation/homepage-nav-item'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed bottom-0 right-0 z-10 w-full max-w-5xl items-center justify-end font-mono text-base lg:flex lg:static lg:h-auto lg:w-full lg:bg-none">
        <DSAISignature />
      </div>
      
      <div className="text-6xl font-semibold tracking-wide text-center pointer-events-none p-8">
        CHH Caseworker Allocation
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <HomepageNavItem 
          href='allocations/crs'
          title='View CRS'
          description='View all CRS and their caseloads.'
        />
        <HomepageNavItem 
          href='allocations/settings'
          title='Configure settings'
          description='Make changes to languages, locations and more.'
        />
        <HomepageNavItem 
          href='allocations/generate'
          title='Generate Allocation'
          description='Generate allocations for a newly emplaced batch of supervisees.'
        />
      </div>
    </div>
  )
}
