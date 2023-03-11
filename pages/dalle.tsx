'use client'

import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai'; 
import { ArrowPathIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { FormEvent } from 'react';

/// image generator function

function OpenAIDALLEImageGenerator() {


  const [prompt, setPrompt] = useState('');
  const [imageURLs, setImageURLs] = useState<(string | undefined)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    try {
      const imageUrls = [];
      for (let i = 0; i < 5; i++) {
        const result = await openai.createImage({
          prompt,
          n: 1,
          size: '256x256',
        });
        imageUrls.push(result.data.data[0].url);
      }
      setImageURLs(imageUrls);
    } catch (error) {
      console.error(error);
      setErrorMessage('try again');
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className=' xl:flex  md:flex p-2'>
        {imageURLs.map((imageUrl, index) => (
          <img key={index} src={imageUrl}
            alt={`${prompt} ${index}`}
            style={{ width: '256px', height: '256px' }}
            className=" mb-2 rounded-xl p-2"
          />
        ))}
        {errorMessage && <p>{errorMessage}</p>}
      </div>


      <footer className="fixed bottom-0 w-full bg-white px-2">
        <div className="p-2 space-x-5 " >
          <div className='border border-blue-300 rounded-lg hover:border-blue-500 flex-1 '>
            <div >
              <div >

                <input type="text" value={prompt} 
                onChange={(event) => setPrompt(event.target.value)}
                
                  className='bg-transparent outline-none pl-3 pb-1 h-10 w-[70%] '
                  placeholder='a cat drinking coffee'
                />

                <button 
                
                onClick={handleSubmit} disabled={isLoading}
                  className='text-blue-400 px-4 py-2 rounded font-bold hover:opacity-50 
                  cursor-pointer float-right clear-both  '

                >
                  {isLoading ? <ArrowPathIcon className="h-6 w-6 animate-spin"/> : <PaperAirplaneIcon className="h-6 w-6" />}

                </button>
              </div>
              

            </div>
          </div>
        </div>
      </footer>
    </>


  );
}

export default OpenAIDALLEImageGenerator;

