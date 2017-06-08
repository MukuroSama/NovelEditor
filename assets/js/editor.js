/**
 * Created by Administrator on 2017/6/8.
 */
function count_words(){
    let $editor = $("#editor");
    return $editor.val().length;
}

$(function(){
    let $editor = $("#editor");
    let $word_counter = $("#word_counter");
    $editor.on("keyup",function(){
        let $word_num = count_words();
        if(typeof($word_num) == "number"){
            $word_counter.text($word_num);
        }
    });
})