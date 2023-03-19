import React from 'react';

const DownloadButton = ({ file }) => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop();
    link.click();
  };

  return (
    <button className='btn btn-sm font-normal normal-case font-Lato mt-4' onClick={handleClick}>Download</button>
  );
};

export default DownloadButton;
