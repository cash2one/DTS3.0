var DTS = window.DTS || {};DTS.switch = function () {    $(document).ready(function () {        // 添加快递公司        $('#content').on('click', '.add_delivery', function () {            DTS.clear_form('#form_delivery');            $('#modal_delivery').modal({backdrop: 'static', keyboard: false});            $('.modal-title').text('添加快递公司');            $('#submit_delivery_add').show();            $('#submit_delivery_update').hide();        });        $(document).on('click', '#submit_delivery_add', function () {            $.ajax({                url: $(this).attr('api'),                type: 'POST',                data: $('#form_delivery').serialize(),                dataType: 'json',                cache: false,                success: function (data) {                    DTS.affirm(data.msg, data.status == 1);                    if (data.status == 1) {                        $('#modal_delivery').modal('hide');                    }                },                error: function () {                    DTS.affirm(DTS.tips_error);                }            });        });        // 修改快递模态框        $('#content').on('click', '.update_delivery', function () {            $.ajax({                url: $(this).attr('api'),                type: 'POST',                data: {                    'csrfmiddlewaretoken': $('#form_delivery [name=csrfmiddlewaretoken]').val()                },                cache: false,                success: function (data) {                    if (data.status == 0) {                        DTS.affirm(data.msg);                    } else {                        $('#modal_delivery').replaceWith(data);                        $('#modal_delivery').modal({backdrop: 'static', keyboard: false});                        $('.modal-title').text('修改快递');                        $('#submit_delivery_add').hide();                        $('#submit_delivery_update').show();                    }                },                error: function () {                    DTS.affirm(DTS.tips_error);                }            });        });        // 模态框提交        $(document).on('click', '#submit_delivery_update', function () {            $.ajax({                url: $(this).attr('api'),                type: 'POST',                data: $('#form_delivery').serialize(),                dataType: 'json',                cache: false,                success: function (data) {                    DTS.affirm(data.msg, data.status == 1);                    if (data.status == 1) {                        $('#modal_delivery').modal('hide');                    }                },                error: function () {                    DTS.affirm(DTS.tips_error);                }            });        });        // 删除快递        $('#content').on('click', '.delete_delivery', function () {            $.ajax({                url: $(this).attr('api'),                type: 'POST',                data: {                    'csrfmiddlewaretoken': $('#form_delivery [name=csrfmiddlewaretoken]').val()                },                dataType: 'json',                cache: false,                success: function (data) {                    DTS.affirm(data.msg, data.status == 1);                },                error: function () {                    DTS.affirm(DTS.tips_error);                }            });        });        // 修改快递状态        $('.delivery_is_active').on('click', function () {            $.ajax({                url: $(this).attr('api'),                type: 'POST',                data: {                    'csrfmiddlewaretoken': $('#form_delivery [name=csrfmiddlewaretoken]').val()                },                dataType: 'json',                cache: false,                success: function (data) {                    DTS.affirm(data.msg, data.status == 1);                },                error: function () {                    DTS.affirm(DTS.tips_error);                }            });        });    })}($);