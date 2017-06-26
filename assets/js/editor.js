/**
 * Created by Administrator on 2017/6/8.
 */

;(function(){

    "use strict";

    let timer_count_seconds = 0;//计时器记录的时间值
    let timer_start_flag = 0;//计时器的开关
    let time_limit = 1000;//触发系列操作的时间阀值
    let timer;//计时器实例

    $(function(){

        let $editor = $("#editor");

        setInterval(function(){
            if(timer_count_seconds >= time_limit && timer_start_flag === 1){
                close_timer();
                update_words_counter();
                save_current_article();
            }
        },1000);

        $editor.on("keydown",function(){
            timer_count_seconds = 0;
            if(timer_start_flag === 0){
                start_timer();
            }
        });

        if(window.localStorage){
            init_novel_db();
            let current_article_content = window.localStorage["novel_article_" + window.localStorage["novel_article_current_flag"]];
            if(current_article_content !== undefined) {
                $editor.val(current_article_content);
                update_words_counter();
            }
    }
        else{
            alert("Your browser doesn' support localStorage.\n你的浏览器不支持H5本地存储。");
        }
    });

    function start_timer(){
        timer_start_flag = 1;
        timer = setInterval(function(){
            timer_count_seconds += 1000;
        },1000);
    }

    function close_timer(){
        timer_start_flag = 0;
        clearInterval(timer);
    }

    function count_words(){
        let $editor = $("#editor");
        return $editor.val().length;
    }

    function update_words_counter(){
        let $word_num = count_words();
        let $word_counter = $("#word_counter");
        if(typeof($word_num) == "number"){
            $word_counter.text($word_num);
        }
    }

    //本地存储部分
    function init_novel_db(){
        if(window.localStorage["novel_article_current_flag"] === undefined) {
            window.localStorage["novel_article_current_flag"] = 0;
        }

    }

    function save_current_article(){
        let $editor = $("#editor");
        window.localStorage["novel_article_" + window.localStorage["novel_article_current_flag"]] = $editor.val();
    }
})();