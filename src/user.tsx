import React, {useEffect, useState} from "react";

const User = ({item, i}: {item: any, i: any}) => {
    const [alreadyFollowed, setAlreadyFollowed] = useState(false);
    const [unfollow, setUnfollow] = useState(true);
    const [hasBeenBlocked, setHasBeenBlocked] = useState(false);
    const [followingFromStorage, setFollowingFromStorage] = useState(false);
    const [blockedFromStorage, setBlockedFromStorage] = useState(false);
    sessionStorage.setItem('users', JSON.stringify(item));
   function OnClickFollow () {
       sessionStorage.setItem('item', JSON.stringify(item));
       setAlreadyFollowed(true)
       setUnfollow(false)
   }


    function OnClickUnfollow () {
        setAlreadyFollowed(false)
        setUnfollow(true)
        setFollowingFromStorage(false)
        sessionStorage.removeItem('item');
    }
    function OnClickBlock () {
        sessionStorage.setItem('blockedUser', JSON.stringify(item));
        setHasBeenBlocked(true)
        setUnfollow(true)
    }
    useEffect(() => {
        const following =  JSON.parse(sessionStorage.getItem('item') || '{}');
        const blockedUser =  JSON.parse(sessionStorage.getItem('blockedUser') || '{}');
        // setFollowingFromStorage(following);
        if (item.account_id === following.account_id) {
            setFollowingFromStorage(true)
            setAlreadyFollowed(true)
            setUnfollow(false)
        }
        if (item.account_id === blockedUser.account_id) {
            setBlockedFromStorage(true)
            setHasBeenBlocked(true)
            setUnfollow(true)
        }
    }, [item]);

    return (
        <>
            <div className='container items-center w-11/12 lg:w-9/12 p-2'>
                <>
                    <details className={`${!hasBeenBlocked && !blockedFromStorage? 'cursor-pointer' : 'cursor-not-allowed'}`}>
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
                                    <p className='mb-3'>{item.reputation}</p>
                                    <p className={`${!unfollow || followingFromStorage && !blockedFromStorage? 'text-gray-400 text-base mb-3' : 'hidden'}`}>FOLLOWING</p>
                                    <p className={`${hasBeenBlocked || blockedFromStorage? 'text-gray-400 text-base' : 'hidden'}`}>BLOCKED</p>
                                    <hr className="w-[100px] text-center border border-teal-600 mt-1 mb-4"></hr>
                                </div>
                            </div>

                        </summary>
                        <div className={`${!hasBeenBlocked || !blockedFromStorage? 'flex w-12/12 gap-1 justify-center' : 'hidden'}`}>
                            {!alreadyFollowed  && (
                                <div className={`${!hasBeenBlocked? 'panel text-blue-950 text-center pb-1 lg:p-0 md:p-0 text-blue font-bold' : 'hidden'}`}
                                     onClick={() => { OnClickFollow() } }
                                >
                                    <button className='border border-2 w-[100px] border-teal-600 ' onClick={() => { OnClickFollow() } }>FOLLOW</button>
                                </div>
                            )}
                            {!unfollow  && (
                                <div className="panel  text-blue-950 text-center font-bold pb-1 lg:p-0 md:p-0 place-items-center">
                                    <button className='border border-2 w-[101px] border-teal-600 ' onClick={() => { OnClickUnfollow() } }>UNFOLLOW</button>
                                </div>
                            )}
                            {!hasBeenBlocked  && (
                                <div className="panel text-blue-950 text-center font-bold place-items-center pb-1 lg:p-0 md:p-0">
                                    <button className='border  w-[100px] border-2 border-teal-600 ' onClick={() => { OnClickBlock() } }>BLOCK</button>
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
