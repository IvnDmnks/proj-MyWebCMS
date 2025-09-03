export default function HomePage() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl p-4 m-4 font-bold text-center border border-secondary-color rounded-lg bg-secondary-color'>
        Hi! My name is Iván Domonkos
      </h1>
      <p className='text-2xl p-4 m-4 text-center text-primary-text-color'>
        This is a simple webpoject to show my skills in web development.
      </p>
      <h2>About me:</h2>
      <p>
        I&apos;m a Hungarian Computer Science Engineer student at University of Technology and Economics of Budapest.
      </p>
      <p>Sometimes I tell the computer what to do and sometimes it listenst to me.</p>
      <p>
        Anyway, if you want to check the weather here you can do it:
        <a href='/weather' className='hover:text-secondary-text-color'>
          <u>It&apos;s my own weather API site.</u>
        </a>
      </p>
    </div>
  );
}
{
  //TODO: Responsive design for ALL pages
  //TODO: Add more content
  //! Need good ideas
  //TODO: hobbys, exc: music, sports, etc.
  //TODO: Food content
}