(function () {
    // var $todoForm = $('.todoForm');
    var $addTitle = $('.addTitle');
    var $addDescriptions = $('.addDescriptions');
    var $addDate = $('.addDate');
    var $todoDiv = $('#pending');
    var $doingDiv = $('#inProgress');
    var $completedDiv = $('#completed')
    var $todoCount = $('#b1');
    var $doingCount = $('#b2');
    var $completeCount = $('#b3');


    function todocount() {
        var len = $todoDiv.children().length;
        $todoCount.html(len>0? len:'');
    }
    function doingCount() {
        var len = $doingDiv.children().length;
        $doingCount.html(len>0? len:'');
    }
    function completeCount() {
        var len = $completedDiv.children().length;
        $completeCount.html(len>0? len:'');
    }

    $('#addItem').click(function () {
        var title = $addTitle.val();
        var descriptions = $addDescriptions.val();
        var date = $addDate.val();
        $todoDiv.append('<div class="alert" role="alert"><div>标题：'+title+'</div>' +
            '<div>内容：'+descriptions+'</div>' +
            '<div>日期：'+date+'</div>' +
            '<div><a href="#" class="btn btn-primary todoDoing">执行</a>' +
            '<a href="#" class="btn btn-primary todoComplete">完成</a>' +
            '<a href="#" class="btn btn-primary todoDelete">删除</a></div>')
        $('.alert').addClass('alert-danger')
        $addTitle.val('');
        $addDescriptions.val('');
        $addDate.val('');
        todocount();
    })

    $todoDiv.on('click', '.todoDelete', function () {
        $(this).parent().parent().remove();
        todocount();
    })
    $todoDiv.on('click', '.todoDoing', function () {
        var $thing = $(this).parent().parent();
        $thing.removeClass('alert alert-danger');
        $thing.addClass('alert alert-info');
        // $thing.toggleClass('alert alert-info');
        $doingDiv.append($thing);
        doingCount();
        todocount();
    })
    $todoDiv.on('click', '.todoComplete', function () {
        var $thing = $(this).parent().parent();
        $thing.removeClass('alert alert-danger');
        $thing.addClass('alert alert-success');
        $completedDiv.append($thing);
        completeCount();
        todocount();
    })
    $doingDiv.on('click', '.todoComplete', function () {
        var $thing = $(this).parent().parent();
        $thing.removeClass('alert alert-info');
        $thing.addClass('alert alert-success');
        $completedDiv.append($thing);
        completeCount();
        doingCount();
    })
    $doingDiv.on('click', '.todoDelete', function () {
        $(this).parent().parent().remove();
        doingCount();
    })
    $completedDiv.on('click', '.todoDelete', function () {
        $(this).parent().parent().remove();
        completeCount();
    })
    function cur_time() {
        var date = new Date();
        var y = date.getFullYear();
        var M = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var time = [y, M, d, h, m, s];
        for (var i = 0; i < time.length; i++) {
            (time[i] < 10) && (time[i] = '0' + time[i]);
            $('.sj span').eq(i).html(time[i]);
        }
    }
    cur_time();
    setInterval(cur_time, 1000);
})();
