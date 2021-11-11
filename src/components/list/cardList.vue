<template>
    <article class="card-box">
        <div class="card-inner">
            <span class="card-image-box"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" alt=""></span>
            <div class="card-content-box">
                <h2 class="card-title">{{ cards.title }}</h2>
                <h3 class="card-sub-title">{{ cards.subtitle }}</h3>
                <p class="card-content">{{ cards.content }}</p>
                <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
            </div>
        </div>
    </article>
</template>

<script>

export default {
    name: 'CardList',
    
}
</script>

<style lang="scss" scoped>
    .card-box {
        overflow: hidden;
        width: 100%;
        max-width: 300px;
        height: 340px;
        background: ivory;
        border: 1px solid #333;
        border-radius: 10px;
        cursor: pointer;
        .card-inner {
            position: relative;
            height: 100%;
            .card-image-box {
                display: block;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.3s linear 0s;
                }
            }
            .card-content-box {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                background: #fff;
                padding: 16px; 
                transition: all 0.3s linear 0s;
                .card-title {
                    font-size: 18px;
                    padding: 4px 0;
                }
                .card-sub-title {
                    font-size: 14px;
                    color: coral;
                    padding: 2px 0;
                }
                .card-content {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: wrap;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    visibility: hidden;
                    height: 0;
                    margin: 0;
                    font-size: 12px;
                    line-height: 24px;
                    font-weight: 300;
                    transition: all 0.3s linear 0s;
                }
                .post-meta {
                    font-size: 12px;
                }
            }
        }
        &:hover {
            .card-image-box {
                img {
                    transform: scale(1.1);
                    filter: brightness(80%);
                }
            }
            .card-content-box {
                .card-content {
                    height: 80px;
                    visibility: visible;
                }
            }
        }
    }
</style>
