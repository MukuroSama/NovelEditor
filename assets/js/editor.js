/**
 * Created by Administrator on 2017/6/8.
 */
function count_words(){
    var $editor = $("#editor");
    return $editor.val().length;
}

$(function(){
    var $editor = $("#editor");
    var $word_counter = $("#word_counter");
    $editor.on("keyup",function(){
        var $word_num = count_words();
        if(typeof($word_num) == "number"){
            $word_counter.text($word_num);
        }
    });
})