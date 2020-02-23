<template>
<div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <!-- <img :src="commentInfo.user.avatar" alt=""> -->
        <span>{{commentInfo.list[0].user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.list[0].content}}</p>
        <div class="info-other">
          <span class="date">{{commentInfo.list[0].created | showDate}}</span>
          <span>{{commentInfo.list[0].style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.list[0].images" :key="index">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {formatDate} from "../../../common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
    }
  },
  filters: {
		  showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
  },



}
</script>

<style>

</style>
