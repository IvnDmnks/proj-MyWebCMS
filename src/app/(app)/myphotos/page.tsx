'use client';

export default function MyPhotos() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl p-4 m-4 font-bold text-center border border-bgSecondary rounded-lg bg-bgSecondary'>My Photos
      </h1>
      <div className='overflow-x-auto whitespace-nowrap p-4'>
        <div className='flex space-x-8 justify-center'>
        </div>
      </div>
    </div>
  );
}