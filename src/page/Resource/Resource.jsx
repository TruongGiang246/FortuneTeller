import { useState } from 'react';
import './Resource.css'
import { useEffect } from 'react';
function Resource(){

    const [indexVideo, setIndexVideo] = useState(12)
    const videoPLaylist = [
        { title: "Ngày 1. Triết học - Minh triết Dễ hiểu", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 2. Triết học - Con người & Vũ trụ", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 3. Tâm lý học Tổng quát", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 4. Tâm lý học Ứng dụng", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 5. Tâm lý Trị liệu Tổng quát", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 6. Ngành Coaching - Giới thiệu", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 7. Coaching - 7 Kỹ năng & Mô hình Grow", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 8. 7 Mô hình Coaching: Tập trung Giải pháp, Nhận thức - Hành vi, NLP...", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 8+1. Giải đáp các quan niệm Triết học & Kinh nghiệm Coaching", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 8+2. Rèn luyện Chánh niệm & Xả ly, Gia tăng nội lực", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 8+3. Ứng dụng Trí tuệ Nhân tạo trong Tự học & Hành nghề", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 9. Chiêm tinh học Tổng quan", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 10. Hành tinh trong Chiêm tinh học", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 11. 12 Nhà trong Chiêm tinh học", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 12. Thực hành Bản đồ Sao Chiêm tinh học", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 13. Nhập môn Thần số học", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 14. Thần số học - Các Chỉ số quan trọng", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 15: Thần số học - Khám phá chu kỳ cuộc đời qua năm cá nhân", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 17: Ma trận Định mệnh Nhập môn", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 19: DISC Đầy đủ & Chi tiết", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 21: Put It All Together - Tích hợp các công cụ Luận giải", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 22: Put It All Together - Thực hành Tư vấn Coaching", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Ngày 23: Put It All Together - Hiểu mình và Trưởng thành", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Tổng kết & Hỏi - đáp Tất tần tật Con đường phát triển nghề", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" },
        { title: "Talkshow & Bế mạc Hành trình K1 AI Đọc vị 16 tuần", author: "Ngô Duy Kha", img: "https://via.placeholder.com/150" }
      ];
      
      const nextVideo = () => {
        setIndexVideo(indexVideo+1)
      };
    
      const prevVideo = () => {
        if(indexVideo != 1){
            setIndexVideo(indexVideo-1)
        }
        
      };



      const toggleFullscreen = () => {

        const iframe = document.getElementById('player');
        const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
  
    
        if (isFullscreen) {
          // Thoát fullscreen
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          // Vào fullscreen
          if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
          } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
          } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
          } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
          }
        }
      }



    useEffect(()=>{
        const videoList = document.getElementsByClassName('video_current')
        const videoTitle = document.getElementById('videoTitle')
        const videoChannel = document.getElementById('videoChannel')

        for(let i = 0; i < videoList.length; i++){
            videoList[i].addEventListener('click', ()=>{
                handleChooseVid(i);
            })
        }

        function handleChooseVid(index){
            for(let i = 0; i < videoList.length; i++){
                videoList[i].classList.remove('active')
            }
            videoList[index].classList.add('active');
            videoTitle.innerText = videoPLaylist[index].title
            videoChannel.innerText = videoPLaylist[index].author
            setIndexVideo(index+1)
        }

        handleChooseVid(indexVideo-1)
    },[])

    return(    
    <>
    <div class="container mx-auto px-4 py-6">
        {/* <!-- Header --> */}
        <header class="flex flex-col md:flex-row items-center justify-between mb-8">
            <div class="flex items-center mb-4 md:mb-0">
                <div class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-3">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div>
                    <h1 class="text-3xl font-bold gradient-text">Resource</h1>
                    <p class="text-gray-600">Digital resource from Youtube</p>
                </div>
            </div>
            
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <input type="text" id="searchInput" placeholder="Search playlists or videos..." class="bg-white/80 border border-gray-200 rounded-full py-2 px-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-violet-400"/>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                

            </div>
        </header>
        
        {/* <!-- Main Content --> */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Left Column - Player and Current Video --> */}
            <div class="lg:col-span-2">
                {/* <!-- Player Section --> */}
                <div class="glass-effect p-3 sm:p-6 mb-6">
                    <div class="aspect-w-16 aspect-h-9 mb-4">

                        <div onClick={toggleFullscreen} id="player"  class="relative w-full h-0 pb-[56.25%] relative rounded-lg overflow-hidden">
                            {/* <!-- YouTube iframe will be inserted here --> */}
                              <iframe
                                className='iframe_height'
                                src={`https://www.youtube.com/embed?listType=playlist&list=PL9ODuxeNSLJJz3e52Q2jzuXvMmk89GjPb&index=${indexVideo}`} 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                loading="lazy"
                                allowfullscreen>
                            </iframe>
                            <button className="fullscreen-button" onClick={toggleFullscreen}>
                                ⛶
                            </button>
                        </div>

                    </div>
                    
                    <h2 id="videoTitle" class="text-xl font-bold text-gray-800 mb-2">Select a video to play</h2>
                    <p id="videoChannel" class="text-gray-600 mb-4 text-sm">Channel name will appear here</p>

                    {/* <!-- Player Controls --> */}
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <button id="prevBtn" onClick={prevVideo} class="btn-icon text-gray-700 hover:text-violet-600 disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
                                </svg>
                            </button>

                            <button id="nextBtn" onClick={nextVideo} class="btn-icon text-gray-700 hover:text-violet-600 disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path>
                                </svg>
                            </button>
                        </div>

                        
                        <div class="flex items-center space-x-2 mt-2 sm:mt-0 w-full justify-end">
                            <button id="loopBtn" class="btn-icon text-gray-700 hover:text-violet-600 tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>
                                <span class="tooltip-text">Loop</span>
                            </button>
                            <button id="shuffleBtn" class="btn-icon text-gray-700 hover:text-violet-600 tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                                </svg>
                                <span class="tooltip-text">Shuffle</span>
                            </button>
                            <button onClick={toggleFullscreen} id="fullscreenBtn" class="btn-icon text-gray-700 hover:text-violet-600 tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"></path>
                                </svg>
                                <span class="tooltip-text">Fullscreen</span>
                            </button>
                            <button id="likeBtn" class="btn-icon like-btn text-gray-700 hover:text-pink-500 tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                <span class="tooltip-text">Like</span>
                            </button>
                            <button id="shareBtn" class="btn-icon text-gray-700 hover:text-violet-600 tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                </svg>
                                <span class="tooltip-text">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Video Info and Comments Section --> */}
                <div class="glass-effect p-6">
                    {/* <!-- Tabs --> */}
                    <div class="flex border-b border-gray-200 mb-4">
                        <div class="tab active" data-tab="description">Description</div>
                        {/* <div class="tab" data-tab="comments">Comments</div>
                        <div class="tab" data-tab="related">Related</div> */}
                    </div>
                    
                    {/* <!-- Tab Content --> */}
                    <div class="tab-content active" id="description-content">
                        <p id="videoDescription" class="text-gray-700 mb-4">
                            Video description will appear here when you select a video to play.
                        </p>
                        <div class="flex items-center text-sm text-gray-600">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span id="videoPublished">Published date</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div class="tab-content" id="comments-content">
                        <div class="mb-4">
                            <textarea id="commentInput" placeholder="Add a comment..." class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"></textarea>
                            <div class="flex justify-end mt-2">
                                <button id="postCommentBtn" class="bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-lg transition-all">
                                    Post Comment
                                </button>
                            </div>
                        </div>
                        
                        <div id="commentsContainer" class="space-y-4">
                            <div class="text-center text-gray-500 py-8">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <p>No comments yet. Be the first to comment!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-content" id="related-content">
                        <div id="relatedVideosContainer" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="text-center text-gray-500 py-8 col-span-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                                <p>Related videos will appear here when you play a video.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            
            {/* <!-- Right Column - Playlists and Current Playlist --> */}
            <div class="lg:col-span-1">
            {/* <!-- Current Playlist --> */}
            <div class="glass-effect p-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 id="currentPlaylistTitle" class="text-lg font-bold text-gray-800">Current Playlist</h3>
                        <div class="flex items-center">
                            <span id="videoCount" class="text-sm text-gray-600 mr-2">{videoPLaylist.length} videos</span>
                        </div>
                    </div>
                    
                    <div id="currentPlaylistContainer" class="h-[400px] overflow-y-auto custom-scrollbar">
                        {/* <!-- Sample videos in the current playlist --> */}

                        {videoPLaylist.map((video, index)=>(
                        <div class="video_current playlist-item p-3 rounded-lg mb-2 flex items-center cursor-pointer">
                            <div class="w-20 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='320' height='180' fill='%238b5cf6'/%3E%3Ccircle cx='160' cy='90' r='50' fill='%23ec4899' fill-opacity='0.7'/%3E%3C/svg%3E" alt="Thumbnail" class="w-full h-full object-cover"/>
                            </div>
                            <div class="flex-grow min-w-0">
                                <h4 class="text-sm font-medium text-gray-800 truncate">{video.title}</h4>
                                <p class="text-xs text-gray-600 truncate">{video.author}</p>
                            </div>
                            <div class="flex-shrink-0 ml-2">
                                <button class="text-gray-500 hover:text-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>                            
                        ))}






                    </div>                
                </div>



                {/* <!-- Playlist Management --> */}
                <div class="glass-effect p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold text-gray-800">Your Playlists</h3>
                        <button id="createPlaylistBtn" class="btn-icon text-violet-600 hover:text-violet-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                    </div>

                    
                    <h3 class="text-lg font-bold text-gray-800 mb-4">Featured Playlists</h3>
                    
                    <div id="featuredPlaylistsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {/* <!-- Featured Playlists will be loaded here --> */}
                        <div class="playlist-cover aspect-w-16 aspect-h-9 cursor-pointer" data-playlist-id="PLj0L3ZL0ijaTQ4s0nZ3eyJdx7k3q6IpBh">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%238b5cf6'/%3E%3Cpath d='M400 225m-150 0a150 150 0 1 0 300 0a150 150 0 1 0 -300 0' fill='%23ec4899' fill-opacity='0.7'/%3E%3C/svg%3E" alt="Chill Lofi Beats" class="w-full h-full object-cover"/>
                            <div class="playlist-cover-info">
                                <h4 class="text-white font-bold">Chill Lofi Beats</h4>
                                <p class="text-white/80 text-sm">Perfect for studying and relaxing</p>
                            </div>
                        </div>
                        
                        <div class="playlist-cover aspect-w-16 aspect-h-9 cursor-pointer" data-playlist-id="PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%2364748b'/%3E%3Cpath d='M200 225a200 200 0 1 0 400 0a200 200 0 1 0 -400 0' fill='%2338bdf8' fill-opacity='0.6'/%3E%3C/svg%3E" alt="Top Hits 2023" class="w-full h-full object-cover"/>
                            <div class="playlist-cover-info">
                                <h4 class="text-white font-bold">Top Hits 2023</h4>
                                <p class="text-white/80 text-sm">The most popular songs right now</p>
                            </div>
                        </div>
                        
                        <div class="playlist-cover aspect-w-16 aspect-h-9 cursor-pointer" data-playlist-id="PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23475569'/%3E%3Cpath d='M0 225 L800 225 L400 50 Z' fill='%23f472b6' fill-opacity='0.7'/%3E%3C/svg%3E" alt="Classic Rock Essentials" class="w-full h-full object-cover"/>
                            <div class="playlist-cover-info">
                                <h4 class="text-white font-bold">Classic Rock Essentials</h4>
                                <p class="text-white/80 text-sm">Timeless rock hits from the legends</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                


            </div>
        </div>
    </div>
    
    {/* <!-- Fullscreen Player --> */}
    <div id="fullscreenPlayer" class="fullscreen-player">
        <div id="fullscreenPlayerContainer" class="player-container"></div>
        <button id="exitFullscreenBtn" class="exit-fullscreen btn-icon text-white hover:text-violet-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
    
    {/* <!-- Create Playlist Modal --> */}
    <div id="createPlaylistModal" class="modal">
        <div class="modal-content">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Create New Playlist</h3>
                <button id="closeCreatePlaylistModal" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="mb-4">
                <label for="playlistNameInput" class="block text-gray-700 mb-2">Playlist Name</label>
                <input type="text" id="playlistNameInput" placeholder="Enter playlist name" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"/>
            </div>
            
            <div class="mb-4">
                <label for="playlistDescriptionInput" class="block text-gray-700 mb-2">Description (optional)</label>
                <textarea id="playlistDescriptionInput" placeholder="Enter playlist description" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none h-24"></textarea>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 mb-2">Privacy</label>
                <div class="flex space-x-4">
                    <label class="flex items-center">
                        <input type="radio" name="privacy" value="public" checked="" class="mr-2 text-violet-600"/>
                        <span>Public</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="privacy" value="private" class="mr-2 text-violet-600"/>
                        <span>Private</span>
                    </label>
                </div>
            </div>
            
            <div class="flex justify-end">
                <button id="savePlaylistBtn" class="gradient-bg text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
                    Create Playlist
                </button>
            </div>
        </div>
    </div>
    
    {/* <!-- Add to Playlist Modal --> */}
    <div id="addToPlaylistModal" class="modal">
        <div class="modal-content">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Add to Playlist</h3>
                <button id="closeAddToPlaylistModal" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div id="userPlaylistsCheckboxes" class="mb-4 max-h-60 overflow-y-auto custom-scrollbar">
                <div class="text-center text-gray-500 py-4">
                    <p>Login to see your playlists</p>
                </div>
            </div>
            
            <div class="flex justify-between">
                <button id="createNewPlaylistBtn" class="text-violet-600 font-medium py-2 px-4 rounded-lg transition-all flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Create New
                </button>
                <button id="addToSelectedPlaylistBtn" class="gradient-bg text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
                    Add
                </button>
            </div>
        </div>
    </div>
    
    {/* <!-- Share Modal --> */}
    <div id="shareModal" class="modal">
        <div class="modal-content">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Share</h3>
                <button id="closeShareModal" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="mb-4">
                <label for="shareUrlInput" class="block text-gray-700 mb-2">Share URL</label>
                <div class="flex">
                    <input type="text" id="shareUrlInput" readonly="" class="w-full p-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-400"/>
                    <button id="copyShareUrlBtn" class="gradient-bg text-white font-medium py-2 px-4 rounded-r-lg transition-all">
                        Copy
                    </button>
                </div>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 mb-2">Share on Social Media</label>
                <div class="flex space-x-4">
                    <button class="bg-[#1877f2] text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                        </svg>
                    </button>
                    <button class="bg-[#1da1f2] text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.30897 14.5762 4.80701 15.3031 5.48771 15.824C6.16841 16.345 6.99621 16.6337 7.85199 16.6499C6.17801 17.9779 4.1929 18.6996 2.14999 18.6969C1.80699 18.6969 1.46499 18.6789 1.12799 18.6419C3.18925 20.0337 5.57941 20.7748 8.02999 20.7729C15.882 20.7729 20.089 14.2569 20.089 8.57193C20.089 8.39193 20.084 8.21193 20.076 8.03393C20.8949 7.4419 21.6016 6.71595 22.163 5.89093L22.162 5.65593Z"></path>
                        </svg>
                    </button>
                    <button class="bg-[#25D366] text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633C16.7769 3.96818 14.5729 3.04193 12.2589 3.01264C9.94484 2.98335 7.72131 3.85449 6.05241 5.47067C4.38351 7.08685 3.42415 9.29256 3.41813 11.606C3.41211 13.9194 4.36002 16.1304 6.02001 17.756L6.64001 18.336L5.49001 22.376L9.66001 21.256L10.223 21.836C11.7458 22.8296 13.5311 23.3464 15.3529 23.3228C17.1747 23.2991 18.9451 22.8361 20.4421 21.9107C21.9391 20.9853 23.1065 19.6354 23.7947 18.0465C24.4829 16.4576 24.6611 14.7003 24.3059 13.0066C23.9507 11.313 23.0783 9.76587 21.803 8.55232C20.5277 7.33877 18.9132 6.51431 17.173 6.18692C15.4328 5.85953 13.6364 6.04543 12.003 6.71901L12 6.72001C10.1988 7.46645 8.69733 8.79147 7.74372 10.4878C6.79011 12.1841 6.43308 14.1572 6.73001 16.082C7.02694 18.0068 7.95934 19.7638 9.37001 21.082L8.44001 21.378C6.56134 19.6089 5.45472 17.1901 5.33906 14.6261C5.2234 12.0621 6.10906 9.55313 7.79001 7.63001L7.82001 7.60001C9.6043 5.58317 12.0675 4.42273 14.6651 4.36C17.2627 4.29726 19.7761 5.33774 21.65 7.22001C23.5196 9.09818 24.5206 11.6375 24.4091 14.2383C24.2977 16.8392 23.0842 19.2846 21.07 21.02C18.9621 22.8809 16.1894 23.8176 13.3651 23.6128C10.5409 23.408 7.93494 22.0783 6.14001 19.92L6.10001 19.87L5.82001 19.63L5.81001 19.62L5.49001 22.37L9.66001 21.25L9.67001 21.24L9.93001 21.47L9.95001 21.49C11.9887 23.0375 14.4808 23.7535 16.9693 23.4937C19.4578 23.2339 21.7651 22.0169 23.4 20.1L23.5 20C25.094 18.1038 25.9089 15.6808 25.7566 13.2286C25.6043 10.7765 24.4976 8.47306 22.7 6.80001C21.0112 5.16248 18.7969 4.18523 16.4446 4.0318C14.0924 3.87837 11.7452 4.55686 9.85001 5.94001L9.80001 5.98001C7.73958 7.42635 6.38616 9.66126 6.08906 12.1275C5.79195 14.5938 6.58258 17.0609 8.26001 18.93L8.30001 18.98L8.44001 19.12V19.13L8.44001 21.378L6.02001 17.756C4.36002 16.1304 3.41211 13.9194 3.41813 11.606C3.42415 9.29256 4.38351 7.08685 6.05241 5.47067C7.72131 3.85449 9.94484 2.98335 12.2589 3.01264C14.5729 3.04193 16.7769 3.96818 18.403 5.633Z"></path>
                        </svg>
                    </button>
                    <button class="bg-[#0077b5] text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div>
                <label class="block text-gray-700 mb-2">Embed</label>
                <textarea id="embedCodeInput" readonly="" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none h-24"></textarea>
            </div>
        </div>
    </div>
    
    {/* <!-- Login Modal --> */}
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Login</h3>
                <button id="closeLoginModal" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="mb-6">
                <button id="googleLoginBtn" class="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-gray-800 font-medium hover:bg-gray-50 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                    </svg>
                    Continue with Google
                </button>
            </div>
            
            <div class="relative flex items-center justify-center mb-6">
                <div class="border-t border-gray-300 w-full"></div>
                <div class="bg-white px-4 text-sm text-gray-500">or</div>
                <div class="border-t border-gray-300 w-full"></div>
            </div>
            
            <div class="mb-4">
                <label for="emailInput" class="block text-gray-700 mb-2">Email</label>
                <input type="email" id="emailInput" placeholder="Enter your email" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"/>
            </div>
            
            <div class="mb-6">
                <label for="passwordInput" class="block text-gray-700 mb-2">Password</label>
                <input type="password" id="passwordInput" placeholder="Enter your password" class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"/>
                <div class="flex justify-end mt-1">
                    <a href="#" class="text-sm text-violet-600 hover:text-violet-800">Forgot password?</a>
                </div>
            </div>
            
            <div class="flex justify-between items-center">
                <div class="text-sm">
                    Don't have an account? <a href="#" id="showSignupBtn" class="text-violet-600 hover:text-violet-800 font-medium">Sign up</a>
                </div>
                <button id="loginSubmitBtn" class="gradient-bg text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
                    Login
                </button>
            </div>
        </div>
    </div>
    
    {/* <!-- Notification --> */}
    <div id="notification" class="floating-notification">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span id="notificationMessage">Notification message</span>
        </div>
    </div>

    </>
        

    )
}
export default Resource