import React, { memo } from 'react';

const HandleResume = (i) => {
  const handleDownload = () => {
    const pdfUrl = '/Usman Haider.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'usman-resume.pdf';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div onClick={handleDownload} className={`${i.rounded == 'full' ? 'w-28 h-28 mobile:w-24 mobile:h-24 micro:w-20 micro:h-20 rounded-full' : 'px-10 py-3 rounded-xl'} text-black bg-white flex justify-center items-center cursor-pointer`}>
      <button className='cursor-pointer'>
        Resume
      </button>
    </div>
  );
};

export default memo(HandleResume)