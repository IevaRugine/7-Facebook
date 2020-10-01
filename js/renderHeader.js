

function renderHeader(data) {

    

return `<header class="post-header">
 <a class="avatar-link" href="#">
     <img class="avatar" src="#" alt="User profile picture"></img>    
 <a>
 <div class="post-user">
     <a class="user" href="#">NAME SURNAME</a>
     <div class="timestamp">6h ago</div>
 </div>
 <i class="fa fa-ellipsis-h"></i>
</header>`;
}

export default renderHeader;