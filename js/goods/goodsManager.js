$(document).ready(function () {
    $('#list').dataTable({
        "searching":false,
        "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 5 ] }]
    });
});

$(".edit").click(function () {
    $("#modalEditGoods").modal({
        remote: "edit/editManager.html"
    });
});

$("#modalEditGoods").on("hidden.bs.modal", function () {
    $(this).removeData("bs.modal");
});  

$("#modalAddGoods").on("hidden.bs.modal", function () {
    document.getElementById("addGoods").reset();
});  

$(".del").click(function(){
    var id=$(this).parents("tr").find("#goodsId").text();
    alert("点击删除"+id);
});

$("#addSubmit").click(function(){
    var goodsName=$("#goodsName").val();
    var goodsSpec=$("#goodsSpec").val();
    var area=$("#province").select().val()+$("#city").select().val();
    var goodsType=$("#goodsType").select().val();
    alert(goodsName+"+"+goodsSpec+"+"+area+"+"+goodsType);
});