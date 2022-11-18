import Image from 'next/image'

function profile() {
    return (
        <div className='flex-col w-full h-full'>
            
            <div className='relative w-full'>
                <Image
                    className='object-cover w-full h-80'
                    src="/cover.jfif"
                    height={300}
                    width={1240}
                />
                <div className='absolute top-48 left-0 pl-2 pr-2 pt-2 pb-1 ml-9 h-auto w-auto bg-white rounded-lg shadow-lg'>
                    <Image
                        className="  
                        object-cover                                                                      
                        rounded-lg                        
                        m-auto"
                        src="/lufy.jpg"
                        height={160}
                        width={160}                        
                    />
                </div>
                
            </div>
        
            <div className="flex-col mt-10 ml-9">
                <p className='font-bold text-2xl'>MOAZZAM</p>
                <div className='flex'>
                    <p className='text-slate-500'>ethereum id</p>
                    <p className='text-slate-400 ml-5'>Joined September 2021</p>
                </div>                
            </div>
            <div className='flex-1 flex ml-9 mt-1'>
            <div className='flex space-x-8 text-xl decoration-8 cursor-pointer ml-76 mt-5 text-slate-500'>
              <p className='hover:text-black'>
                Collected
              </p>
              <p className='hover:text-black'>
                Created
              </p>
              <p className='hover:text-black'>
                Favorited
              </p>              
            </div>
            <br/>
          </div>

            
        </div>
        // <div class="modal fade" id="imageUploadModal" tabindex="-1" role="dialog" aria-labelledby="imageUploadModalLabel" aria-hidden="true">
        //     <div class="modal-dialog" role="document">
        //         <div class="modal-content">
        //             <div class="modal-header">
        //                 <h5 class="modal-title" id="imageUploadModalLabel">Upload a new profile picture</h5><button class="close" type="button" data-dismiss="modal" aria-label="Close"></button><span aria-hidden="true">&times;</span>
        //     </div>
        //     <div class="modal-body"><input id="filePhoto" type="file" name="filePhoto" />
        //         <div class="imagePreviewContainer"><img id="imagePreview" /></div>
        //     </div>
        //     <div class="modal-footer"><button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button><button class="btn btn-primary" id="imageUploadButton" type="button">Save</button></div>
        // </div>
//     </div>
// </div>
    )
}

export default profile;