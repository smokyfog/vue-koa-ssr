<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item,idx) in menu" :key="idx">
                <i :class="item.type"/>{{item.name}}<span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail">
            <!-- <template v-for="(item,idx) in curdetail" >
                <h4>标题</h4>
                <span>子项</span>
                <span>子项</span>
                <span>子项</span>
            </template> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kind:'',
            menu:[{
                type:'food',
                name:'美食'
            },{
                type:'takeout',
                name:'外卖'
            },
            {
                type:'hotel',
                name:'酒店'
            },{
                type:'takeout',
                name:'外卖'
            },{
                type:'takeout',
                name:'外卖'
            },{
                type:'takeout',
                name:'外卖'
            }]
        }
    },
    computed: {
        curdetail:function(){
            return []
        }
    },
}
</script>

<style lang="css">
    
</style>