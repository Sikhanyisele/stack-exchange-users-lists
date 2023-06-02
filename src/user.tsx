import React, { useState} from "react";

const User = ({item}: {item: any}) => {
    const [alreadyFollowed, setAlreadyFollowed] = useState(false);
    const [unfollow, setUnfollow] = useState(true);
    const [block, setBlock] = useState(false);
    const [hasBeenBlocked, setHasBeenBlocked] = useState(false);
    const [serverError, setServerError] = useState(false);
   function OnClickFollow () {
       setAlreadyFollowed(true)
       // setBlock(true)
       setUnfollow(false)
   }
    function OnClickUnfollow () {
        setAlreadyFollowed(false)
        setBlock(false)
        setUnfollow(true)
    }
    function OnClickBlock () {
        setHasBeenBlocked(true)
        setUnfollow(true)
    }

    return (
        <>
            <div className='container items-center w-8/12 p-2'>
                <>
                    <details className={`${!hasBeenBlocked? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        <summary className='place-content-center '>
                            <div className='place-content-center flex'>
                                <div className='place-items-center'>
                                    <img src={item.profile_image.toLowerCase()} height={100} width={100} alt={''}
                                         className='rounded-lg'/>
                                </div>
                                <div className= {`${!hasBeenBlocked? 'p-2 text-teal-600' : 'p-2 text-gray-400'}`}>
                                    <h4>{item.display_name}</h4>
                                    <br/>
                                    <h6 className='text-gray-400'>Reputation</h6>
                                    <p>{item.reputation}</p>
                                    <p className={`${!unfollow? 'text-gray-400 text-base' : 'hidden'}`}>Following</p>
                                    <p className={`${hasBeenBlocked? 'text-gray-400 text-base' : 'hidden'}`}>Blocked</p>
                                    <hr className="w-[100px] text-center border border-teal-600 mt-1 mb-4"></hr>
                                </div>
                            </div>

                        </summary>
                        <div className={`${!hasBeenBlocked? 'lg:flex block w-12/12 gap-1 ' : 'hidden'}`}>
                            {!alreadyFollowed  && (
                                <div className={`${!hasBeenBlocked? 'panel text-blue-950 text-center pb-1 lg:p-0 md:p-0 text-blue font-bold' : 'hidden'}`}
                                     onClick={() => { OnClickFollow() } }
                                >
                                    <button className='border border-2 w-[145px] border-teal-600 p-1 ' onClick={() => { OnClickFollow() } }>FOLLOW</button>
                                </div>
                            )}
                            {!unfollow  && (
                                <div className="panel text-blue-950 text-center font-bold pb-1 lg:p-0 md:p-0 place-items-center">
                                    <button className='border border-2 w-[145px] border-teal-600 p-1' onClick={() => { OnClickUnfollow() } }>UNFOLLOW</button>
                                </div>
                            )}
                            {!block  && (
                                <div className="panel text-blue-950 text-center font-bold place-items-center pb-1 lg:p-0 md:p-0">
                                    <button className='border  w-[145px] border-2 border-teal-600 p-1' onClick={() => { OnClickBlock() } }>BLOCK</button>
                                </div>
                            )}
                        </div>
                    </details>
                </>
            </div>
        </>
    )
}
export default User;
