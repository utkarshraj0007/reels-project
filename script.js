

const reels = [
  {
    ismuted:true,
    username: "rahul_dev",
    likeCount: 12450,
    isLiked: false,
    commentCount: 340,
    caption: "Late night coding session",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 210,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "travelwithananya",
    likeCount: 54321,
    isLiked: true,
    commentCount: 1200,
    caption: "Sunset at the mountains",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 980,
    isFollowed: false
  },
  {
    ismuted:true,
    username: "fitness_raj",
    likeCount: 22340,
    isLiked: false,
    commentCount: 540,
    caption: "Never skip leg day",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 430,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "foodie_diary",
    likeCount: 33450,
    isLiked: true,
    commentCount: 890,
    caption: "Street food in Delhi",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/35.jpg",
    shareCount: 610,
    isFollowed: false
  },
  {
    ismuted:true,
    username: "techwitharjun",
    likeCount: 14560,
    isLiked: false,
    commentCount: 210,
    caption: "Top 5 VS Code extensions",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/45.jpg",
    shareCount: 150,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "dancewithme",
    likeCount: 45670,
    isLiked: true,
    commentCount: 1340,
    caption: "Trending reel dance challenge",
    video: "./reels/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/48.jpg",
    shareCount: 1020,
    isFollowed: false
  },
  {
    ismuted:true,
    username: "nature_frames",
    likeCount: 28900,
    isLiked: false,
    commentCount: 460,
    caption: "Morning vibes in the forest",
    video: "./reels/video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/52.jpg",
    shareCount: 320,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "gaming_zone",
    likeCount: 37800,
    isLiked: true,
    commentCount: 760,
    caption: "Clutch moment in Valorant",
    video: "./reels/video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/61.jpg",
    shareCount: 540,
    isFollowed: false
  },
  {
    ismuted:true,
    username: "makeup_magic",
    likeCount: 41200,
    isLiked: false,
    commentCount: 980,
    caption: "5 minute glow makeup tutorial",
    video: "./reels/video9.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/66.jpg",
    shareCount: 860,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "studywithme",
    likeCount: 16780,
    isLiked: false,
    commentCount: 300,
    caption: "Productive study routine",
    video: "./reels/video10.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/72.jpg",
    shareCount: 190,
    isFollowed: false
  }
];


var allReels = document.querySelector('.all-reels')

// sum = '';
// reels.forEach(function(elem,idx) {
//     sum = sum + `<div class="reel">
//                     <video  autoplay loop muted src="${elem.video}"></video>
//                     <div class="bottom">
//                         <div class="user">
//                             <img src="${elem.userprofile}" alt="">
//                             <h4>Sarthack.Sharma</h4>
//                             <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
//                         </div>
//                         <h3>${elem.caption}</h3>
//                     </div>
//                     <div class="right">
//                         <div id=${idx} class="like">
//                             <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</i></h4>
//                             <h6>${elem.likeCount}</h6>
//                         </div>
//                         <div class="Comment">
//                             <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></i></h4>
//                             <h6>${elem.commentCount}</h6>
//                         </div>
//                         <div class="Share">
//                             <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
//                             <h6>${elem.shareCount}</h6>
//                         </div>
//                         <div class="menu">
//                             <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></i></h4>
//                              <h6></h6>
//                         </div>
//                     </div>
//                 </div>  `
    
// })

// allReels.innerHTML = sum


function addData () {
  sum = ''
reels.forEach(function(elem,idx) {     
    sum = sum + `<div class="reel">
                    <video  autoplay loop ${elem.ismuted ? 'muted' : ''}  src="${elem.video}"></video>
                    <div class="mute" id=${idx}>
                    ${elem.ismuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="Comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="Share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></i></h4>
                             <h6></h6>
                        </div>
                    </div>
                </div>  `
    
})

allReels.innerHTML = sum
}

addData();

allReels.addEventListener('click',function(dets) {

if(dets.target.className == 'like') {
   if(!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
   } else {
        reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
   }

   addData()
}

 if(dets.target.className == 'follow') {
    if(!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
       reels[dets.target.id].isFollowed = false
    }

    addData()
}

 if(dets.target.className == 'mute') {
    if(!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true
    } else {
      reels[dets.target.id].ismuted = false
    }
    addData()
}

})








































//  if(!reels[dets.target.id].isLiked ) {
//      reels[dets.target.id].likeCount++
//   reels[dets.target.id].isLiked = true
//    }
//    else{
//       reels[dets.target.id].likeCount--
//      reels[dets.target.id].isLiked = false
//    }
  