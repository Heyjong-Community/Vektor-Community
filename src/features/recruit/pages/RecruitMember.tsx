function RecruitMember() {
  return (
    <div className='bg-[#F8FAFC] h-screen w-full'>
      <div className='max-w-2xl mx-auto py-10 flex flex-col gap-6'>
        <section id='header' className='bg-white rounded-2xl p-8 border border-gray-200 shadow-xs'>
          {/* TOP */}
          <div className='flex items-center justify-between'>
            <div className='flex items-stretch gap-2'>
              <div className='size-10 rounded-md bg-blue-800 flex items-center justify-center'></div>
              <div className=''>
                <h4 className='font-semibold text-base text-black'>Vektor Community</h4>
                <p className='text-xs text-gray-500'>Learn • Connect • Impact</p>
              </div>
            </div>
            <div className=''>
              <span className='py-1 px-3 border border-[#BFDBFE] rounded-full bg-[#EFF6FF] text-xs text-blue-700 flex items-center gap-2'>
                <div className='size-1 rounded-full bg-blue-700'></div>
                Open Recruitment • Bacth II 2026
              </span>
            </div>
          </div>
          {/* TITLE */}
          <div className='mt-4'>
            <h1 className='text-black font-bold text-3xl'>Join Our Community & Grow Together</h1>
            <p className='text-sm text-gray-600'>
              Collaborate with designers, engineers, and storytellers building real-world projects. Complete your
              registration below to join our upcoming cohort.
            </p>
          </div>
          {/* FOOT */}
          <div className='mt-4 border-t border-gray-200 pt-4 flex items-center gap-6'>
            <span className='text-xs text-gray-500'>
              Deadline: <span className='text-black font-semibold'>15 Desember 2026</span>
            </span>
            <span className='text-xs text-gray-500'>
              Est. time: <span className='text-black font-semibold'>3mins</span>
            </span>
          </div>
        </section>
        <section id='step' className='bg-white rounded-2xl py-4 px-6 border border-gray-200 shadow-xs'></section>
        <section id='personal' className='bg-white rounded-2xl p-8 border border-gray-200 shadow-xs'></section>
      </div>
    </div>
  );
}

export default RecruitMember;
