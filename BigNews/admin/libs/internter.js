(function (w) {
    let baseUrl = "http://localhost:8080/api/v1";
    let bigNews = {
        user_login: baseUrl + '/admin/user/login',//用户登录
        user_info: baseUrl + '/admin/user/info',//用户信息
        user_detail: baseUrl + '/admin/user/detail',//用户详情
        user_edit: baseUrl + '/admin/user/edit',//用户编辑
        category_list: baseUrl + '/admin/category/list',//文章类别查询
        category_add: baseUrl + '/admin/category/add',//文章类别新增
        category_search: baseUrl + '/admin/category/search',//文章类别搜索
        category_edit: baseUrl + '/admin/category/edit',//文章类别编辑
        category_delete: baseUrl + '/admin/category/delete',//文章类别删除
        article_query: baseUrl + '/admin/article/query',//文章搜索
        article_publish: baseUrl + '/admin/article/publish',//文章发布
        article_search: baseUrl + '/admin/article/search',//文章信息查询
        article_edit: baseUrl + '/admin/article/edit',//文章编辑
        article_delete: baseUrl + '/admin/article/delete',//文章删除
        comment_list: baseUrl + '/admin/comment/search',//文章评论列表
        comment_pass: baseUrl + '/admin/comment/pass',//文章评论通过
        comment_reject: baseUrl + '/admin/comment/reject',//文章评论不通过
        comment_delete: baseUrl + '/admin/comment/delete',//文章评论删除
        index_hotpic:baseUrl+"/index/hotpic",//首页焦点图
        index_category: baseUrl+"/index/category",//文章类型
        index_latest:baseUrl+"/index/latest",//最新资讯
        index_rank:baseUrl+"/index/rank",//热门排行
        index_comment:baseUrl+"/index/latest_comment",//最新评论
        index_attention:baseUrl+"/index/attention",//焦点关注
        index_artitle:baseUrl+"/index/article",//文章详细内容
        index_get_comment:baseUrl+"/index/get_comment",//评论列表
        index_post_comment:baseUrl+"/index/post_comment",//发表评论
        index_search:baseUrl+"/index/search",//文章搜索
        countArticle: baseUrl+"/admin/data/article", //文章日新增统计
        countIfon:baseUrl+"/admin/data/info", //获取统计数据
        countCate:baseUrl+"/admin/data/category",//获取统计类别
    };
    w.bigNews = bigNews;
})(window)